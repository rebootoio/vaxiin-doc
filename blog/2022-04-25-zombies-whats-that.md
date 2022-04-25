---
title: Out-of-band management? YES! but...
description: Out-of-band management beyond a few servers - pains... and a computer-vision based cure.
slug: oob-pains-and-cure
authors: balex
hide_table_of_contents: false
---

Out-of-band management is an absolute must for anything beyond a tiny environment. But as your operation scales,
out-of-band management brings its own set of unique pains. In this post we'll take a hard look at what happens
when out-of-band management meets scale... and then introduce a new approach.

<!--truncate-->

### But we've always done it this way

"Are you at the office?" The message came in just as I was sitting down for dinner with my family.
It was one of the founders at a startup next door to ours. "No, sorry... but what's up?" I inquired.
"One of our bare metal servers froze, I was hoping you could reboot it."

We then went into a short back and forth about IPMI, which ended up with a "thanks, guess I'll just head down there."

Oh well, that's just life, right?

It's fairly easy to see the value proposition of having out-of-band management for a server. Remote power control,
serial-over-LAN and KVM access, changing the boot device - all of the stuff you'd like to have in place when things
aren't going "according to plan". If you're far from the servers your manage, this could be the difference between
getting a system up and running in minutes, to having the system down for days. In fact, OOB management has become
a standard on servers for the past 20+ years. We're so used to it, that besides improved APIs (Redfish), not much
has changed on this front, nor have our expectations grown.

And yet, when you manage a large fleet of servers, sometimes it feels like there's something missing. Sure, the tools
to manage a single server are there, and you could put in some effort and script mass reboots if needed. But then
there are these "annoying edge cases" where you actually need to **connect to a server's KVM** and see what's going
on. And then **interact with it, or some third party system**, to bring the server back online.

### So what's the problem, really?

Connecting to a server remotely and recovering it is part of the job. And if it's "just a server or two a month",
the pain might seem negligble. But when this happens at scale, things can escalate quickly. Lets take a look:

#### Interaction is manual
When a server stops responding to pings unexpectedly, you probably want to know what went wrong. Since in-band
connections aren't an option, you connect out-of-band to check out the console and see what's up. Then, based
on what you find, you decide how to recover the host. A few example of such cases are:
- fsck
- kernel panic / BSOD
- boot from the wrong device
- error in POST requiring user input

This takes time and effort. It might be something you're familiar with, in which case it's just you and the server
and network latency. If it's something new, you need to investigate before you get to the recovery part. Either way,
you're not using this time to Build, but to Repair. Manually. Per. Each. Server.

#### Infrastructure as cod--... oh wait
So lets say you recovered the host. Great! now you can move on to other, more interesting things. The thing is, this
issue you just addressed? that's a one-off. Not a problem when it's one server every once in a while. But will you
remember the recovery procedure next time? what about the new guy who just onboarded? and what if it involves
changing state in a 3rd party system, such as provisioning, inventory or accounting? how do you even tie the server
state to the automation you created to recover it? given the choice, you probably wouldn't accept manual recovery
in other parts of your infra. But hey, that's just a limitation of bare metal, right?

#### There's more than one vendor and hardware generation
Standards simplify things a lot. IPMI, and now Redfish, give us a unified way of controlling a server out-of-band for
power control, setting a boot device and getting some sensor readings. What they don't cover, though, is remote KVM.
That's where every vendor rolls out their own web-based solution. Which also changes with every new generation of
server hardware. Dell's iDrac is quite different from HPE's ILO. And iDrac 9 differs from iDrac 8. Not to mention
small annoyances like default usernames differing across vendors and general Secret Sprawl.

#### The compounding effect
Each of those problems might seem like a small annoyance on its own. Definitely not something you couldn't handle in
a small to medium environment. But these problems also compound. Signing into 3 different remote management interfaces
to manually run a failed provisioning recovery due to some transient issue with the provisioning system is more
than just annoying. The time investment needed from you is disproportional to the immediate gains. Which makes this a
perfect candidate for being checked off as an "I'll deal with it later" kind of task. You can probably see where this
approach would lead in large-scale environments.

### There's a better way
We experienced all of these pains ourselves while managing server fleets small and large. But when entrusted with a
fleet numbering in the thousands, we found the compounding effect to be overwhelming. So we came up with a better,
simpler way of doing things, rooted deeply in the world of infrastructure management:

*Instead of having people handle boring, well-defined, repetitive tasks, we let computers handle them.*

Enter... **Vaxiin - a framework for automating out-of-band recovery**.

The concept is quite simple:

- create an abstraction layer of out-of-band connectors
- create an abstraction layer of human actions
- get the out-of-band server state and make it machine readable
- react to the state using the appropriate set of actions

The glue that ties it all together is a thin layer of computer vision. It allows matching the server's state
against a simple regex.

With Vaxiin, out-of-band recovery becomes:
- **Automated**  
  You go through the process of manual recovery once, and feed it into the system. From hereon, Vaxiin can run the
  recovery tools whenever you tell it to or automatically in the background.
- **Codified**  
  Vaxiin is built with GitOps in mind. This means that whatever you feed into the system can co-exist inside of a
  Git respository, and go through typical CI pipelines, ensuring Git is your source of truth.
- **Vendor agnostic**  
  Your recovery flows work unmodified across multiple vendors and hardware generations. We also make sure you can
  use different sets of credentials seamlessly.

There are a few examples you can walk through in the [Vaxiin Sandbox](https://github.com/rebootoio/vaxiin-sandbox)
repo, to give you a feel of the system, so be sure to check those out.

### Roadmap
For its 0.1 release, we wanted to ensure Vaxiin gets the basics right. Here's what we're thinking of adding in
upcoming releases:
- Support for additional hardware vendors and server generations
- Automated out-of-band model discovery
- Provisioning system actions
- Metrics and analytics

Stay tuned!

---

Got questions? comments? something not working right? don't hesitate to reach out!  
- Stop by and chat with us on [Discord](https://discord.gg/aEJ6qwcCGs)  
- [GitHub issues](https://github.com/rebootoio/vaxiin-server/issues) always get our attention
