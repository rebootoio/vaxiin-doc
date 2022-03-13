---
sidebar_position: 2
title: Handler
---

Handler behaviour is controlled via a configuration file, located by default at `/etc/vaxiin-handler-config/config.yaml`.
You can override this location by exporting the `HANDLER_CONFIG_PATH` environment variable.

The configuration file accepts the parameters below:

|       Key name      |                                      Description                                      |  Default  |
|:-------------------:|:-------------------------------------------------------------------------------------:|:---------:|
| server_host         | The vaxiin server host                                                                | localhost |
| server_port         | The vaxiin server port                                                                |      5000 |
| check_work_interval | How often should it poll the server for new work (in seconds)                         |         1 |
| max_parallel_work   | How many parallel work can the handler take                                           |         3 |
| pause_between_keys  | How long to wait after pressing a special key (enter, esc, ctrl+r, etc') (in seconds) |         5 |
