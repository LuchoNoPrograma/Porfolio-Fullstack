<script setup lang="ts">
import { IconArrowsMaximize, IconX, IconZoomIn, IconZoomOut } from "@tabler/icons-vue";
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue";
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
const lightboxDialog = ref<HTMLDialogElement | null>(null);
const lightboxTrigger = ref<HTMLElement | null>(null);
const galleryRoot = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const isClosing = ref(false);
const zoomed = ref(false);
const activeImage = computed(() => props.images[currentSlide.value]);
let previousOverflow = "";
let closeTimer: ReturnType<typeof setTimeout> | undefined;

watch(currentSlide, () => {
  zoomed.value = false;
});

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

const openLightbox = async (imageIndex: number, event: MouseEvent) => {
  currentSlide.value = imageIndex;
  lightboxTrigger.value = event.currentTarget as HTMLElement;

  await nextTick();
  lightboxDialog.value?.showModal();
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  isOpen.value = true;
};

const closeLightbox = () => {
  if (isClosing.value) return;
  isClosing.value = true;
  closeTimer = setTimeout(
    () => lightboxDialog.value?.close(),
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180,
  );
};

const closeFromBackdrop = (event: MouseEvent) => {
  if (event.target === lightboxDialog.value) closeLightbox();
};

const restoreTriggerFocus = () => {
  document.body.style.overflow = previousOverflow;
  isOpen.value = false;
  isClosing.value = false;
  zoomed.value = false;
  const visibleTrigger = galleryRoot.value?.querySelector<HTMLElement>(
    ".carousel__slide--active .project-carousel__expand",
  );
  (visibleTrigger ?? lightboxTrigger.value)?.focus({ preventScroll: true });
};

