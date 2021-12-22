import { Factory } from './framework/factory'
import { Product } from './framework/product'
import { IDCardFactory } from './idcard/idcardFactory'

const factory: Factory = new IDCardFactory()
const card1: Product = factory.create('一郎')
const card2: Product = factory.create('二郎')
const card3: Product = factory.create('三郎')

card1.use()
card2.use()
card3.use()
