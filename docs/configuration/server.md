---
sidebar_position: 1
title: Server
---

Server behaviour is controlled via a configuration file, located by default at `/etc/vaxiin-server-config/config.yaml`.
You can override this location by exporting the `SERVER_CONFIG_PATH` environment variable.

The configuration file accepts the parameters below:

|            Key name                |                                    Description                                        | Default |
|:----------------------------------:|:-------------------------------------------------------------------------------------:|:-------:|
| host                               | Address to listen on                                                                  | 0.0.0.0 |
| port                               | Port to listen on                                                                     |    5000 |
| db_path                            | Path to the directory where the databse will be stored                                |   /db   |
| get_states                         | Should it automatically get screenshot and generate states for zombies                |  TRUE   |
| run_rules                          | Should it automatically run rules against matching states                             |  FALSE  |
| periodic_work_assignment_interval  | How often should we try and match open states to rules                                |     300 |
| get_zombie_screenshot_interval     | How often should we get a new screenshot for zombies                                  |     300 |
| retry_rule_interval                | How long after a rule has attempted recovery should we run it again                   |      60 |
| update_state_interval              | How long after a rule has attempted recovery should we get a new screenshot           |      60 |
| pending_work_interval              | After often should we check for stuck work                                            |      10 |
| pending_work_timeout               | After how long a work has been pending should we mark it as failed due to timeout     |      30 |
| become_zombie_interval             | How long since the last heartbeat should a device be marked as a zombie               |     120 |
| mark_zombie_interval               | How often should we check if a device should be marked as a zombie                    |      10 |
| check_work_interval                | How often should it poll the server for new work (in seconds)                         |       1 |
| max_parallel_work                  | How much assigned work can run in parallel                                            |       3 |
| pause_between_keys                 | How long to wait after pressing a special key (enter, esc ctrl+r, etc) (in seconds)   |       5 |
