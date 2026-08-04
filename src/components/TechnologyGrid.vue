<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { primaryStack, technologyGroups } from "../data/technologies.ts";
import type { LocalizedText, SupportedLocale, Technology } from "../types/portfolio.ts";

const { locale, t } = useI18n();

const localize = (copy: LocalizedText) =>
  copy[locale.value as SupportedLocale] ?? copy.es;

const technologyStyle = (technology: Technology) => ({
  "--technology-color": technology.color,
  "--technology-icon": `url("${technology.icon}")`,
});
</script>

<template>
  <div class="technology-layout">
    <section aria-labelledby="primary-stack-title">
      <h3
        id="primary-stack-title"
        class="primary-stack-label mb-5 text-xs font-extrabold uppercase tracking-normal"
      >
        {{ t("technologies.main") }}
      </h3>

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="(technology, technologyIndex) in primaryStack"
          :key="technology.name"
          v-reveal="technologyIndex * 70"
          :style="technologyStyle(technology)"
          class="primary-technology group relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.045] p-5 transition duration-200 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
        >
          <span class="technology-icon technology-icon--large" aria-hidden="true" />
          <div class="mt-5">
            <h4 class="m-0 text-lg font-extrabold text-white">
              {{ technology.name }}
            </h4>
            <p class="mt-1 text-sm text-white/55">
              {{ technology.detail ? localize(technology.detail) : "" }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="complementary-stack-title" class="mt-12">
      <h3
        id="complementary-stack-title"
        class="mb-5 text-xs font-extrabold uppercase tracking-normal text-white/50"
      >
        {{ t("technologies.complementary") }}
      </h3>

      <div class="technology-groups">
        <article
          v-for="(group, groupIndex) in technologyGroups"
          :key="group.id"
          v-reveal="groupIndex * 60"
          class="border-t border-white/12 py-6"
        >
          <h4 class="mb-4 text-sm font-bold text-white">
            {{ localize(group.label) }}
          </h4>
          <ul class="m-0 flex list-none flex-wrap gap-3 p-0">
            <li
              v-for="technology in group.items"
              :key="technology.name"
              :style="technologyStyle(technology)"
              class="technology-tile"
            >
              <span class="technology-icon" aria-hidden="true" />
              <span>{{ technology.name }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.technology-layout {
  margin-top: 3.5rem;
}

.primary-stack-label {
  color: var(--accent-soft);
}

.primary-technology::before {
  background: var(--technology-color);
  content: "";
  height: 3px;
  inset: 0 0 auto;
  position: absolute;
}

.primary-technology {
  box-shadow:
    0 14px 30px rgb(0 0 0 / 22%),
    inset 0 1px 0 rgb(255 255 255 / 7%);
  transition:
    background-color 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease,
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.primary-technology:hover {
  border-color: color-mix(in srgb, var(--technology-color) 46%, white 12%);
  box-shadow:
    0 30px 58px rgb(0 0 0 / 38%),
    0 0 0 1px color-mix(in srgb, var(--technology-color) 32%, transparent),
    inset 0 1px 0 rgb(255 255 255 / 12%);
  transform: translateY(-7px);
}

.technology-groups {
  display: grid;
  gap: 0 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.technology-tile {
  align-items: center;
  background: rgb(255 255 255 / 5%);
  border: 1px solid rgb(255 255 255 / 12%);
  border-radius: 6px;
  box-shadow:
    0 8px 18px rgb(0 0 0 / 20%),
    inset 0 1px 0 rgb(255 255 255 / 5%);
  color: rgb(255 255 255 / 72%);
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 700;
  gap: 0.65rem;
  min-height: 46px;
  padding: 0.55rem 0.7rem;
  transition:
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    color 220ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.technology-tile:hover {
  background: rgb(255 255 255 / 9%);
  border-color: color-mix(in srgb, var(--technology-color) 58%, transparent);
  color: #fff;
  box-shadow:
    0 18px 32px rgb(0 0 0 / 34%),
    0 0 0 1px color-mix(in srgb, var(--technology-color) 22%, transparent);
  transform: translateY(-4px);
}

.primary-technology .technology-icon {
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.primary-technology:hover .technology-icon {
  transform: translateY(-2px) scale(1.08);
}

.technology-icon {
  background: var(--technology-color);
  display: block;
  flex: 0 0 auto;
  height: 22px;
  mask-image: var(--technology-icon);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 22px;
}

.technology-icon--large {
  height: 42px;
  width: 42px;
}

@media (max-width: 760px) {
  .technology-groups {
    grid-template-columns: 1fr;
  }
}
</style>
