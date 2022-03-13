---
sidebar_position: 2
title: Walkthrough
---

In this section we’ll walk you through a full process of creating a device, getting its state, creating an action, running it and connecting all of the pieces through a rule.
This should give you a solid feel of what Vaxiin can do for you. We’re assuming you already have a [Vaxiin environment up and running](../installation/server).

### Create a workspace
```
mkdir vaxiin-data
cd vaxiin-data
mkdir cred device action rule state
```

### Add default credentials

```
vaxctl generate cred > cred/default.yaml
```
Edit `cred/default.yaml` and add out-of-band credentials
```
vaxctl apply cred -f cred/default.yaml
vaxctl get cred
```

### Add a device

```
vaxctl generate device -m > device/test_device.yaml
```
Edit `device/test_device.yaml` adding the device's IPMI IP and the following:
```
uid: test_device
model: idrac9
```
Then proceed to:
```
vaxctl apply device -f device/test_device.yaml
vaxctl get device
```

### Get the device’s state

```
vaxctl assign work -d test_device -a screenshot
vaxctl get work
sleep 70
vaxctl get work
```

### View the device’s state

```
vaxctl get state
vaxctl get state -v
vaxctl get screenshot -d test_device -f /tmp/test_device.png
```
On Mac:
```
open /tmp/test_device.png
```
On Linux:
```
display /tmp/test_device.png
```

### Create an action (interactive)

```
vaxctl create action -i
```
- Choose **power** and press *Enter*
- Scroll down to **Data** and press *Enter*
- Choose **status** and press *Enter*
- Scroll up to **Name** and press *Enter*
- Input **power status** and press *Enter*
- Press *shift-1* to switch to the **Action Actions** window
- Scroll down to **Save To File** and press *Enter*
- Input `action/power_status.yaml` and press *Enter*
- Scroll down to **Save To Server** and press *Enter*
- Press *q* to quit interactive mode

### Run the action

```
vaxctl assign work -d test_device -a "power status"
vaxctl get work -v
```

### Create a rule (interactive)

```
vaxctl create rule -i 1
```
- Input a regex matching the displayed state (eg, `.*`) and press *Enter*
- Scroll down to **Actions** and press *Enter*
- Scroll down to **power status**, press *Space* and then *Enter*
- Scroll up to **Name** and press *Enter*
- Input `hello world` and press *Enter*
- Press *shift-tab* to switch to the **Rule Actions** window
- Scroll down to **Save To File** and press *Enter*
- Input `rule/hello_world.yaml` and press *Enter*
- Scroll down to **Save to Server** and press *Enter*
- Press *q* to quit interactive mode
```
vaxctl get rule
```

### Run the rule

```
vaxctl assign work -d test_device -r "hello world"
vaxctl get work -v
```

### Disable the rule

Edit `rule/hello_world.yaml` and set:
```
enabled: false
```
Then proceed to:
```
vaxctl apply rule -f rule/hello_world.yaml
vaxctl get rule
```

### Summary & next steps
**Congratulations!** You’ve completed the Vaxiin walkthrough and you’re now officially a zombie healer. Go ahead and explore the additional action types to start constructing your own rules.
