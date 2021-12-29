import { Director } from './director'
import { HTMLBuilder } from './htmlBuilder'
import { TextBuilder } from './textBuilder'

const textBuilder = new TextBuilder()
const director1 = new Director(textBuilder)
director1.construct()
console.log(textBuilder.getResult())

const htmlBuilder = new HTMLBuilder()
const director2 = new Director(htmlBuilder)
director2.construct()
console.log(htmlBuilder.getResult())
