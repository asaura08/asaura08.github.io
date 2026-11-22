---
title: "Recon ASM"
shortTitle: "Recon ASM"
summary: "An authorized asset inventory with change history and observation review."
---

## Reliability and traceability

PostgreSQL stores history and job state. Redis signals pending work. This separation allows processing to resume even when notifications are interrupted.
