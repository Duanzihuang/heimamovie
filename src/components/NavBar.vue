<template>
  <div class="navbar">
    <i v-show="$store.getters.isShowBack" class="iconfont icon-back" @click="$router.go(-1)"></i>
    {{title}}
  </div>
</template>

<script>
import { reactive, inject, toRefs } from 'vue'
export default {
  setup () {
    const title = inject('title')

    const state = reactive({
      title
    })

    return { ...toRefs(state) }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 44px;
  line-height: 44px;
  width: 100%;
  background-color: #42bd56;
  text-align: center;
  color: white;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
}
.icon-back {
  position: absolute;
  left: 10px;
  font-size: 20px;
}
</style>
