/**
 * 装饰器：本质是一个方法，可以注入到类、方法、属性参数上来拓展类、属性、方法、参数的功能
 *
 * 分类：类装饰器、属性装饰器、方法装饰器、方法参数装饰器
 *
 * 类装饰器: 在不修改当前类的前提下，动态给类添加属性和方法
 *
 * 装饰器的写法：普通装饰器(无法传参)、装饰器工厂(可传参)
 *
 * 各种装饰器执行顺序：属性装饰器 > 方法参数装饰器 > 方法装饰器 > 类装饰器
 *                  如果每种有多个，则从后往前执行
 */

// 普通装饰器(无法传参)
function Log(target: any) {
  // console.log(target)
  // target 代表当前类

  target.prototype.apiUrl = 'http://www.api.com'

  target.prototype.send = function() {
    console.log(`send invoke`)
  }
}

// 装饰器工厂(可传参)
function LogFactory(params: any) {
  return function(target: any) {
    // console.log(target)
    // console.log('------')
    // console.log(params)
    target.prototype.apiUrl = params.apiUrl
  }
}

// 普通装饰器(重写构造器方法或是其它方法)
function LogOverride(target: any) {
  return class extends target {
    apiUrl = 'http://api.duanzihuang.top'

    getData() {
      console.log('重写后的apiUrl:', this.apiUrl)
    }
  }
}

//@Log //普通装饰器(无法传参)
// @LogFactory({apiUrl: 'http://api.huangjiangjun.top'})
@LogOverride
class HttpClient {
  public apiUrl: string | undefined

  constructor() {
    this.apiUrl = 'http://api.huangjiangjun.top'
  }

  getData() {
    console.log(this.apiUrl)
  }
}

const httpClient: any = new HttpClient()
httpClient.getData()
// console.log(httpClient)
// console.log(httpClient.apiUrl)
// httpClient.send()
