import {Args, Command, Flags} from '@oclif/core'
import {dump} from 'js-yaml'

import {guess} from '../../lib/guess.js'

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

    if (!type) {
      this.logToStderr('ID could not be automatically recognized')
      return this.exit(1)
    }

    this.logToStderr(`Detected type ${type.yaml()}`)

    const types = await type.lookup()

    const object = Object.fromEntries(types.map((t) => t.yaml()))

    this.log(dump(object))
  }
}
