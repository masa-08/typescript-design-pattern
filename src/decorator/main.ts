import { Display } from './display'
import { FullBorder } from './fullBorder'
import { SideBorder } from './sideBorder'
import { StringDisplay } from './stringDisplay'

const d1: Display = new StringDisplay('Hello World.')
const d2: Display = new SideBorder(d1, '#')
const d3: Display = new FullBorder(d2)
d1.show()
d2.show()
d3.show()

const d4: Display = new SideBorder(
  new FullBorder(
    new FullBorder(
      new SideBorder(new FullBorder(new StringDisplay('こんにちは')), '*')
    )
  ),
  '/'
)
d4.show()
