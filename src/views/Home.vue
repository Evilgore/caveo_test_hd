<template>
  <div class="home">
    <div class="top_menu">
      <SAQSearch></SAQSearch>
    </div>
    <div class="side_menu">
      <FilterGroups></FilterGroups>
    </div>
    <div class="content_grid">
      <SortOptions></SortOptions>
      <FilterGroupList></FilterGroupList>
      <ResultGrid></ResultGrid>
      <PageList></PageList>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SAQSearch from '@/components/SAQSearch.vue';
import FilterGroups from '@/components/FilterGroups.vue';
import FilterGroupList from '@/components/FilterGroupList.vue';
import ResultGrid from '@/components/ResultGrid.vue';
import PageList from '@/components/PageList.vue';
import SortOptions from '@/components/SortOptions.vue';

@Component({
  components: {
    SAQSearch,
    FilterGroups,
    FilterGroupList,
    ResultGrid,
    PageList,
    SortOptions,
  },
})
export default class Home extends Vue { }
</script>

<style scoped lang="scss">
$side_width: 300px;
$top_height: 60px;

.top_menu {
  height: #{$top_height};
  overflow: hidden;
  padding: 10px;
}

.side_menu {
  width: #{$side_width};
  height: calc(100vh - #{$top_height});
  position: fixed;
  top: #{$top_height};
  left: 0;
  overflow-y: auto;
}

.content_grid {
  position: fixed;
  height: calc(100vh - #{$top_height});
  width: calc(100vw - #{$side_width});
  top: #{$top_height};
  left: #{$side_width};
  overflow: auto;
  padding: 10px;
}
</style>
