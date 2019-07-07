---
layout: blog-post
title: Setting up Universal Links and Site Association
description: How to setup Universal Links?
date: "2019-07-05 05:30"
---

## TL;DR

1. Add a site association file to the root of the domain you want to universal link against

2. Add the Associated Domains entitlement within the Capabilities tab of the project file.

## Universal Links

## Site association

This is the file that connects the app to the domain.

The site association file must be located either in the root of the domain itself or within the .well-known folder.

It's format is JSON.

For example:

swiftbuildr.com/.well-known/apple-app-site-association
swiftbuildr.com/apple-app-site-association

```json
{
    "applinks": {
        "apps": [],
        "details": [{
            "appID": "TEAMIDENTIFIER.com.example.<APP-NAME>",
            "paths": ["/feature"]
            }
        ]
    }
}
```

## Entitlements

Universal linking requires the associated domains entitlement is added.

The provisioning profile will also need to support this.
