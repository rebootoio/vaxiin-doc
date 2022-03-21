---
sidebar_position: 3
title: Handler
---

For you to get the Vaxiin handler up and running requires that you specify how it can reach the Vaxiin server.

We're assuming connections details will need to be tweaked, thus the instructions below explain how to run with a custom config.

### Custom configuration
Download the sample configuration file locally
```
wget https://raw.githubusercontent.com/rebootoio/vaxiin-handler/main/config-example.yaml -O config.yaml
```
Edit the file, change the `vaxiin_server_host` and `vaxiin_server_port` if needed and run the handler
```
docker run -d -v $(pwd)/config.yaml:/etc/vaxiin-handler-config/config.yaml rebooto/vaxiin-handler
```
_Additional information about the available configuration can be found in the [configuration section](../configuration/handler)._
