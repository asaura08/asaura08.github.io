---
title: "De una factura por correo a un gasto en Invoice Ninja"
shortTitle: "Automatización de facturas"
summary: "Automaticé la entrada de facturas desde Stalwart y la creación de un gasto en Invoice Ninja con el PDF original adjunto."
---

## El recorrido del documento

El proceso empezaba cuando llegaba una factura al buzón de Stalwart. Un proceso en segundo plano leía el mensaje por IMAP, recogía el PDF y utilizaba la API de Invoice Ninja para crear el gasto y adjuntar el documento. El justificante quedaba junto al registro que se iba a revisar.

## Qué quedó automatizado

El flujo llegó a crear el gasto con su adjunto. También trabajé con n8n para descargar y organizar facturas periódicas. La extracción por OCR de importes y otros campos seguía pendiente de validación. Así podía evaluarse por separado la llegada del documento y la fiabilidad de los datos leídos.
