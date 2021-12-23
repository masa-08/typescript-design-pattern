import { Singleton } from './singleton'

console.log('Start.')
const obj1 = Singleton.instance
const obj2 = Singleton.instance
if (obj1 === obj2) {
  console.log('obj1とobj2は同じインスタンスです')
} else {
  console.log('obj1とobj2は同じインスタンスではありません')
}
console.log('End.')
