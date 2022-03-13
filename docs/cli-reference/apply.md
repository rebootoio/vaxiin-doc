---
sidebar_position: 7
title: Apply
---

[CREATE](create) or update resources using input files. This command is identical to [CREATE](create) when the resource doesn’t exist. If it does exist, APPLY will update the resource to the new values you pass it.


### ACTION

[CREATE](create#action) or update an action.

### DEVICE

[CREATE](create#device) or update a device registered in the system.

If you'd like to have the device switch back to the 'default' creds, you can modify the [agent's config](configuration/agent) or use the `default` key in the device's yaml file, as per this example:

```python
uid: test_device
ipmi_ip: 10.1.1.2
model: idrac9
zombie: false
# highlight-next-line
creds_name: default
```

### CRED

[CREATE](create#cred) or update a set of credentials used for out-of-band connections.

If you're looking to mark another set of credentials as ‘default’, check out [SET CRED](set#cred).

:::info
You cannot use `default` as the name for your credentials, as its a reserved keyword.
:::


### STATE

[CREATE](create#state) or update a state.

### RULE

[CREATE](create#rule) or update a rule associating states with actions.
