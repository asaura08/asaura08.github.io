---
title: "Turning emailed invoices into expenses in Invoice Ninja"
shortTitle: "Invoice automation"
summary: "I automated invoice intake from Stalwart so that an incoming PDF could become an expense in Invoice Ninja, with the original document attached."
---

## Following the document

The process started when an invoice reached the Stalwart mailbox. A background worker read the message over IMAP, collected the PDF and called the Invoice Ninja API to create an expense and attach the document. That put the source invoice alongside the record a person would review.

## What the workflow delivered

The integration created expenses with their attachments. I also worked with n8n to download and organise recurring invoices. Extracting amounts and other fields through OCR still needed validation. Document delivery and the accuracy of the extracted data could therefore be assessed independently.
