# bookish-cli

Look up book identifiers

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bookish-cli.svg)](https://npmjs.org/package/bookish-cli)
[![Downloads/week](https://img.shields.io/npm/dw/bookish-cli.svg)](https://npmjs.org/package/bookish-cli)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g bookish-cli
$ bookish COMMAND
running command...
$ bookish (--version)
bookish-cli/0.0.0 darwin-arm64 node-v20.11.0
$ bookish --help [COMMAND]
USAGE
  $ bookish COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`bookish hello PERSON`](#bookish-hello-person)
- [`bookish hello world`](#bookish-hello-world)
- [`bookish help [COMMAND]`](#bookish-help-command)
- [`bookish plugins`](#bookish-plugins)
- [`bookish plugins add PLUGIN`](#bookish-plugins-add-plugin)
- [`bookish plugins:inspect PLUGIN...`](#bookish-pluginsinspect-plugin)
- [`bookish plugins install PLUGIN`](#bookish-plugins-install-plugin)
- [`bookish plugins link PATH`](#bookish-plugins-link-path)
- [`bookish plugins remove [PLUGIN]`](#bookish-plugins-remove-plugin)
- [`bookish plugins reset`](#bookish-plugins-reset)
- [`bookish plugins uninstall [PLUGIN]`](#bookish-plugins-uninstall-plugin)
- [`bookish plugins unlink [PLUGIN]`](#bookish-plugins-unlink-plugin)
- [`bookish plugins update`](#bookish-plugins-update)

## `bookish hello PERSON`

Say hello

```
USAGE
  $ bookish hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ bookish hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/tmcw/bookish-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `bookish hello world`

Say hello world

```
USAGE
  $ bookish hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bookish hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/tmcw/bookish-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `bookish help [COMMAND]`

Display help for bookish.

```
USAGE
  $ bookish help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bookish.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `bookish plugins`

List installed plugins.

```
USAGE
  $ bookish plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bookish plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/index.ts)_

## `bookish plugins add PLUGIN`

Installs a plugin into bookish.

```
USAGE
  $ bookish plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bookish.

  Uses bundled npm executable to install plugins into /Users/tmcw/.local/share/bookish

  Installation of a user-installed plugin will override a core plugin.

  Use the BOOKISH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOOKISH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bookish plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bookish plugins add myplugin

  Install a plugin from a github url.

    $ bookish plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bookish plugins add someuser/someplugin
```

## `bookish plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bookish plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bookish plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/inspect.ts)_

## `bookish plugins install PLUGIN`

Installs a plugin into bookish.

```
USAGE
  $ bookish plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bookish.

  Uses bundled npm executable to install plugins into /Users/tmcw/.local/share/bookish

  Installation of a user-installed plugin will override a core plugin.

  Use the BOOKISH_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOOKISH_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bookish plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bookish plugins install myplugin

  Install a plugin from a github url.

    $ bookish plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bookish plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/install.ts)_

## `bookish plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ bookish plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bookish plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/link.ts)_

## `bookish plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bookish plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bookish plugins unlink
  $ bookish plugins remove

EXAMPLES
  $ bookish plugins remove myplugin
```

## `bookish plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bookish plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/reset.ts)_

## `bookish plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bookish plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bookish plugins unlink
  $ bookish plugins remove

EXAMPLES
  $ bookish plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/uninstall.ts)_

## `bookish plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bookish plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bookish plugins unlink
  $ bookish plugins remove

EXAMPLES
  $ bookish plugins unlink myplugin
```

## `bookish plugins update`

Update installed plugins.

```
USAGE
  $ bookish plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.19/src/commands/plugins/update.ts)_

<!-- commandsstop -->
