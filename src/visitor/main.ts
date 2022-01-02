/*
  root
  |---bin
  |   |---vi
  |   |---latex
  |
  |---tmp
  |---usr
      |---yuki
      |   |---diary.html
      |   |---Composite.java
      |
      |---hanako
      |   |---memo.tex
      |
      |---tomura
          |---game.doc
          |---junk.mail
*/

import { Directory } from './directory'
import { File } from './file'
import { ListVisitor } from './listVisitor'

console.log('Making root entries...')
const root = new Directory('root')
const bin = new Directory('bin')
const tmp = new Directory('tmp')
const usr = new Directory('usr')

root.add(bin)
root.add(tmp)
root.add(usr)
bin.add(new File('vi', 10000))
bin.add(new File('latex', 20000))

root.accept(new ListVisitor())

console.log('')
console.log('Making user entries...')
const yuki = new Directory('yuki')
const hanako = new Directory('hanako')
const tomura = new Directory('tomura')

usr.add(yuki)
usr.add(hanako)
usr.add(tomura)

yuki.add(new File('diary.html', 100))
yuki.add(new File('Composite.java', 200))
hanako.add(new File('memo.tex', 300))
tomura.add(new File('game.doc', 400))
tomura.add(new File('junk.mail', 500))

root.accept(new ListVisitor())
