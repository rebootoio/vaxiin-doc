---
sidebar_position: 6
title: Frequently Asked Questions
---

### What models do you support?

We currently support the following models:

|   Vendor   |  Model |
|:----------:|:------:|
| Dell       | idrac9 |
| HPE        | ilo5   |
| HPE        | ilo4   |
| SuperMicro | x10    |
| Lenovo     | xcc    |
| Lenovo     | imm2   |

So if your server is a SuperMicro x10, you would use the following key/value:
```
model: x10
```

**If you'd like support for additional models, please open a feature request [here](https://github.com/rebootoio/vaxiin-server/issues).**

### Where can I find ready-made rules and actions?

We're working on such a repo and will make it available once it's ready.

### Can I add a screenshot I obtained myself and generate a state out of it?

Sure! First, make sure the screenshot is in PNG format.

Next, base64 encode it doing something like:
```
base64 -i image.png -o image-base64.txt
```
Now you can generate a state file by doing:
```
echo -n 'screenshot: ' > my_state.yaml
cat image-base64.txt >> my_state.yaml
echo 'device_uid: test_device' >> my_state.yaml
```
Finally, load it into Vaxiin by running:
```
vaxctl create state -f my_state.yaml
```


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

### Where can I get help?
We're happy to help at the [Rebooto Discord Server](https://discord.gg/aEJ6qwcCGs).  
Found a problem / have a feature request? [Open an issue on GitHub](https://github.com/rebootoio/vaxiin-sandbox/issues).

### How can I help?

Glad you asked!  
There’s a few ways you can contribute to the zombie cleansing effort:
- Found a bug? Got an idea? We’re happily accepting pull requests.
- Help us spread the word by telling others about us. Twitting, blogging, graffiti - whatever works for you.

