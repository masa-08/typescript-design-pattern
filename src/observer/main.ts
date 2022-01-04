import { DigitObserver } from './digitObserver'
import { GraphObserver } from './graphObserver'
import { NumberGenerator } from './numberGenerator'
import { Observer } from './observer'
import { RandomNumberGenerator } from './randomNumberGenerator'

const generator: NumberGenerator = new RandomNumberGenerator()
const observer1: Observer = new DigitObserver()
const observer2: Observer = new GraphObserver()
generator.add(observer1)
generator.add(observer2)
generator.execute()
