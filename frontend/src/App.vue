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
  gap: 20px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  padding: 40px;
  background: #e7efff;

  &>.container {
    width: 1400px;
    max-width: 100%;
  }

  &>header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;

    .logo {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .actions {
      margin-left: auto;
    }
  }

  &>main {
    box-sizing: border-box;
    flex: 1 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 20px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 16px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 8px;
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
      padding: 20px;
      background: #ffe1e1;
      border-radius: 8px;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      font-weight: bold;

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
