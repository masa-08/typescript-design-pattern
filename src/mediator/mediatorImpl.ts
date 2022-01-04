import { Mediator } from './mediator'
import { Switch } from './switch'

export class MediatorImpl implements Mediator {
  private switchA: Switch
  private switchB: Switch
  private switchC: Switch
  private switchD: Switch
  constructor() {
    this.switchA = new Switch('A')
    this.switchB = new Switch('B')
    this.switchC = new Switch('C')
    this.switchD = new Switch('D')
    this.setMediators()
  }

  setMediators() {
    this.switchA.setMediator(this)
    this.switchB.setMediator(this)
    this.switchC.setMediator(this)
    this.switchD.setMediator(this)
  }

  colleagueChanged() {
    // スイッチDが押されたときは、A, B, CがDisabledになる
    if (this.switchD.toggled) {
      this.switchA.setColleagueEnabled(false)
      this.switchB.setColleagueEnabled(false)
      this.switchC.setColleagueEnabled(false)
    } else if (this.switchA.toggled && this.switchB.toggled) {
      // AとBが押されたときは、C, DがDisabledになる
      this.switchC.setColleagueEnabled(false)
      this.switchD.setColleagueEnabled(false)
    } else if (this.switchA.toggled && this.switchC.toggled) {
      // AとCが押されたときは、B, DがDisabledになる
      this.switchB.setColleagueEnabled(false)
      this.switchD.setColleagueEnabled(false)
    } else if (this.switchB.toggled && this.switchC.toggled) {
      // BとCが押されたときは、A, DがDisabledになる
      this.switchA.setColleagueEnabled(false)
      this.switchD.setColleagueEnabled(false)
    } else if (
      this.switchA.toggled ||
      this.switchB.toggled ||
      this.switchC.toggled
    ) {
      // A or B or Cが押されたときは、DがDisabledになる
      this.switchD.setColleagueEnabled(false)
    } else {
      this.switchA.setColleagueEnabled(true)
      this.switchB.setColleagueEnabled(true)
      this.switchC.setColleagueEnabled(true)
      this.switchD.setColleagueEnabled(true)
    }
  }

  toggle(id: string) {
    switch (id) {
      case 'A':
        this.switchA.toggle()
        break
      case 'B':
        this.switchB.toggle()
        break
      case 'C':
        this.switchC.toggle()
        break
      case 'D':
        this.switchD.toggle()
        break
    }
  }

  print(step: number) {
    console.log('---------------------------------------------')
    console.log(`---- STEP${step} ----------------------------------`)
    console.log('---------------------------------------------')
    console.log(this.switchA.toString())
    console.log(this.switchB.toString())
    console.log(this.switchC.toString())
    console.log(this.switchD.toString())
    console.log('---------------------------------------------')
  }
}
