<template>
  <div class="card">
    <div class="card-header">
      <label>Filters</label>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item zero_padding">
        <FilterGroup></FilterGroup>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FilterGroup from '@/components/FilterGroup.vue';

@Component({
  components: {
    FilterGroup,
  },
})
export default class FilterGroups extends Vue {
}
</script>

<style scoped lang="scss">
.zero_padding {
  padding: 5px;
}
</style>