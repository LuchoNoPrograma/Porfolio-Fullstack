<script setup lang="ts">
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
import type { LocalizedText, Project, SupportedLocale } from "../types/portfolio.ts";
import ProjectCarousel from "./ProjectCarousel.vue";
import BaseButton from "./shared/BaseButton.vue";

const props = defineProps<{
  project: Project;
  index: number;
}>();

const { locale, t } = useI18n();
const localize = (copy: LocalizedText) =>
  copy[locale.value as SupportedLocale] ?? copy.es;
</script>

<template>
  <article
    :class="{ 'project-row--reverse': props.index % 2 === 1 }"
    class="project-row"
  >
    <header class="project-row__heading">
      <span class="project-row__number" aria-hidden="true">
        {{ String(props.index + 1).padStart(2, "0") }}
      </span>
      <div>
        <span class="project-row__eyebrow">{{ localize(props.project.eyebrow) }}</span>
        <h3>{{ props.project.title }}</h3>
      </div>
    </header>

    <ProjectCarousel
      class="project-row__media"
      :eager="props.index === 0"
      :images="props.project.images"
      :title="props.project.title"
    />

    <div class="project-row__content">
      <p class="project-row__description">
        {{ localize(props.project.description) }}
      </p>
      <p class="project-row__result">
        <strong>{{ t("projects.result") }}.</strong>
        {{ localize(props.project.result) }}
      </p>

      <ul :aria-label="t('projects.technologies')" class="project-row__stack">
        <li v-for="item in props.project.stack" :key="item">{{ item }}</li>
      </ul>

      <div class="project-row__actions">
        <BaseButton
          v-if="props.project.websiteUrl"
          :href="props.project.websiteUrl"
          target="_blank"
        >
          {{ t("common.viewProject") }}
          <template #icon>
            <IconExternalLink :size="18" />
          </template>
        </BaseButton>

        <a
          :href="props.project.repositoryUrl"
          class="project-row__code-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconBrandGithub aria-hidden="true" :size="18" />
          {{ t("common.viewCode") }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-row {
  --project-stage: #dce5dc;
  align-items: center;
  border-top: 1px solid rgb(221 236 225 / 20%);
  display: grid;
  gap: 2.5rem clamp(2rem, 4vw, 4rem);
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.85fr);
  padding-block: 3rem 5rem;
}

.project-row--reverse {
  --project-stage: #d5ddde;
}

.project-row__heading {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  grid-column: 1 / -1;
}

.project-row__number {
  align-self: stretch;
  border-right: 1px solid rgb(221 236 225 / 20%);
  color: #8aab97;
  font-size: clamp(2.75rem, 5vw, 4rem);
  font-variant-numeric: tabular-nums;
  font-weight: 350;
  line-height: 1;
  padding: 0.5rem 1.5rem 0.5rem 0;
}

.project-row__eyebrow {
  color: #b2d5bc;
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
}

.project-row h3 {
  color: #f4f5ee;
  font-size: clamp(2rem, 3.5vw, 3.25rem);
  font-weight: 650;
  letter-spacing: -0.045em;
  line-height: 1.1;
  margin: 0;
}

.project-row__media {
  align-self: start;
  background: var(--project-stage);
  border: 0;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgb(0 0 0 / 16%);
  min-width: 0;
  transition:
    box-shadow 280ms ease,
    transform 280ms ease;
}

.project-row__media:hover {
  box-shadow: 0 30px 70px rgb(0 0 0 / 26%);
  transform: translateY(-4px);
}

.project-row__media :deep(.project-carousel__frame) {
  aspect-ratio: 4 / 3;
  background: var(--project-stage);
  padding: clamp(1rem, 2.2vw, 2rem) clamp(1rem, 2.2vw, 2rem) 3.75rem;
}

.project-row__media :deep(.project-carousel__frame img) {
  border-radius: 4px;
  object-fit: contain;
}

.project-row__media :deep(.carousel__prev),
.project-row__media :deep(.carousel__next) {
  background: #193d31;
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 50%;
  bottom: 0.7rem;
  height: 36px;
  margin: 0;
  top: auto;
  transform: none;
  width: 36px;
}

