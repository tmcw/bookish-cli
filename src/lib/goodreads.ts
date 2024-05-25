import {Ids} from './types.js'
const base = 'https://www.goodreads.com/book'
const GOODREADS_KEY = 'H0A4fmIW7WF2btmo1ACpw'

// For when I re-introduce permalinks
// const link = `https://goodreads.com/book/show/${body}`

export async function isbnToGoodreads(isbn: string) {
  const url = `${base}/isbn_to_id/${isbn}?key=${GOODREADS_KEY}`
  const body = await (await fetch(url)).text()
  const id = body
  return [new Ids.GoodReads(id)]
}
