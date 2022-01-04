import { NumberGenerator } from './numberGenerator'
import { Observer } from './observer'

export class GraphObserver implements Observer {
  update(generator: NumberGenerator): void {
    const count = generator.getNumber()
    console.log(`GraphObserver:${Array(count).fill('*').join('')}`)
    console.log('')
    console.log('---------------------------------------')
  }
}
