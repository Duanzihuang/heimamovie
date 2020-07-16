/**
 * 装饰器：本质是一个方法，可以注入到类、方法、属性参数上来拓展类、属性、方法、参数的功能
 *
 * 分类：类装饰器、属性装饰器、方法装饰器、方法参数装饰器
 *
 * 属性装饰器:
 *  接收两个参数: 参数1 类的构造函数(静态成员)/原型对象(实例成员)
 *               参数2 成员的名字
 *
 * 装饰器的写法：普通装饰器(无法传参)、装饰器工厂(可传参)
 *
 * 各种装饰器执行顺序：属性装饰器 > 方法参数装饰器 > 方法装饰器 > 类装饰器
 *                  如果每种有多个，则从后往前执行
 */

function Property(params: string) {
  // 参数1 类的构造函数(静态成员)/原型对象(实例成员)  prototype === HttpClient2.prototype
  // 参数2 成员的名字
  return function(prototype: any, name: string) {
    prototype[name] = params
  }
}

class HttpClient2 {
  @Property('http://api.duanzihuang.top')
  public apiUrl: string | undefined

  getData() {
    console.log('apiUrl is ', this.apiUrl)
  }
}

const httpClient2 = new HttpClient2()
httpClient2.getData()
