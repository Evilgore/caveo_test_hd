<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        v-model="search"
      >
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          v-on:click="onSearch"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SAQSearch extends Vue {

  @Prop() private search: string = '';

  public onSearch(): void {
    console.log(this.search);
  }
}
</script>

<style scoped lang="scss">
</style>