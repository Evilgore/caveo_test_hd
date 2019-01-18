<template>
  <div>
    <div class="sort_by d-inline-block">
      <div class="input-group">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Sort By:</label>
        </div>
        <input
          type="text"
          class="form-control"
          readonly
          aria-label="Text input with dropdown button"
          value="Lowest Price"
        >
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
    <div class="view_nb d-inline-block">
      <div class="input-group">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">View:</label>
        </div>
        <input
          type="text"
          class="form-control"
          readonly
          aria-label="Text input with dropdown button"
          value="12"
        >
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">12</a>
            <a class="dropdown-item" href="#">24</a>
            <a class="dropdown-item" href="#">36</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SortOptions extends Vue {
}
</script>

<style scoped lang="scss">
.sort_by {
  width: 250px;
  margin-left: 5px;
}

.view_nb {
  width: 150px;
  margin-left: 5px;
}
</style>