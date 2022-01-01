import { Player } from './player'
import { ProbStrategy } from './probStrategy'
import { WinningStrategy } from './winningStrategy'

const taro = new Player('Taro', new WinningStrategy())
const hana = new Player('Hana', new ProbStrategy())

Array(10000)
  .fill(0)
  .forEach(() => {
    const handTaro = taro.nextHand()
    const handHana = hana.nextHand()
    if (handTaro.isStrongerThan(handHana)) {
      taro.win()
      hana.lose()
    } else if (handTaro.isWeakerThan(handHana)) {
      taro.lose()
      hana.win()
    } else {
      taro.even()
      hana.even()
    }
  })

console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
console.log(taro.toString())
console.log(hana.toString())
console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
