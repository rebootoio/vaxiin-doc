---
sidebar_position: 3
title: Glossary
---

This section contains brief definitions of the terms used in Vaxiin.

### Device

*Hi, I’m Dave.*  
A host, which may, or may not, be a zombie. Currently, we support physical servers.
These are the first constructs that need to exist in the system, as everything ties back to them. If you’re doing GitOps, load these first.

### Screenshot

*I see you, Dave.*  
A screenshot of the device’s out-of-band video feed. This is what you’d see if you were to connect to the BMC via its web interface and open a remote video session.

### Creds

*The key to Dave’s heart.*  
Credentials used to access a device via its out-of-band interface. You can have several of these, with one set as default. If only one set of credentials exists, we’ll automatically set it as the default set.

### State

*Zombie type.*  
The host’s screenshot + its OCR output. Think of it as “the device’s current situation”. You can have multiple resolved states per device (think of them as "history"), but only a single unresolved one.

### Action

*Zombie cure.*  
An operation to perform against a device, meant to change its state. It could be a sequence of keys, a special key combo or calling a provisioning system prior to rebooting a device. It’s the stuff you’d have manually done to bring a zombie back to life.

### Rule

*Zombie type <-> Zombie cure.*  
The thing binding actions to a state. It’s the “when you see this kind of zombie, here’s how you cure it” instruction. Rules are evaluated in order, and the thing that triggers a rule is a regex match against a state.

### Work

*Go out and cure those zombies!*  
The act of assigning an to perform against a device. It could be obtaining a new state, attempting recovery via a specific rule or running the whole list of them by order.
