<script setup></script>

<template>
  <div class="root">
    <header class="container">
      <div class="logo">timme</div>
      <div class="actions">some actions</div>
    </header>
    <main class="container">
      <div class="block-sm">1</div>
      <div class="block-lg">2</div>
      <div class="block-md">3</div>
      <div class="block-md">4</div>
      <div class="block-lg">5</div>
      <div class="block-sm">6</div>
    </main>
  </div>
</template>

<style lang="scss">
.root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  padding: var(--spacing-xl);
  background: var(--color-bg-primary);

  &>.container {
    width: 1400px;
    max-width: 100%;
  }

  &>header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-md);

    .logo {
      font-size: var(--font-size-lg);
      font-weight: bold;
      color: var(--color-logo);
    }

    .actions {
      margin-left: auto;
      color: var(--color-action);
    }
  }

  &>main {
    box-sizing: border-box;
    flex: 1 0 auto;
    padding: var(--spacing-lg);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-md);
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--spacing-lg);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: var(--spacing-md);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--spacing-sm);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: var(--spacing-xs);
    }

    &>.block-sm {
      grid-column: span 4;
    }

    &>.block-md {
      grid-column: span 6;

      @media (max-width: 1200px) {
        grid-column: span 8;
      }
    }

    &>.block-lg {
      grid-column: span 8;
    }

    &>div {
      box-sizing: border-box;
      padding: var(--spacing-lg);
      background: var(--color-bg-accent);
      border-radius: var(--radius-md);
      display: grid;
      place-items: center;
      font-size: var(--font-size-md);
      font-weight: bold;
      color: var(--color-text-primary);

      @media (max-width: 768px) {
        grid-column: span 4 !important;
      }

      @media (max-width: 480px) {
        grid-column: 1 / -1 !important;
      }
    }
  }
}
</style>
