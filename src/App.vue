<template>
  <div>
    <div class="top_menu">
      <SAQSearch search="result.q"></SAQSearch>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { getSearchClient } from '@/utils/SearchClient';

import SAQSearch from '@/components/SAQSearch.vue';
import FilterGroups from '@/components/FilterGroups.vue';
import FilterGroupList from '@/components/FilterGroupList.vue';
import ResultGrid from '@/components/ResultGrid.vue';
import PageList from '@/components/PageList.vue';
import SortOptions from '@/components/SortOptions.vue';

import { SearchResult } from '@/utils/SearchData';

let searchClient = getSearchClient();

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
export default class App extends Vue {

  @Prop() private result!: SearchResult;

  protected async mounted() {
    let request = searchClient.buildSearchRequest();
    searchClient.onResult = (result) => {
      this.result = result;
    };
    searchClient.doRequest();
  }
}
</script>

<style lang="scss">
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
  overflow-x: hidden;
}

.content_grid {
  position: fixed;
  height: calc(100vh - #{$top_height});
  width: calc(100vw - #{$side_width} - 50px);
  top: #{$top_height};
  left: #{$side_width};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
}
</style>