<script setup lang="ts">
import { computed } from "vue";

defineOptions({ inheritAttrs: false });

type ButtonVariant = "primary" | "secondary" | "text";

const props = withDefaults(
  defineProps<{
    href?: string;
    target?: "_blank" | "_self";
    download?: string;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
  }>(),
  {
    target: "_self",
    type: "button",
    variant: "primary",
  },
);

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const tag = computed(() => (props.href ? "a" : "button"));
const rel = computed(() =>
  props.target === "_blank" ? "noopener noreferrer" : undefined,
);
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="`base-button--${props.variant}`"
    :download="props.href ? props.download : undefined"
    :href="props.href"
    :rel="rel"
    :target="props.href ? props.target : undefined"
    :type="props.href ? undefined : props.type"
    class="base-button"
    @click="emit('click', $event)"
  >
    <span class="base-button__label"><slot /></span>
    <span v-if="$slots.icon" aria-hidden="true" class="base-button__icon">
      <slot name="icon" />
    </span>
  </component>
</template>

<style scoped>
.base-button {
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-size: 0.875rem;
  font-weight: 750;
  gap: 0.65rem;
  justify-content: center;
  min-height: 46px;
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.base-button:hover {
  transform: translateY(-3px);
}

.base-button:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.base-button--primary {
  background: var(--accent);
  box-shadow: 0 8px 18px rgb(34 104 71 / 22%);
  color: #ffffff;
}

.base-button--primary:hover {
  background: var(--accent-strong);
  box-shadow: 0 14px 28px rgb(34 104 71 / 30%);
}

.base-button--secondary {
  background: transparent;
  border-color: currentColor;
  color: inherit;
}

.base-button--secondary:hover {
  background: rgb(255 255 255 / 10%);
  box-shadow: 0 12px 26px rgb(0 0 0 / 14%);
}

.base-button--text {
  color: var(--ink);
  min-height: 40px;
  padding-inline: 0;
}

.base-button--text:hover {
  color: var(--link);
}

.base-button__icon {
  display: inline-grid;
  flex: 0 0 auto;
  place-items: center;
  transition: transform 180ms ease;
}

.base-button:hover .base-button__icon {
  transform: translate(2px, -2px);
}
</style>