const navigate = (index: number) => {
  zoomed.value = false;
  currentSlide.value = (index + props.images.length) % props.images.length;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (zoomed.value || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
    return;
  event.preventDefault();
  event.stopPropagation();
  if (event.key === "Home") navigate(0);
  else if (event.key === "End") navigate(props.images.length - 1);
  else navigate(currentSlide.value + (event.key === "ArrowRight" ? 1 : -1));
};

onBeforeUnmount(() => {
  clearTimeout(closeTimer);
  if (isOpen.value) document.body.style.overflow = previousOverflow;
});
</script>

<template>
  <div ref="galleryRoot" class="project-carousel">
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
          <button
            :aria-label="t('common.expandImage', { title })"
            class="project-carousel__expand"
            type="button"
            @click="openLightbox(imageIndex, $event)"
          >
            <img
              :alt="imageAlt(image)"
              :loading="props.eager && imageIndex === 0 ? 'eager' : 'lazy'"
              :src="image.src"
              decoding="async"
              height="760"
              width="1200"
            />
            <span class="project-carousel__expand-indicator" aria-hidden="true">
              <IconArrowsMaximize :size="18" stroke="1.8" />
            </span>
          </button>
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

    <Teleport to="body">
      <dialog
        ref="lightboxDialog"
        :aria-label="t('common.expandedGallery', { title })"
        class="project-lightbox"
        :class="{ 'project-lightbox--closing': isClosing }"
        @click="closeFromBackdrop"
        @close="restoreTriggerFocus"
        @cancel.prevent="closeLightbox"
        @keydown.capture="handleKeydown"
      >
        <div class="project-lightbox__surface">
          <header class="project-lightbox__header">
            <strong>{{ title }}</strong>
            <span aria-live="polite">
              {{
                t("common.imageOf", {
                  current: currentSlide + 1,
                  total: images.length,
                })
              }}
            </span>
            <button
              :aria-label="t(zoomed ? 'common.fitImage' : 'common.zoomImage')"
              :aria-pressed="zoomed"
              class="project-lightbox__close"
              type="button"
              @click="zoomed = !zoomed"
            >
              <component
                :is="zoomed ? IconZoomOut : IconZoomIn"
                aria-hidden="true"
                :size="22"
              />
            </button>
            <button
              :aria-label="t('common.closeGallery')"
              class="project-lightbox__close"
              type="button"
              autofocus
              @click="closeLightbox"
            >
              <IconX aria-hidden="true" :size="24" stroke="1.7" />
            </button>
          </header>

          <div
            v-if="isOpen && zoomed && activeImage"
            class="project-lightbox__zoom"
            tabindex="0"
            :aria-label="t('common.zoomHelp')"
          >
            <img :src="activeImage.src" :alt="imageAlt(activeImage)" />
          </div>
          <Carousel
            v-else-if="isOpen"
            v-model="currentSlide"
            :aria-label="t('common.expandedGallery', { title })"
            :i18n="carouselI18n"
            :items-to-show="1"
            :mouse-drag="true"
            :touch-drag="true"
            :transition="420"
            :wrap-around="images.length > 1"
            class="project-lightbox__carousel"
          >
            <Slide v-for="image in images" :key="`expanded-${image.src}`">
              <div class="project-lightbox__image">
                <img
                  :alt="imageAlt(image)"
                  :src="image.src"
                  decoding="async"
                  height="760"
                  width="1200"
                />
              </div>
            </Slide>

            <template v-if="images.length > 1" #addons>
              <Navigation />
            </template>
          </Carousel>
          <footer v-if="isOpen" class="project-lightbox__footer">
            <p class="project-lightbox__caption" aria-live="polite">
              {{ activeImage ? imageAlt(activeImage) : "" }}
            </p>
            <nav
              :aria-label="t('common.thumbnails')"
              class="project-lightbox__thumbnails"
            >
              <button
                v-for="(image, index) in images"
                :key="image.src"
                :aria-label="
                  t('common.imageOf', { current: index + 1, total: images.length })
                "
                :aria-current="currentSlide === index ? 'true' : undefined"
                type="button"
                @click="navigate(index)"
              >
                <img :src="image.src" alt="" loading="lazy" />
              </button>
            </nav>
            <p class="project-lightbox__hint">
              {{ t(zoomed ? "common.zoomHelp" : "common.galleryHelp") }}
            </p>
          </footer>
        </div>
      </dialog>
    </Teleport>
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

.project-carousel__expand {
  background: transparent;
  border: 0;
  cursor: zoom-in;
  display: block;
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
}

.project-carousel__expand img {
  height: 100%;
  object-fit: cover;
  transition: transform 280ms ease;
  width: 100%;
}

.project-carousel__expand:hover img {
  transform: scale(1.012);
}

.project-carousel__expand:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: -3px;
}

.project-carousel__expand-indicator {
  align-items: center;
  background: rgb(12 15 22 / 88%);
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 4px;
  color: #fff;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition:
    background 180ms ease,
    transform 180ms ease;
  width: 40px;
}

.project-carousel__expand:hover .project-carousel__expand-indicator {
  background: var(--accent);
  transform: translateY(-2px);
}

.project-carousel__frame--contain {
  background: #151821;
  padding: 1.25rem;
}

.project-carousel__frame--contain .project-carousel__expand img {
  object-fit: contain;
}

.project-lightbox {
  background: transparent;
  border: 0;
  color: #fff;
  height: 100dvh;
  margin: 0;
  max-height: none;
  max-width: none;
  overflow: hidden;
  padding: clamp(0.75rem, 2vw, 1.5rem);
  width: 100vw;
}

.project-lightbox[open] {
  animation: lightbox-in 300ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.project-lightbox[open].project-lightbox--closing {
  animation: lightbox-out 180ms ease-in both;
}

.project-lightbox::backdrop {
  backdrop-filter: blur(10px);
  background: rgb(7 10 15 / 92%);
}

.project-lightbox__surface {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  height: 100%;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 0;
}

.project-lightbox__header {
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr) auto auto auto;
  min-height: 3.5rem;
}

.project-lightbox__header strong {
  font-size: 0.9rem;
  letter-spacing: 0.02em;
}

.project-lightbox__header span {
  color: rgb(255 255 255 / 65%);
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  font-weight: 750;
}

