<template>
  <div class="about">
    <h1>This is an about page</h1>
    num is {{num}}
    <br />
    double num is {{getDoubleNum}}
    <br />
    <button @click="changeNum">更改num</button>
    <p ref="pRef">测试ref</p>
    <br />
    <br />
    <br />
    <hr />父组件
    <button @click="changeChildContent">更改子组件中的内容</button>
    <br />
    <br />
    <Child ref="childRef" />
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref, onMounted } from 'vue'
import Child from '@/components/Child'
export default {
  components: {
    Child
  },
  setup () {
    const state = reactive({
      num: 1
    })

    const changeNum = () => {
      state.num++
    }

    const pRef = ref(null)
    const childRef = ref(null)

    onMounted(() => {
      pRef.value.style.color = 'red'
    })

    const getDoubleNum = computed(() => state.num * 2)

    const changeChildContent = () => {
      // console.log(childRef.value)
      childRef.value.changeStr('来自父组件的值')
    }

    return {
      ...toRefs(state),
      changeNum,
      getDoubleNum,
      pRef,
      childRef,
      changeChildContent
    }
  }
}
</script>
