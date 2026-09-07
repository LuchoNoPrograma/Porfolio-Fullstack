import { expect, test } from "@playwright/test";

test("presents the portfolio and selected projects", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  await expect(page).toHaveTitle(/Luis Morales/);
  await expect(
    page.getByRole("heading", { level: 1, name: /Luis Morales/ }),
  ).toBeVisible();
  await expect(page.locator(".hero__media")).toHaveCSS(
    "animation-name",
    "hero-media-in",
  );
  await expect(page.locator(".project-row")).toHaveCount(6);

  await page.locator("#proyectos").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { level: 3, name: "Nini Hub" })).toBeVisible();
  await expect(
    page.locator(".project-row").first().getByRole("button", {
      name: "Imagen siguiente",
    }),
  ).toBeVisible();

  await page
    .locator(".project-row")
    .first()
    .locator(".carousel__slide--active .project-carousel__expand")
    .click();

  const expandedGallery = page.getByRole("dialog", {
    name: "Galería ampliada de Chatty",
  });
  await expect(expandedGallery).toBeVisible();
  const galleryHeader = expandedGallery.locator(".project-lightbox__header");
  await expect(galleryHeader.getByText("Imagen 1 de 4")).toBeVisible();
  await expandedGallery.getByRole("button", { name: "Imagen siguiente" }).click();
  await expect(galleryHeader.getByText("Imagen 2 de 4")).toBeVisible();
  await expandedGallery.getByRole("button", { name: "Cerrar galería" }).click();
  await expect(expandedGallery).not.toBeVisible();

  await page
    .locator(".project-row")
    .first()
    .locator(".carousel__slide--active .project-carousel__expand")
    .click();
  await page.keyboard.press("Escape");
  await expect(expandedGallery).not.toBeVisible();

  await page.locator("#tecnologias").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { name: "Java 17", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Flutter", exact: true }),
  ).toBeVisible();
  for (const technology of [
    "Nuxt",
    "SQLite",
    "Proxmox",
    "JUnit 5",
    "Testcontainers",
    "Selenium",
    "Cypress",
    "Playwright",
  ]) {
    await expect(
      page.locator("#tecnologias").getByText(technology, { exact: true }),
    ).toBeVisible();
  }

  const primaryTechnology = page.locator(".primary-technology").first();
  const restingShadow = await primaryTechnology.evaluate(
    (element) => getComputedStyle(element).boxShadow,
  );
  await primaryTechnology.hover();
  await expect(primaryTechnology).not.toHaveCSS("transform", "none");
  await expect
    .poll(() =>
      primaryTechnology.evaluate((element) => getComputedStyle(element).boxShadow),
    )
    .not.toBe(restingShadow);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  expect(pageErrors).toEqual([]);
});

test("supports mobile navigation without layout overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menú" });
  await menuButton.click();

  const navigation = page.getByRole("navigation", {
    name: "Navegación principal",
  });
  await expect(navigation).toBeVisible();

  await navigation.getByRole("link", { name: "Proyectos" }).click();
  await expect(page).toHaveURL(/#proyectos$/);
  await expect(navigation).not.toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("switches the interface to English", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "EN", exact: true }).click();

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Products and systems delivered.",
    }),
  ).toBeAttached();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page).toHaveTitle(/Java Backend and Fullstack Developer/);
});
