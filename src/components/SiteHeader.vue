<script setup lang="ts">
import { IconMail, IconMenu2, IconX } from "@tabler/icons-vue";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { navigation } from "../data/portfolio.ts";
import { setDocumentLocale } from "../i18n.ts";
import type { SupportedLocale } from "../types/portfolio.ts";
import { openProtectedEmail } from "../utils/contact.ts";

const { locale, t } = useI18n();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeHref = ref("#inicio");
let sectionObserver: IntersectionObserver | undefined;

const closeMenu = () => {
  isMenuOpen.value = false;
};

const setActiveHref = (href: `#${string}`) => {
  activeHref.value = href;
  closeMenu();
};

const onScroll = () => {
  isScrolled.value = window.scrollY > 24;
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeMenu();
};

const changeLocale = (nextLocale: SupportedLocale) => {
  locale.value = nextLocale;
  setDocumentLocale(nextLocale);
  closeMenu();
};

watch(isMenuOpen, (isOpen) => {
  document.body.classList.toggle("menu-open", isOpen);
});

onMounted(() => {
  onScroll();
  setDocumentLocale(locale.value as SupportedLocale);
  const currentHash = window.location.hash as `#${string}`;
  if (navigation.some((item) => item.href === currentHash)) {
    activeHref.value = currentHash;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);

  const sections = navigation
    .map((item) => document.querySelector(item.href))
    .filter((section): section is Element => section !== null);

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection?.target.id) {
        activeHref.value = `#${visibleSection.target.id}`;
      }
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0.1, 0.35, 0.65],
    },
  );

  sections.forEach((section) => sectionObserver?.observe(section));
});

