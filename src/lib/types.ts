import {isbnToGoodreads} from './goodreads.js'
import {isbnToOpenlibrary} from './openlibrary.js'

export abstract class Id {
  static key: string
  value: string
  constructor(value: string) {
    this.value = value
  }

  // Make this an abstraction class?
  lookup(): Promise<Id[]> {
    return Promise.resolve([])
  }

  yaml(): [string, string] {
    return ['', '']
  }
}

class GoodReads extends Id {
  key = 'goodreads'

  yaml() {
    return ['goodreads', this.value] as [string, string]
  }
}
class ISBN10 extends Id {
  key = 'isbn10'

  async lookup() {
    return (await Promise.all([isbnToOpenlibrary(this.value), isbnToGoodreads(this.value)])).flat()
  }

  yaml() {
    return ['isbn', this.value] as [string, string]
  }
}
class ISBN13 extends Id {
  key = 'isbn13'

  async lookup() {
    return (await Promise.all([isbnToOpenlibrary(this.value), isbnToGoodreads(this.value)])).flat()
  }

  yaml() {
    return ['isbn13', this.value] as [string, string]
  }
}
class LCCN extends Id {
  key = 'lccn'

  yaml() {
    return ['lccn', this.value] as [string, string]
  }
}
class OLID extends Id {
  key = 'olid'

  yaml() {
    return ['olid', this.value] as [string, string]
  }
}
class OCLC extends Id {
  key = 'oclc'

  yaml() {
    return ['oclc', this.value] as [string, string]
  }
}

export const Ids = {
  GoodReads,
  ISBN10,
  ISBN13,
  LCCN,
  OCLC,
  OLID,
}
