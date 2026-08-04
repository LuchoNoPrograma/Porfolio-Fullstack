import type { Directive } from "vue";

const observers = new WeakMap<HTMLElement, IntersectionObserver>();
const BASE_REVEAL_DELAY_MS = 90;

const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(element, binding) {
    const delay = BASE_REVEAL_DELAY_MS + (binding.value ?? 0);
    element.style.setProperty("--reveal-delay", `${delay}ms`);

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.classList.add("is-visible");
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);
    observers.set(element, observer);
  },
  unmounted(element) {
    observers.get(element)?.disconnect();
    observers.delete(element);
  },
};

export default reveal;
