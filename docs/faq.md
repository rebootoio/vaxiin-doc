---
sidebar_position: 6
title: Frequently Asked Questions
---

### What models do you support?

We currently support the following models:
- idrac9

Our future plans include actual server make & model detection, and mapping of those to out-of-band device generations.

### Where can I find ready-made rules and actions?

We're working on such a repo and will make it available once it's ready.

### What's the dependency structure here?

1. Creds (independent)
2. Devices (independent)
3. Actions (independent)
4. States (dependent on devices)
5. Rules (dependent on actions & states)

So if you keep everything nice and tidy in a git repo and have a script that iterates through the different directories to load the data, it might look like this:

```bash
#!/usr/bin/env bash
for category in cred device action state rule; do
  cd $category
  for resource in *; do
    if [ -f $resource ]; then
      echo $category/$resource
      vaxctl apply $category -f $resource
    fi
  done
  cd ..
done
```

:::info
While devices don’t explicitly depend on creds, to connect to an out-of-band interface, you need to have at least one set of credentials in place.
:::

### Why is tab completion not picking up new options after installing a new version of vaxctl?

You're probably using zsh. There’s a thread on this issue you can follow [here](https://github.com/spf13/cobra/issues/881).

In the meantime, you can workaround this issue by adding the following to your .zshrc:
```
source <(vaxctl completion zsh)
```

### How can I help?

Glad you asked!

There’s a few ways you can contribute to the zombie cleansing effort:
- Found a bug? Got an idea? We’re happily accepting pull requests.
- Help us spread the word by telling others about us. Twitting, blogging, graffiti - whatever works for you.
