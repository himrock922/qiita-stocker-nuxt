<template>
  <Index />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Index from '@/components/pages/index.vue'

@Component({
  components: {
    Index
  }
})
export default class extends Vue {}
</script>
