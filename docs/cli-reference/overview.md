---
sidebar_position: 1
title: Overview
---

You control Vaxiin via a simple command-line interface (CLI), called `vaxctl`, which uses `$HOME/.vaxctl.yaml` for [configuration](../configuration/cli). It follows a familiar paradigm you might’ve met before:

```
vaxctl [command] [TYPE] [flags]
```

Where `command`, `TYPE` and `flags` are:
- `Command`: specifies the operation that you want to perform on one or more resources, for example `create`, `get`, `edit`, `delete`.
- `TYPE`: specifies the resource types. These are case insensitive.
- `flags`: have nothing to do with countries. Some are optional, some are mandatory. You use these to select something specific to interact with, increase verbosity, etc.

You can always add the `-h` flag to get some help, for example:
```
$ vaxctl -h
vaxctl is a CLI that allows creating/deleting/updating objects in the Rebooto vaxiin server

Usage:
  vaxctl [command]

Available Commands:
  apply       Create/Update a resource from file
  assign      Assign work
  completion  Generate completion script
  create      Create a resource from file
  delete      Delete a resource
  edit        Edit a resource
  generate    Generate a new resource template
  get         Display one or many resources
  help        Help about any command
  interactive Open interactive TUI
  set         Change state of a resource

Flags:
      --config string   config file (default is $HOME/.vaxctl.yaml)
  -h, --help            help for vaxctl

Use "vaxctl [command] --help" for more information about a command.
```
