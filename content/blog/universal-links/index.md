---
layout: blog-post
title: Setting up Universal Links and Site Association
description: How do you setup Universal Links for iOS?
date: "2019-07-05 05:30"
---

## TL;DR

1. Add a site association file to the root of the domain you want to universal link against

2. Add the Associated Domains entitlement within the Capabilities tab of the project file.

See this [apple doc](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/enabling_universal_links) for further details.

## Site association

This is the file that connects the app to the domain.

The site association file must be located either in the root of the domain itself or within the .well-known folder. It's format is JSON.

For example:

`swiftbuildr.com/.well-known/apple-app-site-association`
`swiftbuildr.com/apple-app-site-association`

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

Universal linking requires the associated domains entitlement is added. See: [associated domain](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_associated-domains).

The provisioning profile will also need to support this.