.project-row__media :deep(.carousel__prev) {
  left: auto;
  right: 3.5rem;
}

.project-row__media :deep(.carousel__next) {
  right: 0.8rem;
}

.project-row__media :deep(.carousel__prev:hover),
.project-row__media :deep(.carousel__next:hover) {
  background: #2f7652;
}

.project-row__media :deep(.carousel__pagination) {
  bottom: 1.6rem;
}

.project-row__media :deep(.carousel__pagination-button) {
  background: #8c9f92;
  border-radius: 3px;
  height: 4px;
  width: 18px;
}

.project-row__media :deep(.carousel__pagination-button--active) {
  background: #193d31;
}

.project-row__media :deep(.project-carousel__counter) {
  background: transparent;
  border: 0;
  bottom: 0.75rem;
  color: #193d31;
  left: 0.75rem;
}

.project-row__content {
  min-width: 0;
}

.project-row__description {
  color: #f0f3ed;
  font-size: 1.05rem;
  line-height: 1.75;
  margin: 0 0 1.5rem;
}

.project-row__result {
  border-left: 2px solid #84b596;
  color: #b7c9be;
  font-size: 0.93rem;
  line-height: 1.75;
  margin: 0 0 1.8rem;
  padding-left: 1rem;
}

.project-row__result strong {
  color: #f0f3ed;
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.45rem;
}

.project-row__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.project-row__stack li {
  color: #c7dfcf;
  font-size: 0.75rem;
  font-weight: 550;
  line-height: 1.6;
}

.project-row__stack li:not(:last-child)::after {
  color: #789482;
  content: "/";
  margin-inline: 0.65rem;
}

.project-row__actions {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-row__actions :deep(.base-button--primary) {
  background: #c6e8ca;
  border-color: #c6e8ca;
  border-radius: 5px;
  box-shadow: none;
  color: #14352a;
  min-height: 48px;
}

.project-row__actions :deep(.base-button--primary:hover) {
  background: #e5f4df;
  border-color: #e5f4df;
}

.project-row__code-link {
  align-items: center;
  color: #e0ebe3;
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 650;
  gap: 0.5rem;
  min-height: 44px;
  text-decoration: underline;
  text-decoration-color: #718c7c;
  text-underline-offset: 0.4rem;
  transition:
    color 180ms ease,
    text-decoration-color 180ms ease;
}

.project-row__code-link:hover {
  color: #c6e8ca;
  text-decoration-color: currentColor;
}

.project-row__code-link:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 4px;
}

@media (min-width: 1051px) {
  .project-row--reverse {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.55fr);
  }

  .project-row--reverse .project-row__media {
    grid-column: 2;
    grid-row: 2;
  }

  .project-row--reverse .project-row__content {
    grid-column: 1;
    grid-row: 2;
  }
}

@media (max-width: 1050px) {
  .project-row {
    gap: 2rem;
    grid-template-columns: minmax(0, 1fr);
  }

  .project-row__description,
  .project-row__result {
    max-width: 65ch;
  }

  .project-row__media :deep(.project-carousel__frame) {
    aspect-ratio: 16 / 11;
  }
}

@media (max-width: 600px) {
  .project-row {
    gap: 1.5rem;
    padding-block: 2rem 3rem;
  }

  .project-row__heading {
    align-items: start;
    gap: 1rem;
  }

  .project-row__number {
    font-size: 2.25rem;
    padding-right: 1rem;
  }

  .project-row__eyebrow {
    font-size: 0.63rem;
    letter-spacing: 0.06em;
  }

  .project-row__media :deep(.project-carousel__frame) {
    aspect-ratio: 4 / 3;
    padding: 0.75rem 0.75rem 3.5rem;
  }

  .project-row__media :deep(.carousel__pagination) {
    display: none;
  }

  .project-row__description {
    font-size: 1rem;
  }

  .project-row__actions {
    gap: 1rem;
  }
}
</style>
