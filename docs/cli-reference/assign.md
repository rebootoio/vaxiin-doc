---
sidebar_position: 8
title: Assign
---

Schedule a task to be performed against a device.


### WORK

You ASSIGN WORK to run one or more actions or match a specific rule against a device. So, for example, this is how you grab a device's state:

```
$ vaxctl assign work -d test_dev -a screenshot
$ vaxctl get work
  ID   STATE ID   DEVICE     TRIGGER                        ASSIGNED AT                  STATUS
  1    0          test_dev   Manual - Actions: screenshot   2022-03-09T12:23:12.202126   PENDING
```

And this is how you'd run a couple of actions against the device:

```
$ vaxctl assign work -d test_dev -a 'power status','ipmi lan print'
$ vaxctl get work -v
  WORK ID   STATE ID   ACTION           TRIGGER                                          STATUS    COMPLETED AT                 RUN DATA
  3         0          power status     Manual - Actions: power status, ipmi lan print   success   2022-03-09T12:26:36.356948   stdout = Chassis Power is
                                                                                                                                on

  3         0          ipmi lan print   Manual - Actions: power status, ipmi lan print   success   2022-03-09T12:26:39.098181   stdout = Set in Progress         : Set Complete
                                                                                                                                Auth Type Support       : MD5
                                                                                                                                Auth Type Enable        : Callback : MD5
                                                                                                                                                        : User     : MD5
                                                                                                                                                        : Operator : MD5
                                                                                                                                                        : Admin    : MD5
                                                                                                                                                        : OEM      :
                                                                                                                                IP Address Source       : DHCP Address
                                                                                                                                IP Address              : 10.1.1.2
                                                                                                                                Subnet Mask             : 255.255.255.0
                                                                                                                                MAC Address             : ff:ff:ff:ff:ff:ff
                                                                                                                                SNMP Community String   : public
                                                                                                                                IP Header               : TTL=0x40 Flags=0x40 Precedence=0x00 TOS=0x10
                                                                                                                                BMC ARP Control         : ARP Responses Enabled, Gratuitous ARP Disabled
                                                                                                                                Gratituous ARP Intrvl   : 2.0 seconds
                                                                                                                                Default Gateway IP      : 10.1.1.1
                                                                                                                                Default Gateway MAC     : 00:00:00:00:00:00
                                                                                                                                Backup Gateway IP       : 0.0.0.0
                                                                                                                                Backup Gateway MAC      : 00:00:00:00:00:00
                                                                                                                                802.1q VLAN ID          : Disabled
                                                                                                                                802.1q VLAN Priority    : 0
                                                                                                                                RMCP+ Cipher Suites     : 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
                                                                                                                                Cipher Suite Priv Max   : XXXaXXXXXXXXXXX
                                                                                                                                                        :     X=Cipher Suite Unused
                                                                                                                                                        :     c=CALLBACK
                                                                                                                                                        :     u=USER
                                                                                                                                                        :     o=OPERATOR
                                                                                                                                                        :     a=ADMIN
                                                                                                                                                        :     O=OEM
                                                                                                                                Bad Password Threshold  : Not Availabl
```
