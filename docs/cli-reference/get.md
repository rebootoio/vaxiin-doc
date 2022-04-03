---
sidebar_position: 4
title: Get
---

GET information about resources stored in the system. In its default mode, GET will list all resources of a specific type. You can get more detailed information by switching the output format to yaml or json via the `-o` flag.

### ACTION

GET the list of actions that can be assigned to be performed against a device.

```
$ vaxctl get action
  NAME (8)               TYPE         DATA
  screenshot             screenshot   screenshot
  ctrl alt delete        keystroke    Keys.Control+Keys.Alt+Keys.Delete
  ipmi lan print         ipmitool     lan print
  logout                 keystroke    Keys.Control+c;exit;Keys.Enter
  power status           power        status
  Press F1               keystroke    Keys.F1
  Press F2               keystroke    Keys.F2
  sleep for 10 seconds   sleep        10
```

### DEVICE

GET the list of devices registered in the system and their metadata.

```
$ vaxctl get device
  UID        IPMI IP      CREDS NAME   MODEL   ZOMBIE
  test_dev   10.1.1.2                  idrac9  No
```

### CRED

GET the list of credentials registered in the system for out-of-band connections.

```
$ vaxctl get cred
  NAME       USERNAME   PASSWORD     DEFAULT
  oob123     admin      **********   Yes
```

### STATE

GET the list of states the system has encountered. You can filter this list by type (`open`, `resolved`, `unknown`), device id and regex (to be matched against the state contents). This too can be output to yaml or json, with the state base64 encoded in its respective field.
:::info
If you don’t specify any filters, you’ll get everything. It can be a lot.
:::

```
$ vaxctl get state
  ID   OCR TEXT                                                 DEVICE     RESOLVED   MATCHED RULE   LAST MODIFIED                CREATED AT
  1    [75665 5639751 hid-generic 6663:413C :6888.6828:         test_dev   No                        2022-03-08T10:15:37.556823   2022-03-08T10:15:37.556844
       input,hidrawi: USB HID v1.81 Keyboard [DELLEMC DRAC...
```

### RULE

GET the list of rules associating states with actions.

```
$ vaxctl get rule
  NAME             STATE ID   REGEX                 ACTIONS              IGNORE CASE   ENABLED   POSITION
  Waiting for F1   1          Press F1 to cont      Press F1             No            Yes       1
  Reboot on panic  2          Kernel panic.*VFS     power cycle          No            Yes       2
  fsck             3          run fsck manually     pw, fsck, s_boot     Yes           Yes       3
```

### SCREENSHOT
GET the screenshot stored inside a state by converting it to a PNG file. This will essentially base64 decode the screenshot string and store it to a file on the local filesystem. You can then use a local image viewer to view the resulting image.

### WORK
GET the list of work items pending execution by the server, or that have already completed.

```
$ vaxctl get work
  ID (3)    STATE ID   DEVICE     TRIGGER                          ASSIGNED AT                  STATUS
  1         0          leaseweb   Manual - Actions: power status   2022-03-07T14:56:35.688333   success
  2         1          leaseweb   Rule - hello world               2022-03-07T15:09:18.690881   success
  3         0          leaseweb   Manual - Rule: hello world       2022-03-07T15:09:41.685500   success
```
