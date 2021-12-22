import { CharDisplay } from './charDisplay'
import { Display } from './display'
import { StringDisplay } from './stringDisplay'

const charDisplay: Display = new CharDisplay('A')
charDisplay.display()

const enStrDisplay: Display = new StringDisplay('Hello World.')
enStrDisplay.display()

const jpStrDisplay: Display = new StringDisplay('こんにちは。')
jpStrDisplay.display()
