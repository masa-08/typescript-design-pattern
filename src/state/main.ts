import { Safe } from './safe'

console.log('----------------------------')
const safe = new Safe()

// まず、お昼の12時を想定する
safe.setClock(12)
safe.do('use')
safe.do('alert')
safe.do('call')

console.log('----------------------------')

// 次に、深夜0時を想定する
safe.setClock(0)
safe.do('use')
safe.do('alert')
safe.do('call')

console.log('----------------------------')
