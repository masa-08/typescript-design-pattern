import { NumberGenerator } from './numberGenerator'
import { Observer } from './observer'

export class DigitObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log(`DigitObserver:${generator.getNumber()}`)
    console.log('---------------------------------------')
  }
}
