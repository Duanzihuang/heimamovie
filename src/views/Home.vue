<template>
  <div>Home --- {{title}}</div>
</template>

<script>
import { getInTheaters } from '@/api/movie'
import { reactive,onMounted } from 'vue'
export default {
  setup() {
    const state = reactive({
      in_theaters: []
    })

    onMounted(() => {
      getInTheatersData()
    })

    const getInTheatersData = async () => {
      const res = await getInTheaters({start: 0, count: 10})

      console.log(res.data)

      state.in_theaters = res.data.subjects
    }

    return {...state}
  }
}
</script>
