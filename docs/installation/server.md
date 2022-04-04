---
sidebar_position: 2
title: Server
---

### Default Configuration

To run the server with default configuration and the **database in the current directory**:
```
docker run -d -v $(pwd):/db rebooto/vaxiin-server
```
:::tip
The default configuration will have the server collecting zombie screenshots, but no rules will run to attempt recovery.
You can manually perform recovery using [`vaxctl assign`](../cli-reference/assign) or enable automatic recovery via
the [`run_rules`](../configuration/server) configuration parameter.
:::

### Custom configuration

Download the sample configuration file locally
```
wget https://raw.githubusercontent.com/rebootoio/vaxiin-server/main/config-example.yaml -O config.yaml
```
Edit the file, change configuration if needed and run the server
```
docker run -d -v $(pwd):/db -v $(pwd)/config.yaml:/etc/vaxiin-server-config/config.yaml rebooto/vaxiin-server
```
_Additional information about the available configuration can be found in the [configuration section](../configuration/server)._
