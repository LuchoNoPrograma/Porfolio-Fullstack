<script setup lang="ts">
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
import type { LocalizedText, Project, SupportedLocale } from "../types/portfolio.ts";
import ProjectCarousel from "./ProjectCarousel.vue";
import BaseButton from "./shared/BaseButton.vue";
import BaseChip from "./shared/BaseChip.vue";

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
    <ProjectCarousel
      class="project-row__media"
      :eager="props.index === 0"
      :images="props.project.images"
      :title="props.project.title"
    />

    <div class="project-row__content">
      <span class="project-row__number">
        {{ String(props.index + 1).padStart(2, "0") }}
      </span>
      <span class="project-row__eyebrow">
        {{ localize(props.project.eyebrow) }}
      </span>
      <h3>{{ props.project.title }}</h3>
      <p class="project-row__description">
        {{ localize(props.project.description) }}
      </p>
      <p class="project-row__result">
        <strong>{{ t("projects.result") }}.</strong>
        {{ localize(props.project.result) }}
      </p>

      <div :aria-label="t('projects.technologies')" class="project-row__stack">
        <BaseChip v-for="item in props.project.stack" :key="item" :label="item" />
      </div>

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
  align-items: center;
  border-top: 1px solid var(--line);
  display: grid;
  gap: clamp(3rem, 6vw, 6.5rem);
  grid-template-columns: minmax(0, 1.35fr) minmax(290px, 0.65fr);
  padding: 5.5rem 0;
}

.project-row:last-child {
  border-bottom: 1px solid var(--line);
}

.project-row--reverse {
  grid-template-columns: minmax(290px, 0.65fr) minmax(0, 1.35fr);
}

.project-row--reverse .project-row__media {
  grid-column: 2;
  grid-row: 1;
}

.project-row--reverse .project-row__content {
  grid-column: 1;
  grid-row: 1;
}

.project-row__content {
  position: relative;
}

.project-row__number {
  color: #b8c0bb;
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  font-weight: 850;
  position: absolute;
  right: 0;
  top: 0;
}

.project-row__eyebrow {
  color: var(--link);
  display: block;
  font-size: 0.72rem;
  font-weight: 850;
  margin-bottom: 1.2rem;
  padding-right: 2rem;
  text-transform: uppercase;
}

.project-row h3 {
  color: var(--ink);
  font-size: 2.65rem;
  font-weight: 780;
  line-height: 1.05;
  margin: 0 0 1.2rem;
}

.project-row__description {
  color: var(--ink);
  font-size: 1.03rem;
  line-height: 1.7;
  margin: 0 0 1rem;
}

.project-row__result {
  color: var(--ink-muted);
  line-height: 1.65;
  margin: 0 0 1.6rem;
}

.project-row__result strong {
  color: var(--ink);
}

.project-row__stack,
.project-row__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.project-row__actions {
  align-items: center;
  gap: 1.35rem;
  margin-top: 1.6rem;
}

.project-row__code-link {
  align-items: center;
  color: var(--ink-muted);
  display: inline-flex;
  font-size: 0.78rem;
  font-weight: 750;
  gap: 0.45rem;
  min-height: 42px;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 45%, transparent);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.28rem;
  transition:
    color 180ms ease,
    text-decoration-color 180ms ease;
}

.project-row__code-link:hover {
  color: var(--link);
  text-decoration-color: currentColor;
}

.project-row__code-link:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 4px;
}

@media (max-width: 940px) {
  .project-row,
  .project-row--reverse {
    gap: 2.75rem;
    grid-template-columns: 1fr;
    padding: 4.5rem 0;
  }

  .project-row--reverse .project-row__media,
  .project-row--reverse .project-row__content {
    grid-column: 1;
    grid-row: auto;
  }

  .project-row__media {
    grid-row: 1;
  }

  .project-row__content {
    grid-row: 2;
  }
}

@media (max-width: 600px) {
  .project-row {
    padding: 3.5rem 0;
  }

  .project-row h3 {
    font-size: 2.15rem;
  }
}
</style>
