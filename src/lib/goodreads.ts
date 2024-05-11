import cheerio from 'cheerio'

const base = 'https://www.goodreads.com/book'
const GOODREADS_KEY = 'H0A4fmIW7WF2btmo1ACpw'

const getXML = async (url: string) => cheerio.load(await fetch(url).then((r) => r.text()), {xmlMode: true})

export async function isbnToGoodreads(isbn: string) {
  const body = await fetch(`${base}/isbn_to_id/${isbn}?key=${GOODREADS_KEY}`).then((r) => r.text())
  const link = `https://goodreads.com/book/show/${body}`
  const id = body
  return id
}