onBeforeUnmount(() => {
  document.body.classList.remove("menu-open");
  sectionObserver?.disconnect();
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <header :class="{ 'site-header--scrolled': isScrolled }" class="site-header">
    <div class="site-header__bar">
      <a
        class="site-header__brand"
        href="#inicio"
        :aria-label="t('navigation.home')"
        @click="closeMenu"
      >
        <strong>LM<span>.</span></strong>
        <small>Fullstack Developer</small>
      </a>

      <button
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        :aria-label="isMenuOpen ? t('common.closeMenu') : t('common.openMenu')"
        class="site-header__toggle"
        type="button"
        @click="isMenuOpen = !isMenuOpen"
      >
        <IconX v-if="isMenuOpen" aria-hidden="true" :size="24" />
        <IconMenu2 v-else aria-hidden="true" :size="24" />
      </button>

      <nav
        id="primary-navigation"
        :class="{ 'site-header__nav--open': isMenuOpen }"
        :aria-label="t('common.mainNavigation')"
        class="site-header__nav"
      >
        <a
          v-for="item in navigation"
          :key="item.href"
          :aria-current="activeHref === item.href ? 'page' : undefined"
          :class="{
            'site-header__link--active': activeHref === item.href,
          }"
          :href="item.href"
          class="site-header__link"
          @click="setActiveHref(item.href)"
        >
          {{ t(item.labelKey) }}
        </a>

        <div
          :aria-label="t('common.changeLanguage')"
          class="language-switcher"
          role="group"
        >
          <button
            :aria-pressed="locale === 'es'"
            :class="{ 'language-switcher__button--active': locale === 'es' }"
            class="language-switcher__button"
            type="button"
            @click="changeLocale('es')"
          >
            ES
          </button>
          <button
            :aria-pressed="locale === 'en'"
            :class="{ 'language-switcher__button--active': locale === 'en' }"
            class="language-switcher__button"
            type="button"
            @click="changeLocale('en')"
          >
            EN
          </button>
        </div>
      </nav>

      <button class="site-header__contact" type="button" @click="openProtectedEmail">
        <IconMail aria-hidden="true" :size="18" />
        {{ t("common.talk") }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  color: var(--paper);
  left: 0;
  padding: 0.75rem 2vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;
}

.site-header__bar {
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin: 0 auto;
  max-width: 1380px;
  min-height: 58px;
  padding: 0 0.85rem;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.site-header--scrolled .site-header__bar {
  backdrop-filter: blur(16px);
  background: rgb(17 19 24 / 92%);
  border-color: rgb(255 255 255 / 13%);
  box-shadow: 0 12px 34px rgb(0 0 0 / 20%);
}

.site-header__brand {
  align-items: center;
  color: var(--paper);
  display: flex;
  gap: 0.8rem;
  text-decoration: none;
}

.site-header__brand strong {
  font-size: 1.2rem;
  font-weight: 900;
}

.site-header__brand span {
  color: var(--accent-soft);
}

.site-header__brand small {
  border-left: 1px solid rgb(255 255 255 / 22%);
  color: rgb(255 255 255 / 52%);
  font-size: 0.68rem;
  font-weight: 700;
  padding-left: 0.8rem;
}

.site-header__nav {
  align-items: center;
  display: flex;
  gap: 1.25rem;
  justify-content: center;
}

.site-header__link {
  color: rgb(255 255 255 / 67%);
  font-size: 0.75rem;
  font-weight: 750;
  padding: 0.65rem 0;
  position: relative;
  text-decoration: none;
}

.site-header__link::after {
  background: var(--accent-soft);
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
  width: 100%;
}

.site-header__link:hover,
.site-header__link--active {
  color: var(--paper);
}

.site-header__link--active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.language-switcher {
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 5px;
  display: flex;
  margin-left: 0.25rem;
  overflow: hidden;
}

.language-switcher__button {
  background: transparent;
  border: 0;
  color: rgb(255 255 255 / 52%);
  cursor: pointer;
  font: inherit;
  font-size: 0.65rem;
  font-weight: 850;
  height: 30px;
  padding: 0 0.5rem;
}

.language-switcher__button + .language-switcher__button {
  border-left: 1px solid rgb(255 255 255 / 18%);
}

.language-switcher__button--active {
  background: var(--paper);
  color: var(--ink);
}

.site-header__contact {
  align-items: center;
  background: transparent;
  border: 1px solid rgb(255 255 255 / 38%);
  border-radius: 5px;
  color: var(--paper);
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 800;
  gap: 0.5rem;
  min-height: 38px;
  padding: 0.5rem 0.7rem;
  transition:
    background-color 180ms ease,
    color 180ms ease;
}

.site-header__contact:hover {
  background: var(--paper);
  color: var(--ink);
}

.site-header__toggle {
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--paper);
  cursor: pointer;
  display: none;
  height: 44px;
  justify-content: center;
  padding: 0;
  width: 44px;
}

.site-header a:focus-visible,
.site-header button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

@media (max-width: 980px) {
  .site-header__brand small {
    display: none;
  }

  .site-header__nav {
    gap: 0.9rem;
  }
}

@media (max-width: 820px) {
  .site-header {
    padding: 0.55rem;
  }

  .site-header__bar {
    background: rgb(17 19 24 / 88%);
    border-color: rgb(255 255 255 / 12%);
    grid-template-columns: 1fr auto;
  }

  .site-header__toggle {
    display: inline-flex;
  }

  .site-header__contact {
    display: none;
  }

  .site-header__nav {
    align-items: stretch;
    background: #111318;
    border: 1px solid rgb(255 255 255 / 13%);
    border-radius: 8px;
    box-shadow: 0 18px 38px rgb(0 0 0 / 35%);
    display: none;
    flex-direction: column;
    gap: 0;
    left: 0;
    margin-top: 0.5rem;
    padding: 0.8rem;
    position: absolute;
    right: 0;
    top: 100%;
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__link {
    border-bottom: 1px solid rgb(255 255 255 / 10%);
    font-size: 0.9rem;
    padding: 0.9rem 0.4rem;
  }

  .site-header__link::after {
    display: none;
  }

  .language-switcher {
    align-self: flex-start;
    margin: 0.8rem 0 0;
  }
}
</style>
