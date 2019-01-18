<template>
  <div>
    <label>Filter Group</label>
    <div class="row">
      <div class="col-9">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input" value>Filter 1
          </label>
        </div>
      </div>
      <div class="col-3 text-right">(1222)</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FilterGroup extends Vue {
}
</script>

<style scoped lang="scss">
</style>