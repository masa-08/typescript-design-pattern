import { Gamer } from './gamer'

const gamer = new Gamer(100)
let memento = gamer.save()

for (let i = 0; i < 100; i++) {
  console.log(`==== ${i}`)
  console.log(`現状: ${gamer}`)
  gamer.bet()
  console.log(`所持金は${gamer.money}円になりました`)

  if (gamer.money > memento.money) {
    console.log('現在の状態を保存します')
    memento = gamer.save()
  } else if (gamer.money < memento.money / 2) {
    console.log('以前の状態に復帰します')
    gamer.restore(memento)
  }

  console.log('')
}
