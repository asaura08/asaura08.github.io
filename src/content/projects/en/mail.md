---
title: "Self-hosted mail infrastructure with Stalwart"
shortTitle: "Self-hosted mail with Stalwart"
summary: "I configured and operated Stalwart and integrated mail with Frappe applications, notifications and administrative workflows at MetaZenIT."
---

## One service behind several applications

Mail supported application notifications and processes that received documents. I administered the Stalwart service and worked on its integration with Frappe Mail, delivery APIs and the credentials each application needed.

## Diagnosing a live issue

During one incident, the server answered session requests, yet the webmail client could not use the responses. Diagnostics traced the issue to the browser’s cross-origin policy. Distinguishing what the server returned from what the client could read narrowed the investigation. The mail service was operational at the last documented review.
