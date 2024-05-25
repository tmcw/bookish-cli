import {Id, Ids} from './types.js'

/**
 * Guess the type of a book identifier
 *
 * Guessed types:
 *
 * DONE
 *
 * - openlibrary
 * - isbn 10
 * - isbn 13
 * - lccn
 *
 * TODO
 *
 * - goodreads
 *
 * Resources https://en.wikipedia.org/wiki/Library_of_Congress_Control_Number#Format
 *
 * @param id The book identifier
 * @returns an id
 */
export function guess(id: string): Id | null {
  // Dead-giveaway prefixes
  if (id.startsWith('OL')) return new Ids.OLID(id)

  const numbersOnly = id.replaceAll(/\D/g, '')

  if (numbersOnly.length === 12) {
    // Confirm Library of Congress format
    return new Ids.LCCN(id)
  }

  if (numbersOnly.length === 13) {
    // Confirm ISBN check digit
    return new Ids.ISBN13(id)
  }

  if (numbersOnly.length === 10) {
    let s = 0
    let t = 0
    for (const digit of numbersOnly) {
      t += Number.parseInt(digit, 10)
      s += t
    }

    if (s % 11 === 0) {
      return new Ids.ISBN10(id)
    }
  }

  return null
}
