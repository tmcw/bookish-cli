import {Id, Ids} from './types.js'

export async function isbnToOpenlibrary(id: string): Promise<Id[]> {
  const base = new URL('https://openlibrary.org/api/books?format=json&jscmd=data')
  base.searchParams.set('bibkeys', `ISBN:${id}`)
  const body = await fetch(base).then((r) => r.json())

  if (Object.keys(body).length === 0) {
    console.log('NOT FOUND')
    return []
  }

  const {
    identifiers: {isbn10, isbn13, lccn, oclc, openlibrary},
    // title,
    // authors,
  } = body[`ISBN:${id}`]

  // https://openlibrary.org/books/${openlibrary}
  return [
    new Ids.ISBN10(isbn10),
    new Ids.ISBN13(isbn13),
    new Ids.LCCN(lccn),
    new Ids.OCLC(oclc),
    new Ids.OLID(openlibrary),

    // isbn: [isbn13, isbn10],
    // lccn,
    // oclc,
    // openlibrary,
    // permalinks: [``],
    // title,
    // authors: authors.map((a) => a.name),
  ]
}
