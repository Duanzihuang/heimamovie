<template>
  <div>
    <!-- 导航 -->
    <NavBar />
    <!-- 电影基本信息 -->
    <div class="info-box">
      <span class="title">{{movieInfo.title}}</span>
      <div class="flex-box">
        <div class="left">
          <div class="top">
            <span v-if="movieInfo.rating && movieInfo.rating.average===0">暂无评分</span>
            <div v-else class="star-box">
              <div v-for="(item,index) in movieInfo.starArr" :key="index">
                <img v-if="item===1" src="@/assets/imgs/full.png" />
                <img v-else-if="item===3" src="@/assets/imgs/halfStar.jpg" />
                <img v-else src="@/assets/imgs/empty.png" />
              </div>
            </div>
            <span class="score">{{movieInfo.rating && movieInfo.rating.average}}</span>
            <span class="comments">{{movieInfo.ratings_count}}人评价</span>
          </div>
          <!-- bottom -->
          <div class="bottom">
            {{movieInfo.durations && movieInfo.durations[0]}} /
            <span
              v-for="genre in movieInfo.genres"
              :key="genre"
            >{{genre}} /</span>
            {{movieInfo.durations && movieInfo.directors[0].name}}(导演) /
            <span
              v-for="cast in movieInfo.casts"
              :key="cast.id"
            >{{cast.name}} /</span>
            {{movieInfo.pubdates && movieInfo.pubdates[0]}} 上映
          </div>
        </div>
        <div class="right">
          <img :src="movieInfo.images && movieInfo.images.small" />
        </div>
      </div>
    </div>
    <!-- 是否想看按钮 -->
    <div class="view-button">
      <div>想看</div>
      <div>看过</div>
    </div>
    <!-- 所属频道 -->
    <div class="channel-box">
      <div class="title">所属频道</div>
      <div class="tag-box">
        <div v-for="tag in movieInfo.tags" :key="tag">
          {{tag}}
          <img src="@/assets/imgs/green_arrow.png" />
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="movie-desc">
      <div class="title">{{movieInfo.title}}的剧情简介</div>
      <div class="desc">
        {{cutSummary}}
        <div v-if="cutSummary.length<70" @click="more" class="more">(更多)</div>
        <div v-if="cutSummary.length>=70" @click="cut" class="cut">(收起)</div>
      </div>
    </div>
    <!-- 影人 -->
    <div class="movie-desc">
      <div class="title">影人</div>
      <!-- 滚动区域 -->
      <div class="scroll-view">
        <div class="item">
          <img :src="movieInfo.directors && movieInfo.directors[0].avatars.small" />
          <span class="name">{{movieInfo.directors && movieInfo.directors[0].name}}</span>
          <span class="job">导演</span>
        </div>
        <div v-for="cast in movieInfo.casts" :key="cast.id" class="item">
          <img :src="cast.avatars && cast.avatars.small" />
          <span class="name">{{cast.name}}</span>
          <span class="job">演员</span>
        </div>
      </div>
    </div>
    <!-- 预告片&图片 -->
    <div class="movie-desc">
      <div
        class="title small"
      >{{movieInfo.title}}的预告片({{movieInfo.trailers && movieInfo.trailers.length}})、视频评论(1)和图片({{movieInfo.photos_count}})</div>
      <!-- 滚动区域 -->
      <div class="scroll-view">
        <div v-for="trailer in movieInfo.trailers" :key="trailer.id" class="video-item">
          <video :src="trailer.resource_url" controls></video>
        </div>
      </div>
    </div>
    <!-- 评论布局 -->
    <div class="comment-box">
      <div class="title">{{movieInfo.title}}的短评({{movieInfo.comments_count}})</div>
      <div v-for="comment in movieInfo.popular_comments" :key="comment.id" class="section">
        <div class="left">
          <img :src="comment.author.avatar" />
        </div>
        <div class="right">
          <div class="name">
            {{comment.author.name}}
            <div class="star-box"></div>
          </div>
          <div class="time">{{comment.created_at}}</div>
          <div class="content">{{comment.content}}</div>
          <div class="good">
            <div class="good-left">👍{{comment.useful_count}}</div>
            <div class="good-right">...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { reactive, onMounted, toRefs, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getMoveInfo } from '@/api/movie'