.project-lightbox__close {
  align-items: center;
  background: rgb(255 255 255 / 8%);
  border: 1px solid rgb(255 255 255 / 18%);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  padding: 0;
  transition:
    background 180ms ease,
    transform 180ms ease;
  width: 44px;
}

.project-lightbox__close:hover {
  background: var(--accent);
  transform: rotate(4deg);
}

.project-lightbox__close:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.project-lightbox__zoom {
  overflow: auto;
  min-height: 0;
  overscroll-behavior: contain;
  border-radius: 8px;
  margin-block: 0.75rem;
  background: #111820;
  animation: lightbox-in 220ms ease-out;
}

.project-lightbox__zoom img {
  display: block;
  width: auto;
  min-width: 100%;
  max-width: none;
  height: auto;
}

.project-lightbox__footer {
  text-align: center;
  padding-top: 0.5rem;
}

.project-lightbox__caption {
  color: #e3ebe7;
  font-size: 0.85rem;
  margin: 0 0 0.85rem;
}

.project-lightbox__thumbnails {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  overflow-x: auto;
  padding: 4px;
}

.project-lightbox__thumbnails button {
  flex: 0 0 72px;
  height: 48px;
  padding: 3px;
  border: 1px solid rgb(255 255 255 / 20%);
  border-radius: 6px;
  background: #17211e;
  cursor: pointer;
  opacity: 0.55;
  transition:
    opacity 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;
}

.project-lightbox__thumbnails button:hover,
.project-lightbox__thumbnails button[aria-current] {
  border-color: #b2d5bc;
  opacity: 1;
  transform: translateY(-2px);
}

.project-lightbox__thumbnails button:focus-visible,
.project-lightbox__zoom:focus-visible {
  outline: 2px solid #b2d5bc;
  outline-offset: 2px;
}

.project-lightbox__thumbnails img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 3px;
}

.project-lightbox__hint {
  color: rgb(255 255 255 / 55%);
  font-size: 0.7rem;
  margin: 0.75rem 0 0;
}

.project-lightbox__carousel,
.project-lightbox__image {
  height: 100%;
  min-height: 0;
  width: 100%;
}

.project-lightbox__image {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem clamp(0.25rem, 5vw, 5.5rem);
}

.project-lightbox__image img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.project-lightbox :deep(.carousel__viewport),
.project-lightbox :deep(.carousel__track),
.project-lightbox :deep(.carousel__slide) {
  height: 100%;
}

.project-lightbox :deep(.carousel__pagination) {
  bottom: 0.8rem;
}

@keyframes lightbox-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.975);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes lightbox-out {
  to {
    opacity: 0;
    transform: translateY(6px) scale(0.985);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-lightbox[open],
  .project-lightbox[open].project-lightbox--closing,
  .project-lightbox__zoom {
    animation: none;
  }

  .project-carousel *,
  .project-lightbox *,
  .project-carousel :deep(.carousel__track),
  .project-lightbox :deep(.carousel__track) {
    transition-duration: 0ms !important;
  }
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

  .project-carousel__expand-indicator {
    height: 36px;
    right: 0.65rem;
    top: 0.65rem;
    width: 36px;
  }

  .project-lightbox {
    padding: 0.65rem;
  }

  .project-lightbox__header {
    gap: 0.5rem;
  }

  .project-lightbox__image {
    padding: 0.75rem 0 3rem;
  }

  .project-lightbox :deep(.carousel__prev),
  .project-lightbox :deep(.carousel__next) {
    top: auto;
    bottom: 0;
    transform: none;
    height: 44px;
    width: 44px;
  }

  .project-lightbox__thumbnails button {
    flex-basis: 60px;
    height: 44px;
  }

  .project-lightbox__caption {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .project-lightbox__hint {
    font-size: 0.65rem;
  }

  :deep(.carousel__prev),
  :deep(.carousel__next) {
    height: 38px;
    margin-inline: 0.5rem;
    width: 38px;
  }
}
</style>
