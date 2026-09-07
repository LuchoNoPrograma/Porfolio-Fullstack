import { describe, expect, it } from "vitest";
import { navigation, projects } from "./portfolio.ts";
import { technologyGroups } from "./technologies.ts";

describe("portfolio data", () => {
  it("keeps project identifiers and links valid", () => {
    const identifiers = projects.map((project) => project.id);

    expect(new Set(identifiers).size).toBe(projects.length);
    expect(projects.length).toBeGreaterThanOrEqual(3);
    expect(identifiers).toContain("nini-hub");

    projects.forEach((project) => {
      expect(project.repositoryUrl).toMatch(/^https:\/\/github\.com\//);
      expect(project.images.length).toBeGreaterThanOrEqual(3);
      project.images.forEach((image) => {
        expect(image.src).toContain("images/projects/");
      });
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });

  it("links navigation items to unique sections", () => {
    const sections = navigation.map((item) => item.href);
    expect(new Set(sections).size).toBe(sections.length);
    expect(sections).toContain("#proyectos");
    expect(sections).toContain("#contacto");
  });

  it("keeps testing tools in their own technology group", () => {
    const testing = technologyGroups.find((group) => group.id === "testing");

    expect(testing?.items.map((item) => item.name)).toEqual([
      "JUnit 5",
      "Testcontainers",
      "Selenium",
      "Cypress",
      "Playwright",
    ]);
  });
});
