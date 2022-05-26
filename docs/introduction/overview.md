---
sidebar_position: 1
title: Overview
description: Vaxiin is an out-of-band automation framework allowing for remote state extraction, human and machine recovery emulation, and failure detection. In a nutshell, it keeps zombies at bay.
slug: /
---

### Why Vaxiin?

**Because [zombie servers](#wait-what-zombies) cost you money** - they take up **power, space** and **manual labor** to recover.
This manual labor is like "asking the chef to do the dishes" - not the best use of said chef's time.
Instead, we suggest [using a dishwasher](../introduction/use-cases#the-advanced).

And besides, you also:

- Want to **see what's on-screen via out-of-band... from your command line**.
- Want to **react to what's on-screen** without having to open a web interface.
- Don't want to deal with **out-of-band authentication across vendors**.
- Don't want to deal with **ipmitool semantics**.
- Don't wnat to deal with **recovering zombie servers**.

### Wait, what? Zombies?

**Zombies are servers** that are **reachable out-of-band** via their BMC (thus they’re alive), but have **no accessible OS** running (thus they’re dead). Which makes them “living dead servers”, aka “zombies”. By forcing you to manually recover them from this state, they feed on your brain power. How cunning of them.

To recover a zombie server you would typically have to connect to its out-of-band management, review what is on screen, and follow a recovery procedure.

This whole process is:
* Completely manual
* Utterly boring
* Frustrating especially when latency is high
* Costly if not handled
* Causes brain cell death

We can do better than that. Enter... Vaxiin!

### So what is Vaxiin?

**Vaxiin is an out-of-band automation framework** allowing for remote state extraction, human and machine recovery emulation, and failure detection. Each of these features can be used independently, but they really shine when combined to create an **autonamous zombie recovery machine**.

### So what can Vaxiin do for me?

Great question! Vaxiin lets you:
- [Get a screenshot from the CLI](../introduction/use-cases#get-a-screenshot-from-the-cli).
- [Abstract credentials away](../introduction/use-cases#abstract-credentials-away).
- [Run IPMI commands](../introduction/use-cases#run-ipmi-commands-without-the-million-flags-easily).
- ...and [make HTTP calls](../cli-reference/create#request).
- ...and [send keystrokes](../cli-reference/create#keystroke).
- ...and [input credentials](../cli-reference/create#action_data).
- ...even [automatically](../cli-reference/create#rule)!

Check out the [use cases](../introduction/use-cases) to learn more.

### And the name, Vaxiin?

You might think that the best thing to do with zombies is to kill them. But you can actually do better than that - you can bring them back to life. All you need is the right cure.

### Can I see a short demo?

Sure, here's a short demo of the following actions:
- get list of devices
- get the screenshot of a zombie device
- create a rule to automate zombie recovery

![Vaxiin demo](/img/vaxctl_usage_33.gif)

### Basic architecture of Vaxiin

There are 2 components to Vaxiin:
* **The Server** handles all API calls from agents and operators. You to interact with it through the [CLI](../cli-reference/overview). And yes, it can run [on your laptop](../getting-started/quick-start).
* **The Agent (optional)** runs on your servers while they’re alive. Its basic role is to send a simple ping to the Vaxiin server, as a form of a [dead man’s switch](https://en.wikipedia.org/wiki/Dead_man%27s_switch). You only need it when you want Vaxiin to automatically recover zombies in the background.

### Okay, I've heard enough - I want to try it

Great! Jump ahead to [the quick start guide](../getting-started/quick-start) to get up and running in a few minutes - you don't even need test hardware.
