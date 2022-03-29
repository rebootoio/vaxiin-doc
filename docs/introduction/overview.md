---
sidebar_position: 1
title: Overview
description: Vaxiin is an out-of-band automation framework allowing for remote state extraction, human and machine recovery emulation, and failure detection. In a nutshell, it helps you handle zombies.
slug: /
---

### Why Vaxiin?

**Vaxiin solves the “No OS recovery” problem**, where the server fails to boot into the OS or lacks in-band networking capabilities. To recover a system from this state, you would typically have to connect to its out-of-band management, review what is displayed on screen, and follow a recovery procedure.

This whole process is:
* Completely manual
* Utterly boring
* Frustrating especially when latency is high
* Costly if not handled
* Causes brain cell death

We can do better than that. Enter... Vaxiin!

### What is Vaxiin?

**Vaxiin is an out-of-band automation framework** allowing for remote state extraction, human and machine recovery emulation, and failure detection. Each of these features can be used independently, but they really shine when combined to create an **autonamous zombie recovery machine**.

### Wait, what? Zombies?

**Zombies are servers** that are reachable out-of-band via their BMC (thus they’re alive), but have no accessible OS running (thus they’re dead). Which makes them “living dead servers”, aka “zombies”. By forcing you to manually recover them from this state, they feed on your brain power. How cunning of them.

### Basic architecture of Vaxiin

There are 3 components to Vaxiin:
* **The Agent** runs on your servers while they’re alive. Its basic role is to send a simple ping to the Vaxiin server, as a form of a [dead man’s switch](https://en.wikipedia.org/wiki/Dead_man%27s_switch). It’s what allows Vaxiin to run a fully automated zombie recovery process.
* **The Handler** performs the heavy lifting job of interacting with zombies to check their status and attempt recovery. It’s the part one would typically scale out to parallelize the process of diagnostics & recovery.
* **The Server** handles all API calls from agents, handlers and human operators. But you don’t need to interact with it directly - that’s what the CLI is there for.

### And the name, Vaxiin?

You might think that the best thing to do with zombies is to kill them. But you can actually do better than that - you can bring them back to life. All you need is the right cure.

### Okay, I've heard enough - I want to try it

You can jump ahead to [quick start guide](../getting-started/quick-start) to get up and running in a few minutes.
