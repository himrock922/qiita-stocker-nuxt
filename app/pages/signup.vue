<template>
  <Signup />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Signup from '@/components/pages/signup.vue'

@Component({
  components: {
    Signup
  }
})
export default class extends Vue {}
</script>
