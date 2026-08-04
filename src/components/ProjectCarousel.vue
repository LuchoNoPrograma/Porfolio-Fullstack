<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import type { ProjectImage, SupportedLocale } from "../types/portfolio.ts";

const props = defineProps<{
  images: readonly ProjectImage[];
  title: string;
  eager?: boolean;
}>();

const { locale, t } = useI18n();
const currentSlide = ref(0);

const carouselI18n = computed(() => ({
  ariaGallery: props.title,
  ariaNextSlide: t("common.nextImage"),
  ariaPreviousSlide: t("common.previousImage"),
  ariaNavigateToSlide: t("common.imageOf", {
    current: "{slideNumber}",
    total: props.images.length,
  }),
  itemXofY: t("common.imageOf", {
    current: "{currentSlide}",
    total: "{slidesCount}",
  }),
}));

const imageAlt = (image: ProjectImage) =>
  image.alt[locale.value as SupportedLocale] ?? image.alt.es;
</script>

<template>
  <div class="project-carousel">
    <Carousel
      v-model="currentSlide"
      :aria-label="title"
      :i18n="carouselI18n"
      :items-to-show="1"
      :mouse-drag="true"
      :touch-drag="true"
      :transition="420"
      :wrap-around="images.length > 1"
    >
      <Slide v-for="(image, imageIndex) in images" :key="image.src">
        <div
          :class="{ 'project-carousel__frame--contain': image.fit === 'contain' }"
          class="project-carousel__frame"
        >
          <img
            :alt="imageAlt(image)"
            :loading="props.eager && imageIndex === 0 ? 'eager' : 'lazy'"
            :src="image.src"
            decoding="async"
            height="760"
            width="1200"
          />
        </div>
      </Slide>

      <template v-if="images.length > 1" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <span class="project-carousel__counter" aria-hidden="true">
      {{ String(currentSlide + 1).padStart(2, "0") }} /
      {{ String(images.length).padStart(2, "0") }}
    </span>
  </div>
</template>

<style scoped>
.project-carousel {
  background: #11141b;
  border: 1px solid #cfd4df;
  border-radius: 8px;
  box-shadow: 0 22px 54px rgb(26 35 58 / 14%);
  overflow: hidden;
  position: relative;
}

.project-carousel__frame {
  aspect-ratio: 16 / 10;
  background: #e9ecf2;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.project-carousel__frame img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.project-carousel__frame--contain {
  background: #151821;
  padding: 1.25rem;
}

.project-carousel__frame--contain img {
  object-fit: contain;
}

.project-carousel__counter {
  background: rgb(12 15 22 / 88%);
  border: 1px solid rgb(255 255 255 / 14%);
  border-radius: 4px;
  bottom: 1rem;
  color: #fff;
  font-size: 0.7rem;
  font-variant-numeric: tabular-nums;
  font-weight: 800;
  left: 1rem;
  padding: 0.45rem 0.55rem;
  position: absolute;
  z-index: 2;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background: rgb(12 15 22 / 88%);
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 4px;
  color: #fff;
  height: 42px;
  margin: 0 0.8rem;
  width: 42px;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background: var(--accent);
  color: #ffffff;
}

:deep(.carousel__pagination) {
  bottom: 1.1rem;
  gap: 0.4rem;
  left: 50%;
  margin: 0;
  padding: 0;
  position: absolute;
  transform: translateX(-50%);
}

:deep(.carousel__pagination-button) {
  background: rgb(255 255 255 / 40%);
  border-radius: 0;
  height: 3px;
  padding: 0;
  width: 24px;
}

:deep(.carousel__pagination-button--active) {
  background: var(--accent);
}

@media (max-width: 600px) {
  .project-carousel__frame {
    aspect-ratio: 4 / 3;
  }

  .project-carousel__frame--contain {
    padding: 0.75rem;
  }

  :deep(.carousel__prev),
  :deep(.carousel__next) {
    height: 38px;
    margin-inline: 0.5rem;
    width: 38px;
  }
}
</style>
