import { Manager } from './framework/manager'
import { MessageBox } from './messageBox'
import { UnderlinePen } from './underlinePen'

const manager = new Manager()
const upen = new UnderlinePen('~')
const mbox = new MessageBox('*')
const sbox = new MessageBox('/')

manager.register({ name: 'strong message', product: upen })
manager.register({ name: 'warning box', product: mbox })
manager.register({ name: 'slash box', product: sbox })

const p1 = manager.create('strong message')
p1?.use('Hello world.')

const p2 = manager.create('warning box')
p2?.use('Hello world.')

const p3 = manager.create('slash box')
p3?.use('Hello world.')
