---
title: "Recon ASM"
shortTitle: "Recon ASM"
summary: "Inventario autorizado de activos con historial de cambios y revisión de observaciones."
---

## Fiabilidad y trazabilidad

PostgreSQL conserva el historial y el estado del trabajo. Redis notifica que hay tareas pendientes. Esta separación permite recuperar trabajo aunque se interrumpan las notificaciones.
