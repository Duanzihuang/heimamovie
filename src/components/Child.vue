<template>
  <div>子组件 --- {{str}}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup () {
    const str = ref('子组件默认值')

    const changeStr = (val: string) => {
      str.value = val
    }

    return {
      str,
      changeStr
    }
  }
}
</script>
