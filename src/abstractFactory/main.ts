import { Factory } from './factory'
import { ListFactory } from './listFactory'
import { TableFactory } from './tableFactory'

const listFactory: Factory = Factory.getFactory(ListFactory)
const tableFactory: Factory = Factory.getFactory(TableFactory)

// ListFactoryを使用する場合
{
  const asahi = listFactory.createLink('朝日新聞', 'https://www.asahi.com/')
  const yomiuri = listFactory.createLink(
    '読売新聞',
    'https://www.yomiuri.co.jp/'
  )

  const usYahoo = listFactory.createLink('Yahoo!', 'https://www.yahoo.com/')
  const jpYahoo = listFactory.createLink(
    'Yahoo!Japan',
    'https://www.yahoo.co.jp/'
  )
  const google = listFactory.createLink('Google', 'https://www.google.com/')

  const traynews = listFactory.createTray('新聞')
  traynews.add(asahi)
  traynews.add(yomiuri)

  const trayyahoo = listFactory.createTray('Yahoo!')
  trayyahoo.add(usYahoo)
  trayyahoo.add(jpYahoo)

  const traysearch = listFactory.createTray('サーチエンジン')
  traysearch.add(trayyahoo)
  traysearch.add(google)

  const page = listFactory.createPage('LinkPage', '山田 太郎')
  page.add(traynews)
  page.add(traysearch)
  page.output()
}

// TableFactoryを使用する場合
{
  const asahi = tableFactory.createLink('朝日新聞', 'https://www.asahi.com/')
  const yomiuri = tableFactory.createLink(
    '読売新聞',
    'https://www.yomiuri.co.jp/'
  )

  const usYahoo = tableFactory.createLink('Yahoo!', 'https://www.yahoo.com/')
  const jpYahoo = tableFactory.createLink(
    'Yahoo!Japan',
    'https://www.yahoo.co.jp/'
  )
  const google = tableFactory.createLink('Google', 'https://www.google.com/')

  const traynews = tableFactory.createTray('新聞')
  traynews.add(asahi)
  traynews.add(yomiuri)

  const trayyahoo = tableFactory.createTray('Yahoo!')
  trayyahoo.add(usYahoo)
  trayyahoo.add(jpYahoo)

  const traysearch = tableFactory.createTray('サーチエンジン')
  traysearch.add(trayyahoo)
  traysearch.add(google)

  const page = tableFactory.createPage('TablePage', '山田 太郎')
  page.add(traynews)
  page.add(traysearch)
  page.output()
}
