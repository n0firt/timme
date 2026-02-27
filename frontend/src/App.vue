<script setup></script>

<template>
  <div class="root">
    <header class="container">
      <div class="logo">timme</div>
      <div class="actions">some actions</div>
    </header>
    <main class="container">

      <div class="block-sm">

        <PVToolbar>
          <template #start>Tags</template>
          <template #end>
            <PVButton icon="pi pi-plus" class="mr-2" severity="secondary" text />
          </template>
        </PVToolbar>

        <PVMenu :model="[
          { icon: 'pi pi-plus', label: 'test' },
          { icon: 'pi pi-plus', label: 'test' },
          { icon: 'pi pi-plus', label: 'test' },
          { icon: 'pi pi-plus', label: 'test' },
          { icon: 'pi pi-plus', label: 'test' }]" />

      </div>

      <div class="block-lg">

        <PVToolbar>
          <template #start>Current Tasks</template>
          <template #end>
            <PVButton icon="pi pi-plus" class="mr-2" severity="secondary" text />
          </template>
        </PVToolbar>

        <PVDataTable :value="new Array(10).fill({})" paginator :rows="10" tableStyle="">
          <PVColumn field="name" header="Name">
            <template #body>
              <PVSkeleton width="60%" height="1rem" />
            </template>
          </PVColumn>
          <PVColumn field="tags" header="Tags">
            <template #body>
              <PVSkeleton width="60%" height="1rem" />
            </template>
          </PVColumn>
          <PVColumn field="deadline" header="Deadline">
            <template #body>
              <PVSkeleton width="60%" height="1rem" />
            </template>
          </PVColumn>
          <PVColumn>
            <template #body="{ data }">
              <div class="table-actions">
                <PVButton icon="pi pi-pencil" @click="void (data)" severity="secondary" rounded></PVButton>
                <PVButton icon="pi pi-check" @click="void (data)" severity="secondary" rounded></PVButton>
              </div>
            </template>
          </PVColumn>
        </PVDataTable>

      </div>

    </main>
  </div>
</template>