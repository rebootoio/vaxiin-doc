---
sidebar_position: 1
title: Server
---

Server behaviour is controlled via a configuration file, located by default at `/etc/vaxiin-server-config/config.yaml`.
You can override this location by exporting the `SERVER_CONFIG_PATH` environment variable.

The configuration file accepts the parameters below:

|            Key name                |                                    Description                                        | Default |
|:----------------------------------:|:-------------------------------------------------------------------------------------:|:-------:|
| host                               | IP address server listens on                                                          | 0.0.0.0 |
| port                               | TCP port server listens on                                                            |    5000 |
| db_path                            | Path to directory storing the database file                                           |   /db   |
| get_states                         | Enable automatic screenshot collection and state generation for zombies               |  TRUE   |
| run_rules                          | Enable automatic execution of rules and contained actions against matching states     |  FALSE  |
| periodic_work_assignment_interval  | Interval for matching open states to rules (minutes)                                  |     300 |
| get_zombie_screenshot_interval     | Interval for obtaining new screenshots for zombies (minutes)                          |     300 |
| retry_rule_interval                | Interval for retrying a rule following a previous run (minutes)                       |      60 |
| update_state_interval              | Interval for obtaining a screenshot following an attempted recovery (minutes)         |      60 |
| pending_work_interval              | Interval for checking work status (minutes)                                           |      10 |
| pending_work_timeout               | Threshold interval between work assignment and marking it as timed out (minutes)      |      30 |
| become_zombie_interval             | Threshold interval between last heartbeat and marking device as a zombie (minutes)    |     120 |
| mark_zombie_interval               | Interval for sweeping all devices with a registered heartbeat for zombies (minutes)   |      10 |
| check_work_interval                | Interval between checks for new work (seconds)                                        |       1 |
| max_parallel_work                  | Number of parallel work execution threads                                             |       3 |
| pause_between_keys                 | Pause interval between pressing of keys (does not apply to strings) (seconds)         |       5 |
