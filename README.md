# heimamovie

# 黑马电影服务端接口

## API V1 接口说明

- 接口基准地址：`http://huangjiangjun.top:9001/movie`
- 服务端已开启 CORS 跨域支持
- 使用 HTTP Status Code 标识状态
- 数据返回格式统一使用 JSON

### 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 通用返回状态说明

| *状态码* | *含义*                | *说明*                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |

## 电影列表

#### 正在热映

- 请求路径：/in_theaters
- 请求方法：GET
- 请求参数

| 参数名 | 参数说明   | 备注     |
| ------ | ---------- | -------- |
| start  | 开始的索引 | 可以为空 |
| count  | 加载的条数 | 可以为空 |

- 响应参数

| 参数名   | 参数说明       | 备注                 |
| -------- | -------------- | -------------------- |
| count    | 加载的条数     | 此次请求加载的条数   |
| start    | 开始的索引     | 此次请求开始的索引   |
| total    | 总条数         | 此次请求获取的总条数 |
| subjects | 电影列表       | 里面存放的是电影项   |
| title    | 加载电影的类型 | 加载电影的类型       |

- 响应数据

```json
{
  "count": 1,
  "start": 0,
  "total": 6,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 8.2,
        "details": {
          "1": 15,
          "2": 128,
          "3": 2633,
          "4": 11111,
          "5": 5127
        },
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情"
      ],
      "title": "理查德·朱维尔的哀歌",
      "casts": [
        {
          "avatars": {
            "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579450902.87.jpg",
            "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579450902.87.jpg",
            "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1579450902.87.jpg"
          },
          "name_en": "Paul Walter Hauser",
          "name": "保罗·沃尔特·豪泽",
          "alt": "https://movie.douban.com/celebrity/1268250/",
          "id": "1268250"
        },
        {
          "avatars": {
            "small": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533802988.44.jpg",
            "large": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533802988.44.jpg",
            "medium": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1533802988.44.jpg"
          },
          "name_en": "Sam Rockwell",
          "name": "山姆·洛克威尔",
          "alt": "https://movie.douban.com/celebrity/1047972/",
          "id": "1047972"
        },
        {
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5690.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5690.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5690.jpg"
          },
          "name_en": "Kathy Bates",
          "name": "凯西·贝茨",
          "alt": "https://movie.douban.com/celebrity/1010555/",
          "id": "1010555"
        }
      ],
      "durations": [
        "131分钟"
      ],
      "collect_count": 78451,
      "mainland_pubdate": "2020-01-10",
      "has_video": true,
      "original_title": "Richard Jewell",
      "subtype": "movie",
      "directors": [
        {
          "avatars": {
            "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1438777188.48.jpg",
            "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1438777188.48.jpg",
            "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1438777188.48.jpg"
          },
          "name_en": "Clint Eastwood",
          "name": "克林特·伊斯特伍德",
          "alt": "https://movie.douban.com/celebrity/1054436/",
          "id": "1054436"
        }
      ],
      "pubdates": [
        "2019-11-20(AFI Fest)",
        "2019-12-13(美国)",
        "2020-01-10(中国大陆)"
      ],
      "year": "2019",
      "images": {
        "small": "http://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.jpg",
        "large": "http://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.jpg",
        "medium": "http://img9.doubanio.com/view/photo/s_ratio_poster/public/p2578705064.jpg"
      },
      "alt": "https://movie.douban.com/subject/25842038/",
      "id": "25842038"
    }
  ],
  "title": "正在上映的电影-北京"
}
```

#### 即将上映

- 请求路径：/coming_soon
- 请求方法：GET
- 请求参数

| 参数名 | 参数说明   | 备注     |
| ------ | ---------- | -------- |
| start  | 开始的索引 | 可以为空 |
| count  | 加载的条数 | 可以为空 |

- 响应参数

| 参数名   | 参数说明       | 备注                 |
| -------- | -------------- | -------------------- |
| count    | 加载的条数     | 此次请求加载的条数   |
| start    | 开始的索引     | 此次请求开始的索引   |
| total    | 总条数         | 此次请求获取的总条数 |
| subjects | 电影列表       | 里面存放的是电影项   |
| title    | 加载电影的类型 | 加载电影的类型       |

- 响应数据

