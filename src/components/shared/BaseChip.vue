<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    tone?: "light" | "dark";
  }>(),
  {
    tone: "light",
  },
);
</script>

<template>
  <span :class="`base-chip--${tone}`" class="base-chip">{{ label }}</span>
</template>

<style scoped>
.base-chip {
  border: 1px solid var(--line);
  border-radius: 999px;
  box-shadow: 0 4px 10px rgb(17 19 24 / 6%);
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.5rem 0.65rem;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    color 180ms ease,
    transform 180ms ease;
  white-space: nowrap;
}

.base-chip--light {
  background: var(--surface-soft);
  color: var(--ink-muted);
}

.base-chip--dark {
  background: rgb(255 255 255 / 7%);
  border-color: rgb(255 255 255 / 18%);
  color: var(--paper);
}

.base-chip--light:hover {
  background: #ffffff;
  border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
  box-shadow: 0 10px 20px rgb(29 69 48 / 13%);
  color: var(--ink);
  transform: translateY(-2px);
}

.base-chip--dark:hover {
  background: rgb(255 255 255 / 12%);
  border-color: var(--accent-soft);
  box-shadow: 0 10px 20px rgb(0 0 0 / 18%);
  transform: translateY(-2px);
}
</style>
