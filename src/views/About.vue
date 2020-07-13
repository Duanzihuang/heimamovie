<template>
  <div class="about">
    <h1>This is an about page</h1>
    num is {{num}} <br/>
    double num is {{getDoubleNum}} <br/>
    <button @click="changeNum">更改num</button>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
export default {
  setup () {
    const state = reactive({
      num: 1
    })

    const changeNum = () => {
      state.num++
    }

    const getDoubleNum = computed(() => state.num * 2)

    return { ...toRefs(state), changeNum, getDoubleNum }
  }
}
</script>
