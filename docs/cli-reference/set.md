---
sidebar_position: 9
title: Set
---

Change the server-side state of a resource. While most other commands accept yaml or json files to create or update data, the SET command toggles state directly on the server without an additional payload. The rationale is that there are certain operations which matter only at runtime, and encoding them in state files makes little to no sense.


### CRED

SET the specified credentials as the default set. These credentials will be used to connect to out-of-band devices which have no specific credentials defined.

### STATE

SET the state of a device to ‘resolved’. This effectively marks the device as being alive and no longer a zombie, thus stopping further recovery attempts.

### WORK

SET the state of work to ‘success’ or ‘failure’. This is useful in case work failed in a ‘dirty fashion' and no result was returned. You can use this command to close the failed work item so that a new one could be created for the device.

