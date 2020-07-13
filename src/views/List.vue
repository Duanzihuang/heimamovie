<template>
  <div class="list-box">
    <NavBar />
    <div class="items">
      <div class="item" v-for="item in list" :key="item.id">
        <router-link :to="'/detail/'+item.id">
          <img :src="item.images.small" />
          <span class="title">{{item.title.length > 6 ? item.title.substr(0,6)+'...' : item.title}}</span>
          <div v-if="item.rating.average==0" class="no-score">暂无评分</div>
          <div v-else class="star-box">
            <div v-for="(subitem,index) in item.startArr" :key="index">
              <span v-if="subitem===1" class="orange">★</span>
              <span v-else class="gray">★</span>
            </div>
            {{item.rating.average}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieList } from '@/api/movie'
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  setup () {
    const state = reactive({
      list: []
    })

    const route = useRoute()

    const typeTitle = computed(() => {
      switch (route.params.type) {
        case 'in_theaters':
          return '正在热映'

        case 'coming_soon':
          return '即将上映'

        case 'top250':
          return 'Top250'
      }
    })

    const getMovieListData = async () => {
      const res = await getMovieList({
        type: route.params.type,
        start: 0,
        count: 20
      })

      // 处理数据 额外的增加一个 星星个数字段
      res.data.subjects.forEach(v => {
        // 为V增加一个字段 纯数字无法循环
        // 必须弄成数组
        // v.startNum = Math.floor(v.rating.stars/10);
        v.startArr = []
        // 计算星星个数
        const starNum = Math.floor(v.rating.stars / 10)
        // 遍历数组赋值即可 根据星星个数 赋值(黄星=1,灰星=0)
        // index 从0开始  0 , 1 ,2 ,3,4
        // 假设星星个数为 4
        for (let i = 0; i < 5; i++) {
          v.startArr[i] = starNum > i ? 1 : 0
        }
      })

      state.list = res.data.subjects
    }

    onMounted(() => {
      getMovieListData()
    })

    provide('title', typeTitle)

    return { ...toRefs(state), typeTitle }
  }
}
</script>

<style lang="scss" scoped>
/* 底部区域布局 */
.list-box {
  padding-bottom: 15px;
  .items {
    padding-top: 44px;
    display: flex;
    flex-wrap: wrap;
    .item {
      margin-top: 5px;
      width: 33.33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-left: 5px;
      padding-right: 5px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 170px;
      }
      .title {
        margin-top: 2px;
        font-size: 12px;
      }
    }
  }
}
</style>
