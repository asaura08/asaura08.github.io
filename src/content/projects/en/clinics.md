---
title: "Healthcare scheduling and patient management"
shortTitle: "Healthcare scheduling and patient management"
summary: "I developed a product connecting appointment requests with practitioner schedules and administrative work."
feature:
  signal: "5 roles"
  context: "An appointment management product developed to the pre-commercial stage."
  figureTitle: "Who can change an appointment"
  caption: "Patients request appointments through the portal. Staff use their dashboard. Both paths pass through server-side authorization."
  decision: "Protecting direct API operations"
  explanation: "I designed each scheduling transition alongside the permissions of the role performing it. A direct API request goes through the same checks as an operation initiated on screen."
---

## Context and responsibility

I modelled patients, practitioners, availability and appointment states in Frappe. Patients could request appointments through a portal and administrative staff had their own management screens.

## Authorization

BUSINESS_OWNER, CLINIC_MANAGER, FRONT_DESK, PRACTITIONER and PATIENT had different responsibilities. JavaScript guards guided navigation. Business operations required server-side permission checks, including direct API requests.

## Outcome and lessons

I implemented scheduling, email notifications and multi-role workflows. The product reached a developed, pre-commercial stage. Designing each appointment transition required being explicit about who could perform it.
