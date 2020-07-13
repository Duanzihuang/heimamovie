<template>
  <div class="home">
    <!-- 导航栏 -->
    <NavBar />
    <!-- 正在热映 -->
    <div class="section">
      <div class="type-title">
        <span>正在热映</span>
        <div class="more" @click="goToList('in_theaters')">更多</div>
      </div>
      <div class="scroll-view">
        <div class="item" v-for="item in inTheaters" :key="item.id">
          <router-link :to="'/detail/'+item.id">
            <img :src="item.images.small" />
            <span
              class="title"
            >{{item.title.length > 6 ? item.title.substr(0,6)+'...' : item.title}}</span>
            <span v-if="item.rating.average==0" class="no-score">暂无评分</span>
            <div v-else class="star-box">
              <!-- block 是微信提供给我们的一个占位标签,渲染之后页面上看不到 -->
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
    <div class="section">
      <div class="type-title">
        <span>即将上映</span>
        <div class="more" @click="goToList('coming_soon')">更多</div>
      </div>
      <div class="scroll-view">
        <div class="item" v-for="item in comingSoon" :key="item.id">
          <router-link :to="'/detail/'+item.id">
            <img :src="item.images.small" />
            <span
              class="title"
            >{{item.title.length > 6 ? item.title.substr(0,6)+'...' : item.title}}</span>
            <span v-if="item.rating.average==0" class="no-score">暂无评分</span>
            <div v-else class="star-box">
              <!-- block 是微信提供给我们的一个占位标签,渲染之后页面上看不到 -->
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
    <div class="section">
      <div class="type-title">
        <span>Top250</span>
        <div class="more" @click="goToList('top250')">更多</div>
      </div>
      <div class="scroll-view">
        <div class="item" v-for="item in top250" :key="item.id">
          <router-link :to="'/detail/'+item.id">
            <img :src="item.images.small" />
            <span
              class="title"
            >{{item.title.length > 6 ? item.title.substr(0,6)+'...' : item.title}}</span>
            <span v-if="item.rating.average==0" class="no-score">暂无评分</span>
            <div v-else class="star-box">
              <!-- block 是微信提供给我们的一个占位标签,渲染之后页面上看不到 -->
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
  </div>
</template>

<script>
import { getInTheaters, getComingSoon, getTop250 } from '@/api/movie'
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  provide
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
// 导入子组件
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },
  setup () {
    const state = reactive({
      inTheaters: [], // 正在热映
      comingSoon: [], // 即将上映
      top250: [] // top250
    })

    // 编程式导航
    const router = useRouter()
    const store = useStore()

    onBeforeMount(() => {
      store.commit('setShowBack', false)
    })

    onBeforeUnmount(() => {
      store.commit('setShowBack', true)
    })

    const getInTheatersData = async () => {
      const res = await getInTheaters({ start: 0, count: 10 })

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

      state.inTheaters = res.data.subjects
    }

    const getComingSoonData = async () => {
      const res = await getComingSoon({ start: 0, count: 5 })

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

      state.comingSoon = res.data.subjects
    }

    const getTop250Data = async () => {
      const res = await getTop250({ start: 0, count: 10 })

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

      state.top250 = res.data.subjects
    }

    onMounted(() => {
      getInTheatersData()
      getComingSoonData()
      getTop250Data()
    })

    const goToList = type => {
      router.push(`/list/${type}`)
    }

    // 传递数据给子组件
    provide('title', '黑马电影')

    return { ...toRefs(state), goToList }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 15px;
  padding-top: 10px;
  .section {
    padding-top: 44px;
    .type-title {
      height: 20px;
      padding: 0 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 18px;
      }
      .more {
        font-size: 13px;
        color: #43c74d;
      }
    }

    .scroll-view {
      margin-top: 10px;
      /* 要能够滚动 */
      width: 100%;
      display: flex;
      overflow: auto;
      white-space: nowrap;
      height: 100%;
      // margin-left: 5px;
      // margin-right: 5px;
      .item a{
        width: 85px;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-left: 5px;
        padding-right: 5px;
        img {
          width: 85px;
          height: 123px;
        }
        .title {
          margin-top: 2px;
          font-size: 12px;
        }
      }
    }
    .scroll-view::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
