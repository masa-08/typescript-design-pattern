/*
スイッチA, B, C, Dがある
A, B, Cのうち、いずれか一つが押されていると、DはDisabled
A, B, Cのうち、２つが押されていると、残りの一つはDisabled（DももちろんDisbaled）
Dが押されると、残りのA, B, CはすべてDisabled
*/

import { Mediator } from './mediator'
import { MediatorImpl } from './mediatorImpl'

const mediator: Mediator = new MediatorImpl()

// AとBが押されるため、CとDは押せない想定
mediator.print(1)
mediator.toggle('A')
mediator.toggle('B')
mediator.print(2)
mediator.toggle('C')
mediator.toggle('D')
mediator.print(3)

// 一度リセット
mediator.toggle('A')
mediator.toggle('B')
mediator.print(4)

// Dを押すとA, B, Cいずれも押せない
mediator.toggle('D')
mediator.print(5)
mediator.toggle('A')
mediator.toggle('B')
mediator.toggle('C')
