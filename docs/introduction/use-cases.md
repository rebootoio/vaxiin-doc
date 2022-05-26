---
sidebar_position: 2
title: Use Cases
---

## The Basics

First and foremost, Vaxiin is meant to simplify interaction with out-of-band management systems. To do so, it covers a few basic use cases.

### Get a screenshot... from the CLI

Instead of having to:
- Open a browser
- Find & input to the out-of-band IP
- Authenticate
- Navigate to "Remote KVM" & open it

You would do this to get the screenshot:
```
$ vaxctl assign work -d device_name -a screenshot
```
And this to view it:
```
$ vaxctl get screenshot -d device_name
```

### Abstract credentials away

The time has come to cycle out-of-band credentials. You run your automation across all devices and call it a day.
A few weeks later, you try to logon via out-of-band, but the new creds don't work. You try the old ones, but they don't work either.
It must be the set you used in the past... what were they?

Vaxiin makes this headache go away. It keeps credentials in a central store:
```
$ vaxctl get cred
  NAME        USERNAME   PASSWORD                    DEFAULT
  idrac gen3  root       *************************   Yes
  idrac gen4  root       *************************   No
  ilo gen4    Admin      *************************   No
```
And lets you assign which credentials it uses with the device:
```
$ vaxctl get device
  UID            IPMI IP     CREDS NAME   MODEL   ZOMBIE   METADATA   AGENT VERSION   LAST HEARTBEAT
  device1        10.0.0.11   default      idrac9  No
  device2        10.0.0.12   idrac gen4   idrac9  No
  device3        10.0.0.13   ilo gen4     ilo5    No
```

### Run IPMI commands, without the million flags

You just want to reboot it. Really, that's all. But did you remember to escape special characters in the password? or use the lan instead of lanplus interface?

Vaxiin makes this complexity go away. Create the commands once, and use them whenever you like with the stored creds, regardless of make & model:
```
$ vaxctl get action -n "power reset"
  NAME           TYPE    DATA
  power reset    power   reset
$ vaxctl assign work -d device_name -a "power reset"
```

### All of the above... centralised

Running all of these on your laptop is nice. But having them all on a centralised server? even better!
With Vaxiin, everyone on your team can share IPMI, HTTP and keystroke actions. And switching to new creds on servers becomes a breeze, even when there are stragglers.

## The Advanced

Combining all of the basic use cases with Vaxiin's regex matching capabilities, and the agent's dead-man-switch gives us... **an automated way to recover zombies**. But what *exactly* do we mean by that? lets review a few high level use cases.

### Secure boot

You set a boot password for your secure server. And a drive password too. The server rebooted and now you have to enter the passwords manually. If only you could do this automatically over out-of-band... the server wouldn't be eating your brains.

### Press F1 to continue

It rebooted. But for some reason it won’t go back to the OS till you “press F1, F2, F12 or Ctrl-Alt-Shift-Z”. Maybe the RAID battery is low. Maybe there’s some super important warning message you just have to see before booting. Or maybe it wants to eat your brains.

### Lets hangout in the BIOS

It rebooted. But then went into the BIOS. Maybe someone sent it there on purpose. Maybe it was a mistake. Or maybe it wants to eat your brains.

### No boot device found

It rebooted. But instead of PXE booting, it tried to boot from a local device and failed. Maybe someone set the wrong boot order. Maybe it’s the first time it’s booting. And maybe it just wants to eat your brains.

### Provisioning failure

It rebooted. And it even started a provisioning process, like it was supposed to. But something went wrong. Maybe it couldn’t resolve the provisioning server because of a DNS hiccup. Maybe it couldn’t pull packages because the repo is overloaded. Or maybe… brains.

### fsck it all

It rebooted. And the OS was coming up. But then it just had to run fsck on the root filesystem before bringing the network up. Maybe it hit a preset limit of mounts. Maybe it went through a cold reset mid-operation. Hmm… brains anyone?

### The BSOD

You’re running Windows. It blue screens. Brains.  
It could just as well be a Linux kernel panic. Brains #2.

### Factory pre-loaded settings

You bought new servers. You sent the settings you’d like the factory to preload well in advance. They did, but then there’s that new setting in that new firmware which disabled the network card. And now your brains hurt.

### A nice RAID UI

You wanted to set up RAID using this nice handy UI they provide after POST. But then you discover the mouse cursor has this diagonal offset… and it doesn’t click where it’s supposed to. So you find yourself using tabs to navigate. So much for your brains.

**Got any more use cases worth mentioning? [Let us know!](https://discord.gg/aEJ6qwcCGs)**
