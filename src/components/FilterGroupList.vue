<template>
  <div class="filter_list">
    <span>
      <span>Filter 1</span>
      <i class="fas fa-times hand"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilterGroupList extends Vue {
}
</script>

<style scoped lang="scss">
.filter_list {
  padding: 5px 5px;
}

.hand {
  cursor: pointer;
}
</style>