import {Args, Command, Flags} from '@oclif/core'

import {isbnToGoodreads} from '../../lib/goodreads.js'
import {guess} from '../../lib/guess.js'
import {isbnToOpenlibrary} from '../../lib/openlibrary.js'
import {IdType} from '../../lib/types.js'

export default class Lookup extends Command {
  static args = {
    id: Args.string({description: 'Identifier', required: true}),
  }

  static description = 'Look up a book identifier'

  static examples = [
    `<%= config.bin %> <%= command.id %> friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    type: Flags.string({char: 't', description: 'Type of identifier', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Lookup)

    const type = guess(args.id)

    if (type === IdType.ISBN) {
      this.log(`isbn: ${args.id}`)
      const goodreads = await isbnToGoodreads(args.id)
      this.log(`goodreads: ${goodreads}`)

      const ol = await isbnToOpenlibrary(args.id)
      this.log(`olid: ${ol?.openlibrary}`)
    }
  }
}