```json
{
  "count": 1,
  "start": 0,
  "total": 3,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 0,
        "details": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 0
        },
        "stars": "00",
        "min": 0
      },
      "genres": [
        "喜剧"
      ],
      "title": "我想静静",
      "casts": [
        {
          "avatars": {
            "small": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22866.jpg",
            "large": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22866.jpg",
            "medium": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22866.jpg"
          },
          "name_en": "Shaoqun Yu",
          "name": "余少群",
          "alt": "https://movie.douban.com/celebrity/1275100/",
          "id": "1275100"
        },
        {
          "avatars": {
            "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45409.jpg",
            "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45409.jpg",
            "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p45409.jpg"
          },
          "name_en": "Cyndi Wang",
          "name": "王心凌",
          "alt": "https://movie.douban.com/celebrity/1312849/",
          "id": "1312849"
        },
        {
          "avatars": {
            "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360146931.08.jpg",
            "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360146931.08.jpg",
            "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360146931.08.jpg"
          },
          "name_en": "Youming Tan",
          "name": "谭佑铭",
          "alt": "https://movie.douban.com/celebrity/1323815/",
          "id": "1323815"
        }
      ],
      "durations": [
        "100分钟"
      ],
      "collect_count": 76,
      "mainland_pubdate": "2020-08-07",
      "has_video": false,
      "original_title": "我想静静",
      "subtype": "movie",
      "directors": [
        {
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1963.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1963.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1963.jpg"
          },
          "name_en": "Alfred Cheung",
          "name": "张坚庭",
          "alt": "https://movie.douban.com/celebrity/1016979/",
          "id": "1016979"
        }
      ],
      "pubdates": [
        "2020-08-07(中国大陆)"
      ],
      "year": "2020",
      "images": {
        "small": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2595969179.jpg",
        "large": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2595969179.jpg",
        "medium": "http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2595969179.jpg"
      },
      "alt": "https://movie.douban.com/subject/26667275/",
      "id": "26667275"
    }
  ],
  "title": "即将上映的电影"
}
```

#### Top250

- 请求路径：/top250
- 请求方法：GET
- 请求参数

| 参数名 | 参数说明   | 备注     |
| ------ | ---------- | -------- |
| start  | 开始的索引 | 可以为空 |
| count  | 加载的条数 | 可以为空 |

- 响应参数

| 参数名   | 参数说明       | 备注                 |
| -------- | -------------- | -------------------- |
| count    | 加载的条数     | 此次请求加载的条数   |
| start    | 开始的索引     | 此次请求开始的索引   |
| total    | 总条数         | 此次请求获取的总条数 |
| subjects | 电影列表       | 里面存放的是电影项   |
| title    | 加载电影的类型 | 加载电影的类型       |

- 响应数据

```json
{
  "count": 1,
  "start": 0,
  "total": 250,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 9.7,
        "details": {
          "1": 1608,
          "2": 1303,
          "3": 21390,
          "4": 219997,
          "5": 1400670
        },
        "stars": "50",
        "min": 0
      },
      "genres": [
        "犯罪",
        "剧情"
      ],
      "title": "肖申克的救赎",
      "casts": [
        {
          "avatars": {
            "small": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
            "large": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
            "medium": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
          },
          "name_en": "Tim Robbins",
          "name": "蒂姆·罗宾斯",
          "alt": "https://movie.douban.com/celebrity/1054521/",
          "id": "1054521"
        },
        {
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
          },
          "name_en": "Morgan Freeman",
          "name": "摩根·弗里曼",
          "alt": "https://movie.douban.com/celebrity/1054534/",
          "id": "1054534"
        },
        {
          "avatars": {
            "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
            "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
            "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg"
          },
          "name_en": "Bob Gunton",
          "name": "鲍勃·冈顿",
          "alt": "https://movie.douban.com/celebrity/1041179/",
          "id": "1041179"
        }
      ],
      "durations": [
        "142分钟"
      ],
      "collect_count": 3000478,
      "mainland_pubdate": "",
      "has_video": true,
      "original_title": "The Shawshank Redemption",
      "subtype": "movie",
      "directors": [
        {
          "avatars": {
            "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
            "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
          },
          "name_en": "Frank Darabont",
          "name": "弗兰克·德拉邦特",
          "alt": "https://movie.douban.com/celebrity/1047973/",
          "id": "1047973"
        }
      ],
      "pubdates": [
        "1994-09-10(多伦多电影节)",
        "1994-10-14(美国)"
      ],
      "year": "1994",
      "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
      },
      "alt": "https://movie.douban.com/subject/1292052/",
      "id": "1292052"
    }
  ],
  "title": "豆瓣电影Top250"
}
```

