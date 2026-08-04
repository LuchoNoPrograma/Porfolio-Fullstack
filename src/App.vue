<script setup lang="ts">
import {
  IconArrowDown,
  IconArrowUp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
  IconMapPin,
} from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
import heroPortrait from "./assets/images/hero-portrait.webp";
import ProjectShowcase from "./components/ProjectShowcase.vue";
import SiteHeader from "./components/SiteHeader.vue";
import TechnologyGrid from "./components/TechnologyGrid.vue";
import BaseButton from "./components/shared/BaseButton.vue";
import BaseChip from "./components/shared/BaseChip.vue";
import { experience, navigation, projects, socialLinks } from "./data/portfolio.ts";
import type { LocalizedText, SupportedLocale } from "./types/portfolio.ts";
import { openProtectedEmail } from "./utils/contact.ts";

const { locale, t } = useI18n();
const currentYear = new Date().getFullYear();

const localize = (copy: LocalizedText) =>
  copy[locale.value as SupportedLocale] ?? copy.es;
</script>

<template>
  <a class="skip-link" href="#contenido">{{ t("common.skip") }}</a>
  <SiteHeader />

  <main id="contenido">
    <section id="inicio" class="hero" aria-labelledby="hero-title">
      <img
        :src="heroPortrait"
        alt=""
        aria-hidden="true"
        class="hero__media hero__media-enter"
        fetchpriority="high"
        height="900"
        width="1600"
      />

      <div class="hero__content">
        <p class="hero__eyebrow hero-enter hero-enter--1">
          {{ t("hero.eyebrow") }}
        </p>
        <h1 id="hero-title" class="hero-enter hero-enter--2">
          <span>Luis</span>
          <span>Morales.</span>
        </h1>
        <p class="hero__promise hero-enter hero-enter--3">
          {{ t("hero.value") }}
        </p>

        <ul
          class="hero__core-stack hero-enter hero-enter--3"
          aria-label="Stack principal"
        >
          <li>Java 17</li>
          <li>Spring Boot</li>
          <li>Vue 3</li>
          <li>Flutter</li>
        </ul>

        <div class="hero__actions hero-enter hero-enter--4">
          <BaseButton href="#proyectos">
            {{ t("common.viewProjects") }}
            <template #icon><IconArrowDown :size="19" /></template>
          </BaseButton>
          <BaseButton
            download="CV FULLSTACK LUIS MORALES.pdf"
            :href="socialLinks.cv"
            variant="secondary"
          >
            {{ t("common.downloadCv") }}
            <template #icon><IconDownload :size="18" /></template>
          </BaseButton>
        </div>

        <p class="hero__location hero-enter hero-enter--4">
          <IconMapPin aria-hidden="true" :size="16" />
          {{ t("hero.location") }}
        </p>
      </div>

      <div class="hero__social hero-enter hero-enter--4">
        <a
          :href="socialLinks.github"
          aria-label="GitHub"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconBrandGithub :size="21" />
        </a>
        <a
          :href="socialLinks.linkedin"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconBrandLinkedin :size="21" />
        </a>
      </div>
    </section>

    <section id="perfil" class="about-section section-band">
      <div class="section-shell about-section__layout">
        <div v-reveal class="section-heading">
          <span class="section-index">{{ t("profile.index") }}</span>
          <h2>{{ t("profile.title") }}</h2>
        </div>

        <div class="about-section__body">
          <p v-reveal="60" class="about-section__lead">
            {{ t("profile.lead") }}
          </p>

          <div class="capability-list">
            <article v-reveal="100">
              <span>01</span>
              <h3>{{ t("profile.backendTitle") }}</h3>
              <p>{{ t("profile.backendText") }}</p>
            </article>
            <article v-reveal="170">
              <span>02</span>
              <h3>{{ t("profile.frontendTitle") }}</h3>
              <p>{{ t("profile.frontendText") }}</p>
            </article>
            <article v-reveal="240">
              <span>03</span>
              <h3>{{ t("profile.mobileTitle") }}</h3>
              <p>{{ t("profile.mobileText") }}</p>
            </article>
            <article v-reveal="310">
              <span>04</span>
              <h3>{{ t("profile.deliveryTitle") }}</h3>
              <p>{{ t("profile.deliveryText") }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="proyectos" class="projects-section section-band">
      <div class="section-shell">
        <div v-reveal class="projects-section__header">
          <div class="section-heading">
            <span class="section-index">{{ t("projects.index") }}</span>
            <h2>{{ t("projects.title") }}</h2>
          </div>
          <p>{{ t("projects.intro") }}</p>
        </div>

        <ProjectShowcase
          v-for="(project, index) in projects"
          :key="project.id"
          v-reveal
          :index="index"
          :project="project"
        />
      </div>
    </section>

    <section id="experiencia" class="experience-section section-band">
      <div class="section-shell experience-section__layout">
        <div v-reveal class="experience-section__intro">
          <span class="section-index section-index--dark">
            {{ t("experience.index") }}
          </span>
          <h2>{{ t("experience.title") }}</h2>
          <p>{{ t("experience.intro") }}</p>
          <BaseButton
            download="CV FULLSTACK LUIS MORALES.pdf"
            :href="socialLinks.cv"
            variant="secondary"
          >
            {{ t("common.downloadCv") }}
            <template #icon><IconDownload :size="19" /></template>
          </BaseButton>
        </div>

        <div class="timeline">
          <article
            v-for="(item, itemIndex) in experience"
            :key="`${item.company}-${item.period.es}`"
            v-reveal="itemIndex * 90"
            class="timeline__item"
          >
            <span class="timeline__period">{{ localize(item.period) }}</span>
            <div>
              <h3>{{ localize(item.role) }}</h3>
              <p class="timeline__company">{{ item.company }}</p>
              <p class="timeline__description">
                {{ localize(item.description) }}
              </p>
              <div class="timeline__stack">
                <BaseChip
                  v-for="technology in item.stack"
                  :key="technology"
                  :label="technology"
                  tone="dark"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="tecnologias" class="technologies-section section-band">
      <div class="section-shell">
        <div v-reveal class="technologies-section__header">
          <div class="section-heading section-heading--dark">
            <span class="section-index section-index--dark">
              {{ t("technologies.index") }}
            </span>
            <h2>{{ t("technologies.title") }}</h2>
          </div>
          <p>{{ t("technologies.intro") }}</p>
        </div>

        <TechnologyGrid />
      </div>
    </section>

    <section id="contacto" class="contact-section section-band">
      <div v-reveal class="section-shell contact-section__inner">
        <div>
          <span class="section-index section-index--dark">
            {{ t("contact.index") }}
          </span>
          <h2>{{ t("contact.title") }}</h2>
          <p>{{ t("contact.text") }}</p>
        </div>

        <div class="contact-section__actions">
          <BaseButton @click="openProtectedEmail">
            {{ t("common.email") }}
            <template #icon><IconMail :size="19" /></template>
          </BaseButton>
          <BaseButton :href="socialLinks.linkedin" target="_blank" variant="secondary">
            LinkedIn
            <template #icon><IconBrandLinkedin :size="19" /></template>
          </BaseButton>
          <small>{{ t("contact.protected") }}</small>
        </div>

        <div class="contact-section__location">
          <IconMapPin aria-hidden="true" :size="18" />
          {{ t("contact.location") }}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="section-shell site-footer__top">
      <div class="site-footer__identity">
        <a href="#inicio" class="site-footer__brand">LM<span>.</span></a>
        <p>{{ t("footer.description") }}</p>
      </div>

      <div class="site-footer__column">
        <h2>{{ t("footer.navigation") }}</h2>
        <a v-for="item in navigation" :key="item.href" :href="item.href">
          {{ t(item.labelKey) }}
        </a>
      </div>

      <div class="site-footer__column">
        <h2>{{ t("footer.profiles") }}</h2>
        <a :href="socialLinks.github" rel="noopener noreferrer" target="_blank">
          GitHub
        </a>
        <a :href="socialLinks.linkedin" rel="noopener noreferrer" target="_blank">
          LinkedIn
        </a>
        <a :href="socialLinks.cv" download="CV FULLSTACK LUIS MORALES.pdf">
          {{ t("common.downloadCv") }}
        </a>
      </div>

      <div class="site-footer__column">
        <h2>{{ t("footer.availability") }}</h2>
        <button type="button" @click="openProtectedEmail">
          <IconMail aria-hidden="true" :size="17" />
          {{ t("common.email") }}
        </button>
      </div>
    </div>

    <div class="section-shell site-footer__bottom">
      <p>© {{ currentYear }} {{ t("footer.rights") }}</p>
      <a href="#inicio">
        {{ t("footer.backToTop") }}
        <IconArrowUp aria-hidden="true" :size="17" />
      </a>
    </div>
  </footer>
</template>
