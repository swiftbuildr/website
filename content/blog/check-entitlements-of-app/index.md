---
layout: blog-post
title: Checking entitlements of an app installed on a simulator
date: "2019-07-06 05:30"
tags: [entitlements, howto]
---

How do I check the entitlements of an app that's been installed on a simulator run the following command?

```bash
$ codesign -d --entitlements :- <your-app.app>

<dict>
  <key>get-task-allow</key>
  <false/>
</dict>
```
