---
sidebar_position: 3
title: Agent
---

For you to get the Vaxiin agent up and running requires that you specify some basic information about the device its running on.
We use this information to register the device with the Vaxiin server and figure out how to connect to its [out-of-band controller](../faq#what-models-do-you-support).

As registration information needs to be explicit at this time, the instructions below explain how to run with a custom config.

### Custom configuration
Download the sample configuration file locally
```
wget https://raw.githubusercontent.com/rebootoio/vaxiin-agent/main/config-example.yaml -O config.yaml
```
Edit the file, change the `vaxiin_server_url` (if needed), add values for (`uid`, `ipmi_ip`, `model`) and run the agent
```
docker run -d -v $(pwd)/config.yaml:/etc/vaxiin-agent-config/config.yaml rebooto/vaxiin-agent
```
_Additional information about the available configuration can be found in the [configuration section](../configuration/agent)._