## 电影详情

#### 电影信息

- 请求路径：/subject/:id
- 请求方法：GET
- 请求参数：无

- 响应参数

| 参数名           | 参数说明     | 备注                   |
| ---------------- | ------------ | ---------------------- |
| title            | 电影标题     | 电影标题               |
| rating           | 电影评分     | 里面有评分的细节       |
| ratings_count    | 评分人数     | 评分人数               |
| images           | 电影海报数组 | 里面存放电影相关的海报 |
| durations        | 电影时长     | 电影时长               |
| genres           | 电影类型     | 电影类型               |
| directors        | 导演         | 导演                   |
| casts            | 演员列表     | 演员列表               |
| pubdates         | 上映时间     | 上映时间               |
| tags             | 所属频道     | 所属频道               |
| summary          | 电影简介     | 电影简介               |
| trailer_urls     | 电影预告片   | 电影预告片             |
| photos_count     | 图片总数     | 图片总数               |
| comments_count   | 评论总数     | 评论总数               |
| popular_comments | 电影评价列表 | 电影评价列表           |

- 响应数据

```json
{
  "rating": {
    "max": 10,
    "average": 9.7,
    "details": {
      "1": 1608,
      "2": 1303,
      "3": 21390,
      "4": 219997,
      "5": 1400670
    },
    "stars": "50",
    "min": 0
  },
  "reviews_count": 10178,
  "videos": [
    {
      "source": {
        "literal": "qq",
        "pic": "http://img3.doubanio.com/f/movie/0a74f4379607fa731489d7f34daa545df9481fa0/pics/movie/video-qq.png",
        "name": "腾讯视频"
      },
      "sample_link": "http://v.qq.com/x/cover/1o29ui77e85grdr.html?ptag=douban.movie",
      "video_id": "1o29ui77e85grdr",
      "need_pay": true
    },
    {
      "source": {
        "literal": "iqiyi",
        "pic": "http://img9.doubanio.com/f/movie/7c9e516e02c6fe445b6559c0dd2a705e8b17d1c9/pics/movie/video-iqiyi.png",
        "name": "爱奇艺视频"
      },
      "sample_link": "http://www.iqiyi.com/v_19rra0h3wg.html?vfm=m_331_dbdy&fv=4904d94982104144a1548dd9040df241",
      "video_id": "19rra0h3wg",
      "need_pay": true
    },
    {
      "source": {
        "literal": "youku",
        "pic": "http://img1.doubanio.com/f/movie/886b26a83d18bc60de4ee1daac38145f03c88792/pics/movie/video-youku.png",
        "name": "优酷视频"
      },
      "sample_link": "http://v.youku.com/v_show/id_XMjgwNDkwNzE2.html?tpa=dW5pb25faWQ9MzAwMDA4XzEwMDAwMl8wMl8wMQ&refer=esfhz_operation.xuka.xj_00003036_000000_FNZfau_19010900",
      "video_id": "XMjgwNDkwNzE2",
      "need_pay": true
    },
    {
      "source": {
        "literal": "bilibili",
        "pic": "http://img9.doubanio.com/f/movie/f536fe0ea1cbb0914658ae803125d078351f9047/pics/movie/video-bilibili.png",
        "name": "哔哩哔哩"
      },
      "sample_link": "https://www.bilibili.com/bangumi/play/ss28274?bsource=douban",
      "video_id": "ss28274",
      "need_pay": false
    }
  ],
  "wish_count": 315345,
  "original_title": "The Shawshank Redemption",
  "blooper_urls": [],
  "collect_count": 3000484,
  "images": {
    "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
    "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
    "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
  },
  "douban_site": "",
  "year": "1994",
  "popular_comments": [
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "useful_count": 581,
      "author": {
        "uid": "Uvo",
        "avatar": "http://img1.doubanio.com/icon/u1030253-159.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/Uvo/",
        "id": "1030253",
        "name": "公享史"
      },
      "subject_id": "1292052",
      "content": "因为1994年台湾引进了一部比较卖座的老片The Sting，被错译成了《刺激》。到了1995年本片上映时，片商觉得其剧情与《刺激》有类似的地方（大概都属于高智商的复仇？），因此被译成了《刺激1995》，1998年又有一部片子Return To Paradise因为含有牢狱情节，被译成《刺激1998》！",
      "created_at": "2005-10-08 14:35:04",
      "id": "380050"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "useful_count": 8862,
      "author": {
        "uid": "hideinthecrowd",
        "avatar": "http://img1.doubanio.com/icon/u1423569-219.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/hideinthecrowd/",
        "id": "1423569",
        "name": "赫克托尔"
      },
      "subject_id": "1292052",
      "content": "有种鸟是关不住的.",
      "created_at": "2007-06-06 12:22:55",
      "id": "15267881"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "useful_count": 4913,
      "author": {
        "uid": "seawaver",
        "avatar": "http://img9.doubanio.com/icon/u1803449-36.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/seawaver/",
        "id": "1803449",
        "name": "碎瓦"
      },
      "subject_id": "1292052",
      "content": "忒经典的东西,我要带去我的坟墓",
      "created_at": "2007-08-29 17:21:44",
      "id": "19505494"
    },
    {
      "rating": {
        "max": 5,
        "value": 3,
        "min": 0
      },
      "useful_count": 1263,
      "author": {
        "uid": "antonia",
        "avatar": "http://img3.doubanio.com/icon/u1014251-20.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/antonia/",
        "id": "1014251",
        "name": "安东妮"
      },
      "subject_id": "1292052",
      "content": "点在哪？浅白的励志片诶",
      "created_at": "2009-05-05 02:56:43",
      "id": "118451401"
    }
  ],
  "alt": "https://movie.douban.com/subject/1292052/",
  "id": "1292052",
  "mobile_url": "https://movie.douban.com/subject/1292052/mobile",
  "photos_count": 714,
  "pubdate": "",
  "title": "肖申克的救赎",
  "do_count": null,
  "has_video": true,
  "share_url": "http://m.douban.com/movie/subject/1292052",
  "seasons_count": null,
  "languages": [
    "英语"
  ],
  "schedule_url": "",
  "writers": [
    {
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
      },
      "name_en": "Frank Darabont",
      "name": "弗兰克·德拉邦特",
      "alt": "https://movie.douban.com/celebrity/1047973/",
      "id": "1047973"
    },
    {
      "avatars": {
        "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378040671.87.jpg",
        "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378040671.87.jpg",
        "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378040671.87.jpg"
      },
      "name_en": "Stephen King",
      "name": "斯蒂芬·金",
      "alt": "https://movie.douban.com/celebrity/1049547/",
      "id": "1049547"
    }
  ],
  "pubdates": [
    "1994-09-10(多伦多电影节)",
    "1994-10-14(美国)"
  ],
  "website": "",
  "tags": [
    "经典",
    "励志",
    "信念",
    "自由",
    "人性",
    "人生",
    "美国",
    "希望",
    "剧情",
    "成长"
  ],
  "has_schedule": false,
  "durations": [
    "142分钟"
  ],
  "genres": [
    "犯罪",
    "剧情"
  ],
  "collection": null,
  "trailers": [
    {
      "medium": "http://img1.doubanio.com/img/trailer/medium/2587159379.jpg?",
      "title": "预告片：25周年经典重映 (中文字幕)",
      "subject_id": "1292052",
      "alt": "https://movie.douban.com/trailer/259258/",
      "small": "http://img1.doubanio.com/img/trailer/small/2587159379.jpg?",
      "resource_url": "https://vt1.doubanio.com/202007082223/ffa798403c67aede9a5d436e9e3f3bce/view/movie/M/302590258.mp4",
      "id": "259258"
    },
    {
      "medium": "http://img3.doubanio.com/img/trailer/medium/1433841022.jpg?",
      "title": "预告片",
      "subject_id": "1292052",
      "alt": "https://movie.douban.com/trailer/108756/",
      "small": "http://img3.doubanio.com/img/trailer/small/1433841022.jpg?",
      "resource_url": "https://vt1.doubanio.com/202007082223/d4bf03b58950c7cfe4c6aed2b43aa4a2/view/movie/M/301080756.mp4",
      "id": "108756"
    }
  ],
  "episodes_count": null,
  "trailer_urls": [
    "https://vt1.doubanio.com/202007082223/ffa798403c67aede9a5d436e9e3f3bce/view/movie/M/302590258.mp4",
    "https://vt1.doubanio.com/202007082223/d4bf03b58950c7cfe4c6aed2b43aa4a2/view/movie/M/301080756.mp4"
  ],
  "has_ticket": false,
  "bloopers": [],
  "clip_urls": [],
  "current_season": null,
  "casts": [
    {
      "avatars": {
        "small": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
        "large": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
        "medium": "http://img9.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
      },
      "name_en": "Tim Robbins",
      "name": "蒂姆·罗宾斯",
      "alt": "https://movie.douban.com/celebrity/1054521/",
      "id": "1054521"
    },
    {
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
      },
      "name_en": "Morgan Freeman",
      "name": "摩根·弗里曼",
      "alt": "https://movie.douban.com/celebrity/1054534/",
      "id": "1054534"
    },
    {
      "avatars": {
        "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
        "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
        "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg"
      },
      "name_en": "Bob Gunton",
      "name": "鲍勃·冈顿",
      "alt": "https://movie.douban.com/celebrity/1041179/",
      "id": "1041179"
    },
    {
      "avatars": {
        "small": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.jpg",
        "large": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.jpg",
        "medium": "http://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p7827.jpg"
      },
      "name_en": "William Sadler",
      "name": "威廉姆·赛德勒",
      "alt": "https://movie.douban.com/celebrity/1000095/",
      "id": "1000095"
    }
  ],
  "countries": [
    "美国"
  ],
  "mainland_pubdate": "",
  "photos": [
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p712907932.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p712907932.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p712907932.jpg",
      "alt": "https://movie.douban.com/photos/photo/712907932/",
      "id": "712907932",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p712907932.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p2561714803.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p2561714803.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p2561714803.jpg",
      "alt": "https://movie.douban.com/photos/photo/2561714803/",
      "id": "2561714803",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p2561714803.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p617951690.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p617951690.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p617951690.jpg",
      "alt": "https://movie.douban.com/photos/photo/617951690/",
      "id": "617951690",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p617951690.jpg"
    },
    {
      "thumb": "https://img1.doubanio.com/view/photo/m/public/p450994579.jpg",
      "image": "https://img1.doubanio.com/view/photo/l/public/p450994579.jpg",
      "cover": "https://img1.doubanio.com/view/photo/sqs/public/p450994579.jpg",
      "alt": "https://movie.douban.com/photos/photo/450994579/",
      "id": "450994579",
      "icon": "https://img1.doubanio.com/view/photo/s/public/p450994579.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p617951743.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p617951743.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p617951743.jpg",
      "alt": "https://movie.douban.com/photos/photo/617951743/",
      "id": "617951743",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p617951743.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p1225215490.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p1225215490.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p1225215490.jpg",
      "alt": "https://movie.douban.com/photos/photo/1225215490/",
      "id": "1225215490",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p1225215490.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p490576110.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p490576110.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p490576110.jpg",
      "alt": "https://movie.douban.com/photos/photo/490576110/",
      "id": "490576110",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p490576110.jpg"
    },
    {
      "thumb": "https://img9.doubanio.com/view/photo/m/public/p1004031025.jpg",
      "image": "https://img9.doubanio.com/view/photo/l/public/p1004031025.jpg",
      "cover": "https://img9.doubanio.com/view/photo/sqs/public/p1004031025.jpg",
      "alt": "https://movie.douban.com/photos/photo/1004031025/",
      "id": "1004031025",
      "icon": "https://img9.doubanio.com/view/photo/s/public/p1004031025.jpg"
    },
    {
      "thumb": "https://img3.doubanio.com/view/photo/m/public/p456482220.jpg",
      "image": "https://img3.doubanio.com/view/photo/l/public/p456482220.jpg",
      "cover": "https://img3.doubanio.com/view/photo/sqs/public/p456482220.jpg",
      "alt": "https://movie.douban.com/photos/photo/456482220/",
      "id": "456482220",
      "icon": "https://img3.doubanio.com/view/photo/s/public/p456482220.jpg"
    },
    {
      "thumb": "https://img9.doubanio.com/view/photo/m/public/p2309770674.jpg",
      "image": "https://img9.doubanio.com/view/photo/l/public/p2309770674.jpg",
      "cover": "https://img9.doubanio.com/view/photo/sqs/public/p2309770674.jpg",
      "alt": "https://movie.douban.com/photos/photo/2309770674/",
      "id": "2309770674",
      "icon": "https://img9.doubanio.com/view/photo/s/public/p2309770674.jpg"
    }
  ],
  "summary": "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为鲨堡的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗 里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……\n本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。©豆瓣",
  "clips": [],
  "subtype": "movie",
  "directors": [
    {
      "avatars": {
        "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
        "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
        "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
      },
      "name_en": "Frank Darabont",
      "name": "弗兰克·德拉邦特",
      "alt": "https://movie.douban.com/celebrity/1047973/",
      "id": "1047973"
    }
  ],
  "comments_count": 377260,
  "popular_reviews": [
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "十年·肖申克的救赎",
      "subject_id": "1292052",
      "author": {
        "uid": "bighead",
        "avatar": "http://img3.doubanio.com/icon/u1000152-23.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/bighead/",
        "id": "1000152",
        "name": "大头绿豆"
      },
      "summary": "距离斯蒂芬·金（Stephen King）和德拉邦特（Frank Darabont）们缔造这部伟大的作品已经有十年了。我知道美好的东西想必大家都能感受，但是很抱歉，我的聒噪仍将一如既往。 在我眼里，肖申克的救赎与信念、自由和...",
      "alt": "https://movie.douban.com/review/1000369/",
      "id": "1000369"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "终于找到了郁闷人生的原因――观《肖申克的救赎》有感",
      "subject_id": "1292052",
      "author": {
        "uid": "lazywormzhao",
        "avatar": "http://img3.doubanio.com/icon/u1000564-1.jpg",
        "signature": "隐居云上",
        "alt": "https://www.douban.com/people/lazywormzhao/",
        "id": "1000564",
        "name": "隱居雲上"
      },
      "summary": " 周末看了一部美国影片《肖申克的救赎》（《The Shawshank Redemption》） 讲的是一位因冤案入狱的年轻银行家在牢中如何追寻自由的故事。 不同的人看同样的影片可能都有不同的感受。对于目前无力改变现状的我，看...",
      "alt": "https://movie.douban.com/review/1001258/",
      "id": "1001258"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "Andy Dufresne",
      "subject_id": "1292052",
      "author": {
        "uid": "nakedfake",
        "avatar": "http://img1.doubanio.com/icon/user_normal.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/nakedfake/",
        "id": "1017620",
        "name": "[已注销]"
      },
      "summary": "Andy Dufresne，一个永垂电影史册的名字。  1  关于《The Shawshank Redemption》的评论，太多，该说的差不多都已说了千万遍。对于这样一个热门的话题，再想要抒发一些个人的喜爱之情，不免有拾人牙慧之嫌。为了...",
      "alt": "https://movie.douban.com/review/1019121/",
      "id": "1019121"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "为何《肖申克的救赎》在IMDb和豆瓣都能排第一？",
      "subject_id": "1292052",
      "author": {
        "uid": "yalindongdong",
        "avatar": "http://img9.doubanio.com/icon/u2586116-96.jpg",
        "signature": "Life is wonderful !",
        "alt": "https://www.douban.com/people/yalindongdong/",
        "id": "2586116",
        "name": "方枪枪"
      },
      "summary": "时间会证明经典的价值，虽然在某些时刻会被误判和忽视。 用上面这句话来描述电影《肖申克的救赎》丝毫不会让人觉得会有任何夸张和吹捧的意味，因为这部电影在后来多年牢牢占据IMDB和豆瓣电影榜单第一名的位置足以...",
      "alt": "https://movie.douban.com/review/9259304/",
      "id": "9259304"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "《肖申克的救赎》：1994—2007，希望就是现实",
      "subject_id": "1292052",
      "author": {
        "uid": "1317870",
        "avatar": "http://img3.doubanio.com/icon/u1317870-33.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/1317870/",
        "id": "1317870",
        "name": "aratana"
      },
      "summary": "一、缘起  从来没想过给《肖申克的救赎》写一篇影评，也许是生怕暴露自己只是个不谙世事的初级影迷，也许是对这样一部无法复制的影片真的不愿去过多地提起。然而一场出其不意的重感冒让我只能卧床裹被，已没有了...",
      "alt": "https://movie.douban.com/review/1127585/",
      "id": "1127585"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "人生的过程就是一个摆脱institutionalization(体制化)的过程",
      "subject_id": "1292052",
      "author": {
        "uid": "suoliweng",
        "avatar": "http://img3.doubanio.com/icon/u1026935-2.jpg",
        "signature": "人乐有缘，诺以终身",
        "alt": "https://www.douban.com/people/suoliweng/",
        "id": "1026935",
        "name": "蓑笠翁"
      },
      "summary": "现在好象比较时兴将人分为体制内和体制外的人,体制外的人通常有某种优越感,似乎自己的人格才是独立的.可实际上,真正愿意做体制外的人还是很少的,而且是很痛苦的.余杰北大硕士毕业后差一点进了他想进的国家图书馆...",
      "alt": "https://movie.douban.com/review/1005528/",
      "id": "1005528"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "《肖申克的救赎》台词整理",
      "subject_id": "1292052",
      "author": {
        "uid": "131064354",
        "avatar": "http://img1.doubanio.com/icon/u131064354-9.jpg",
        "signature": ":D",
        "alt": "https://www.douban.com/people/131064354/",
        "id": "131064354",
        "name": "好美的美好"
      },
      "summary": "1．It takes a strong man to save himself, and a great man to save another. 强者救赎自己，圣人普度他人 2．Hope is a good thing, maybe the best of things, and no good thing ever dies. 希望是美好的，...",
      "alt": "https://movie.douban.com/review/8649949/",
      "id": "8649949"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "《肖申克的救赎》的一些幕后花絮",
      "subject_id": "1292052",
      "author": {
        "uid": "erichuang",
        "avatar": "http://img3.doubanio.com/icon/u1187841-1.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/erichuang/",
        "id": "1187841",
        "name": "油爆虾"
      },
      "summary": " * 是否记得片尾有一行字幕\"In memory of Allen Greene\"？翻译成中文就是\"纪念Allen Greene \"。Allen Greene是《肖申克的救赎》编导Frank Darabont的经纪人，在影片完成 的前夕死于AIDS的并发症。 　　 　　* 是...",
      "alt": "https://movie.douban.com/review/1062920/",
      "id": "1062920"
    },
    {
      "rating": {
        "max": 5,
        "value": 5,
        "min": 0
      },
      "title": "关于“救赎”",
      "subject_id": "1292052",
      "author": {
        "uid": "167539095",
        "avatar": "http://img3.doubanio.com/icon/u167539095-1.jpg",
        "signature": "",
        "alt": "https://www.douban.com/people/167539095/",
        "id": "167539095",
        "name": "豆瓣的宇宙"
      },
      "summary": "个人感觉，《肖申克的救赎》（The Shawshank Redemption）中的Redemption的意思是“赎回;偿还;补救”，因此“救赎”非常完美地解释了这部电影的主题，围绕“救赎”主题的是： 1，安迪对自己的救赎：从一开始不让...",
      "alt": "https://movie.douban.com/review/8848890/",
      "id": "8848890"
    },
    {
      "rating": {
        "max": 5,
        "value": 1,
        "min": 0
      },
      "title": "没能力自由，谈什么自由 —— 其实你没那么渴望自由",
      "subject_id": "1292052",
      "author": {
        "uid": "58035060",
        "avatar": "http://img3.doubanio.com/icon/u58035060-33.jpg",
        "signature": "只想找到养好自己的灵魂",
        "alt": "https://www.douban.com/people/58035060/",
        "id": "58035060",
        "name": "附离"
      },
      "summary": "打一颗星并不是因为这部片很差，只是不明白怎么会是豆瓣电影里的头牌。用极端的踩来平衡下极端的捧。  N年前看的片子，当时觉得真不错。具体不错在哪里？或许是因为结局不错，主人公最终成功越狱到达梦想之地，观...",
      "alt": "https://movie.douban.com/review/5449290/",
      "id": "5449290"
    }
  ],
  "ratings_count": 2068176,
  "aka": [
    "月黑高飞(港)",
    "刺激1995(台)",
    "地狱诺言",
    "铁窗岁月",
    "消香克的救赎"
  ]
}
```

#### 