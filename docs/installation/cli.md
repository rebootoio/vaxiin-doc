---
sidebar_position: 4
title: CLI
---

For you to use the Vaxiin CLI requires that you specify how it can reach the Vaxiin server.

We're assuming connections details will need to be tweaked, thus the instructions below explain how to run with a custom config.

### Custom configuration
Go to the [releases page](https://github.com/rebootoio/vaxctl/releases), download the latest binary and place it in a directory you have in your `PATH`

Download the sample configuration file locally
```
wget https://raw.githubusercontent.com/rebootoio/vaxctl/main/config-example.yaml -O $HOME/.vaxctl.yaml
```
Edit the file and change the `url` so that it will  point to your vaxiin server

Start using the cli
```
vaxctl -h
```
_Additional information about the available commands can be found in the [configuration section](../cli-reference/overview)._
