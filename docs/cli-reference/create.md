---
sidebar_position: 3
title: Create
---

CREATE resources using input files or interactive mode.

## ACTION

Create an action that can be assigned to be performed against a device.
The available action types are:

- ### keystroke
  Sends one or more keystrokes to a device. There are two types of keystrokes:

  - #### string
    Nn ascii string. You can use this to input a username or pass a parameter into a text field. Note that it doesn’t send a newline following the string - you need to use a special key for that (see [key combo](#key-combo)).

  - #### key combo
    One or more special keys, along with an optional single character. You can use this to navigate via cursor keys, press *Enter*, and send special key combinations such as *ctrl-c*.
    The key format follows the [Selenium](https://www.selenium.dev/) convention: `Keys.<key_type>` and can be combined using the `+` (plus) character. For example, to send a *ctrl-c*, you would input `Keys.Control+c`. The list of possible keys is available [here](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html) and also by issuing the following command:
  
    ```html
    $ vaxctl create action -I -v
    ┌──────────────────┬──────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ Action Type:     │ sleep                                                                                                │
    │ String Value:    │ number of seconds to sleep                                                                           │
    │ Additional Data: │ only digits are allowed                                                                              │
    │ Example:         │ 10                                                                                                   │
    ├──────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ Action Type:     │ power                                                                                                │
    │ String Value:    │ power action to send via ipmitool                                                                    │
    │ Additional Data: │ one of: [on, off, reset, graceful, status]                                                           │
    │ Example:         │ on                                                                                                   │
    ├──────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ Action Type:     │ ipmitool                                                                                             │
    │ String Value:    │ free text                                                                                            │
    │ Additional Data: │ will be appended to ipmitool command                                                                 │
    │ Example:         │ lan print                                                                                            │
    ├──────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │ Action Type:     │ keystroke                                                                                            │
    │ String Value:    │ a ';' seperated list of key combos                                                                   │
    │ Additional Data: │ A list of key combos (either a string to send or multiple keys to be pressed at once):               │
    │                  │  - string: the string as it should be entered (each key will be pressed in sequence)                 │
    │                  │  - multiple keys: seperated by '+' (special keys can be used by prepending 'Keys.' to the key name)  │
    │                  │ List of special keys:                                                                                │
    <!-- highlight-start -->
    │                  │ [ADD, ALT, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, BACKSPACE, BACK_SPACE, CANCEL, CLEAR, COMM │
    │                  │ AND, CONTROL, DECIMAL, DELETE, DIVIDE, DOWN, END, ENTER, EQUALS, ESCAPE, F1, F10, F11, F12, F2, F3,  │
    │                  │ F4, F5, F6, F7, F8, F9, HELP, HOME, INSERT, LEFT, LEFT_ALT, LEFT_CONTROL, LEFT_SHIFT, META, MULTIPLY │
    │                  │ , NULL, NUMPAD0, NUMPAD1, NUMPAD2, NUMPAD3, NUMPAD4, NUMPAD5, NUMPAD6, NUMPAD7, NUMPAD8, NUMPAD9, PA │
    │                  │ GE_DOWN, PAGE_UP, PAUSE, RETURN, RIGHT, SEMICOLON, SEPARATOR, SHIFT, SPACE, SUBTRACT, TAB, UP]       │
    <!-- highlight-end -->
    │ Example:         │ Keys.Control+c;exit;Keys.Enter                                                                       │
    └──────────────────┴──────────────────────────────────────────────────────────────────────────────────────────────────────┘
    ```
  
  You can mix and chain multiple keystrokes together inside an action by separating them using the `;` (semicolon) character. For example, you can use the following action yaml to logout of a Linux system by sending these keystrokes:
  - ctrl-c
  - exit
  - enter

  ```
  name: logout
  action_type: keystroke
  action_data: Keys.Control+c;exit;Keys.Enter
  ```

- ### ipmitool
  Uses [ipmitool](https://github.com/ipmitool/ipmitool) to interact with the device. This one is just a wrapper around ipmitool - you can input whatever ipmitool commands you want and Vaxiin will handle credentials for you. For example, you could use the following yaml to get LAN information from the device’s BMC:

  ```
  name: ipmi lan print
  action_type: ipmitool
  action_data: lan print
  ```

- ### power
  A wrapper around [ipmitool](https://github.com/ipmitool/ipmitool) for power commands. You can use this to power on, off, restart and cycle a system. It’s a handy shortcut.

  ```
  name: power status
  action_type: power
  action_data: status
  ```

- ### sleep
  Sleeps for an N amount of seconds. You use this to wait while stuff happens.

  ```
  name: sleep for 10 seconds
  action_type: sleep
  action_data: 10
  ```

- ### request
  Send an HTTP GET request. You can use this to interact with other systems (ex. trigger a jenkins job)

  ```
  name: trigger jenkins cleanup job
  action_type: request
  action_data: http://myjenkins:8080/job/My-Clenaup-Job/buildWithParameters?UID={device::uid}&token=iFBDOBhNhaxL4T9ass93HRXun2JF161Z
  ```

The action_data value can include attributes that will populated according to the device the action is running on.

The synatx is `{BASE_KEY::NESTED_KEY}`. Available attributes:

| BASE KEY | NESTED KEY | DEFINED BY | DESCRIPTION                                            | USAGE               |
|----------|------------|------------|--------------------------------------------------------|---------------------|
| device   | uid        | System     | the device's UID                                       | {device::uid}       |
| device   | ipmi_ip    | System     | the device's ipmi IP                                   | {device::ipmi_ip}   |
| device   | model      | System     | the device's model                                     | {device::model}     |
| cred     | username   | System     | the device's cred username                             | {cred::username}    |
| cred     | password   | System     | the device's cred password                             | {cred::password}    |
| metadata | *          | User       | the value of the nested key from the device's metadata | {metadata::ANY_KEY} |


## DEVICE
CREATE a device from a yaml file. Empty, self-documenting yaml files can be created using the [GENERATE](generate) command. Note that the first time a Vaxiin agent contacts the Vaxiin server, it will initiate device creation. So you’d only `CREATE DEVICE` for devices which aren’t running the agent. If you’re wondering about out-of-band credentials, these are created via [CREATE CRED](#cred) and then explicitly specified during device creation, either via agent config or in the device's yaml, as per this example:

```python
uid: test_device
ipmi_ip: 10.1.1.2
model: idrac9
zombie: false
metadata:
  fqdn: test-device.rebooto.io
# highlight-next-line
creds_name: new_oob_creds
```

If you'd like to have the device switch back to the 'default' creds, follow the example in [APPLY DEVICE](apply#device).

## CRED
CREATE a set of credentials for connecting to an out-of-band device from a yaml file. Empty, self-documenting yaml files can be created using the [GENERATE](generate) command. You can have multiple sets of credentials. One of these credentials must be defined as the ‘default’ set. If there’s only one set defined, we’ll mark it as ‘default’ automatically. If you’d like to mark another set of credentials as ‘default’, check out [SET CRED](set#cred).
:::info
You cannot use `default` as the name for your credentials, as its a reserved keyword.
:::

## STATE
CREATE a state from a yaml file. Empty, self-documenting yaml files can be created using the [GENERATE](generate) command.

## RULE
CREATE a rule from a yaml file or via interactive mode. Empty, self-documenting yaml files can be created using the [GENERATE](generate) command. You can set rules as disabled by setting the `enabled` parameter to `false`. You can also chain multiple actions inside a rule, separating them via `,` (colon) character. So you could do something like `reset provisioning state, change boot device, reboot`, as per the yaml example below. As these are actually an array, when using json format, you'd specify `[action1, action2, action3]`.

```
name: reset provisioning
state_id: 1
regex: [Pp]rovision.*fail.*
actions:
  - reset provisioning state
  - change boot device
  - reboot
enabled: true
```

