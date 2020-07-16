/**
 * 装饰器：本质是一个方法，可以注入到类、方法、属性参数上来拓展类、属性、方法、参数的功能
 *
 * 分类：类装饰器、属性装饰器、方法装饰器、方法参数装饰器
 *
 * 方法装饰器:
 *  接收三个参数: 参数1 类的构造函数(静态成员)/原型对象(实例成员)
 *               参数2 方法的名字
 *               参数3 方法描述
 *
 * 方法参数装饰器:
 *  接收三个参数: 参数1 类的构造函数(静态成员)/原型对象(实例成员)
 *               参数2 方法的名字
 *               参数3 参数的索引
 *
 * 装饰器的写法：普通装饰器(无法传参)、装饰器工厂(可传参)
 *
 * 各种装饰器执行顺序：属性装饰器 > 方法参数装饰器 > 方法装饰器 > 类装饰器
 *                  如果每种有多个，则从后往前执行
 */

// 方法装饰器
function Method(params: string) {
  // 参数1 类的构造函数(静态成员)/原型对象(实例成员)  prototype === HttpClient3.prototype
  // 参数2 方法的名字
  // 参数3 方法描述
  return function(prototype: any, name: string, desc: any) {
    // desc.value === getData
    // console.log(desc)

    // 保存之前的方法
    const oldMethod = desc.value

    desc.value = function(...args: any) {
      args = args.map((item: any) => {
        return String(item)
      })

      console.log('方法装饰器内部 ', args)

      // console.log('method invoke start -----', new Date() - 0)
      oldMethod.apply(this, args)
      // console.log('method invoke end -----', new Date() - 0)
    }
  }
}

// 方法参数装饰器
function MethodParams(params: any) {
  /**
   * 参数1 类的构造函数(静态成员)/原型对象(实例成员)
   * 参数2 方法的名字
   * 参数3 参数的索引
   */
  return function(prototype: any, name: string, index: number) {
    console.log('---------------------------------------')
    console.log(params)
    console.log(prototype)
    console.log(name)
    console.log(index)
  }
}

class HttpClient3 {
  @Method('xxx')
  getData(...args: any[]) {
    console.log('getData method invoke', args)
  }

  setData(
    @MethodParams('name') name: string,
    @MethodParams('age') age: number
  ) {
    console.log(`this person name is ${name} age is ${age}`)
  }
}

const httpClient3 = new HttpClient3()
httpClient3.getData(123, 'nihao', true)
httpClient3.setData('段子黄', 31)
