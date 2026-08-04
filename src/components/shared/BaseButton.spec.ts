import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import BaseButton from "./BaseButton.vue";

describe("BaseButton", () => {
  it("renders a semantic button and emits its click", async () => {
    const wrapper = mount(BaseButton, {
      slots: { default: "Enviar" },
    });

    expect(wrapper.element.tagName).toBe("BUTTON");
    expect(wrapper.attributes("type")).toBe("button");

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("renders a secure downloadable link", () => {
    const wrapper = mount(BaseButton, {
      props: {
        href: "/cv.pdf",
        target: "_blank",
        download: "Luis-Morales-CV.pdf",
      },
      slots: { default: "Descargar CV" },
    });

    expect(wrapper.element.tagName).toBe("A");
    expect(wrapper.attributes("href")).toBe("/cv.pdf");
    expect(wrapper.attributes("download")).toBe("Luis-Morales-CV.pdf");
    expect(wrapper.attributes("rel")).toBe("noopener noreferrer");
  });
});
