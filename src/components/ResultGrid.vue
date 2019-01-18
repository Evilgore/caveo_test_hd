<template>
  <div class="row">
    <ResultCard></ResultCard>
    <ResultCard></ResultCard>
    <ResultCard></ResultCard>
    <ResultCard></ResultCard>
    <ResultCard></ResultCard>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ResultCard from '@/components/ResultCard.vue';

@Component({
  components: {
    ResultCard,
  },
})
export default class ResultGrid extends Vue {
}
</script>

<style scoped lang="scss">
</style>