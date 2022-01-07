/*
  <program> ::= program <command list>
  <command list> ::= <command>* end
  <command> ::= <repeat command> | <primitive command>
  <repeat command> ::= repeat <number> <command list>
  <primitive command> ::= go | right | left
*/

import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { Context } from './context'
import { Node } from './node'
import { Program } from './program'

const stream = fs.createReadStream(path.join(__dirname, `mini/program.txt`))
const reader = readline.createInterface({ input: stream })

reader.on('line', (line: string) => {
  console.log(`text = ${line}`)
  const node: Node = new Program()
  node.parse(new Context(line))
  console.log(`node = ${node}`)
})