export default {
  components: {
    NavBar
  },
  setup () {
    const state = reactive({
      movieInfo: {},
      cutSummary: '' // 被剪切的简介
    })

    const route = useRoute()
    const title = ref('正在加载中...')

    // 设置导航栏标题
    provide('title', title)

    const getMovieInfoData = async () => {
      const res = await getMoveInfo(route.params.id)

      // 计算星星
      // 根据当前电影的评分计算星星
      const starNum = res.data.rating.average / 2

      // 获取整数位
      const intNum = Math.floor(starNum)
      // 获取小数位
      const floatNum = starNum - intNum

      // 根据startNum计算出星星数组
      // 8.1 / 2 = 4.05 ->4.5
      // 5.6 / 2 = 2.8 -> 3
      // 6.8 / 2 = 3.4 ->3.5

      // 设置一个数组 长度为 5
      // 4.05 -> 4
      // 星星约定 实星 1 空星 2 半星 3
      const starArr = []
      for (let i = 0; i < 5; i++) {
        // 整数位都是满的星星
        if (i < intNum) {
          starArr[i] = 1
        } else if (i === intNum) {
          // console.log('小数位比较');
          // 比.5小
          if (floatNum < 0.5) {
            // 一半
            starArr[i] = 3
          } else {
            starArr[i] = 1
          }
          // 比 .5 大
        } else {
          // 一定是空星
          starArr[i] = 2
        }
      }
      // console.log(starArr)
      res.data.starArr = starArr

      state.movieInfo = res.data
      title.value = res.data.title
      state.cutSummary = state.movieInfo.summary.substr(0, 65) + '...'
    }

    onMounted(() => {
      getMovieInfoData()
    })

    // 定义方法区域
    const more = () => {
      state.cutSummary = state.movieInfo.summary
    }

    const cut = () => {
      state.cutSummary = state.movieInfo.summary.substr(0, 65) + '...'
    }

    return { ...toRefs(state), more, cut }
  }
}
</script>

<style lang="scss" scoped>
.info-box {
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 44px;

  .title {
    display: block;
    font-size: 23px;
    padding-bottom: 15px;
    font-weight: 500;
  }

  .flex-box {
    display: flex;
  }
  .left {
    flex: 1;
    .top {
      display: flex;
      font-size: 15px;
      height: 20px;
      line-height: 20px;
    }
    .star-box {
      padding-top: 0;
      img {
        width: 13px;
        height: 13px;
      }
    }
    .score {
      margin-left: 8px;
      font-size: 14px;
      color: black;
    }
    .comments {
      margin-left: 8px;
      font-size: 14px;
      color: #ccc;
    }
  }
  .right {
    margin-left: 28px;
    img {
      width: 100px;
      height: 140px;
      display: block;
    }
  }
}

.info-box .left .bottom {
  padding-top: 25px;
  font-size: 13px;
  color: gray;
}

/* 按钮盒子 */
.view-button {
  display: flex;
  margin-top: 30px;
  margin-bottom: 34px;
  padding: 0 18px;
  div {
    width: 163px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 2px solid #ffb816;
    color: #ffb816;
    font-size: 16px;
    border-radius: 5px;
    &:first-child {
      margin-right: 10px;
    }
  }
}

/* 频道区域 */
.channel-box {
  padding-left: 18px;
  .title {
    color: gray;
    font-size: 18px;
  }
  .tag-box {
    margin-top: 17px;
    display: flex;
    flex-wrap: wrap;
    div {
      height: 26px;
      padding-left: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      border-radius: 14px;
      background-color: #effaf0;
      margin-right: 10px;
      color: #54c366;
      border: 2px solid #54c366;
      font-size: 14px;
      line-height: 26px;
      margin-bottom: 10px;
      img {
        width: 7px;
        height: 9px;
      }
    }
  }
}

/* 简介区域 影人 & 视频样式 */
.movie-desc {
  margin-top: 10px;
  padding-left: 18px;
  padding-right: 18px;
  .title {
    color: #ccc;
    font-size: 20px;
  }
  .small {
    font-size: 13px;
  }
  .scroll-view {
    display: flex;
    // white-space: nowrap;
    overflow: auto;
    width: 100%;
    margin-top: 10px;
    .item {
      display: flex;
      flex-direction: column;
      width: 75px;
      padding-left: 7px;
      padding-right: 7px;
      text-align: center;
      img {
        height: 107px;
        width: 75px;
        display: block;
      }

      /*超出部分文字以...显示*/
      .name {
        font-size: 13px;
        margin-top: 3px;
        display: block;
        text-align: center;
        overflow: hidden;
        /*超出部分隐藏*/
        white-space: nowrap;
        /*不换行*/
        text-overflow: ellipsis;
        /*超出部分文字以...显示*/
      }
      .job {
        font-size: 11px;
        margin-top: 3px;
        color: #ccc;
      }
    }
    .video-item {
      display: inline-block;
      width: 214px;
      height: 121px;
      margin-right: 7px;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
  .scroll-view::-webkit-scrollbar {
    display: none;
  }
  .desc {
    margin-top: 21px;
    font-size: 15px;
    .more {
      color: orange;
      display: inline;
    }
    .cut {
      display: inline;
      color: yellowgreen;
    }
  }
}

/* 评论布局 */
.comment-box {
  margin-top: 10px;
  padding-left: 18px;
  padding-right: 18px;
  .title {
    font-size: 15px;
    color: #ccc;
    margin-bottom: 14px;
  }
  .section {
    display: flex;
    margin-bottom: 40px;
    .left {
      width: 60px;
      position: relative;
      img {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .right {
      flex: 1;
      padding-right: 33px;
      padding-top: 5px;
      .name {
        font-size: 15px;
        padding-left: 10px;
        font-weight: 700;
      }
      .time {
        margin-top: 12px;
        font-size: 13px;
        color: #ccc;
        padding-left: 10px;
      }
      .content {
        margin-top: 8px;
        font-size: 12px;
      }
      .good {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        color: #ccc;
        font-size: 15px;
      }
    }
  }
}
</style>
