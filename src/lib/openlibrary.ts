const base = 'https://openlibrary.org/api/books?format=json&jscmd=data&bibkeys='

export async function isbnToOpenlibrary(isbn: string) {
  const url = `${base}ISBN:${isbn}`

  const body = await fetch(url).then((r) => r.json())

  if (Object.keys(body).length === 0) {
    console.log('NOT FOUND')
    return null
  }

  const {
    identifiers: {isbn10, isbn13, lccn, oclc, openlibrary},
    title,
    // authors,
  } = body[`ISBN:${isbn}`]

  return {
    isbn: [isbn13, isbn10],
    lccn,
    oclc,
    openlibrary,
    permalinks: [`https://openlibrary.org/books/${openlibrary}`],
    title,
    // authors: authors.map((a) => a.name),
  }
}
