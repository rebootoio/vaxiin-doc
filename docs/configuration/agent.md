---
sidebar_position: 2
title: Agent
---

Agent behaviour is controlled via a configuration file, located by default at `/etc/vaxiin-agent-config/config.yaml`.
You can override this location by exporting the `AGENT_CONFIG_PATH` environment variable.

The configuration file accepts the parameters below:

|      Key name      |                 Description                 |          Default          |
|:------------------:|:-------------------------------------------:|:-------------------------:|
| host               | Address to listen on                        | 127.0.0.1                 |
| port               | Port to listen on                           |                      4000 |
| vaxiin_server_url  | Location of server                          | http://vaxiin-server:5000 |
| heartbeat_interval | Interval for sending heartbeat (in minutes) |                        60 |
| uid                | Device unique identifier **(Mandatory)**    |                           |
| ipmi_ip            | Device IPMI ip **(Mandatory)**              |                           |
| model              | Device OOB model **(Mandatory)**            |                           |
| creds_name         | OOB credentials name to use                 | default                   |

:::tip
Note that you must, at minimum, specify the following configuration parameters:
- uid
- ipmi_ip
- model
:::
