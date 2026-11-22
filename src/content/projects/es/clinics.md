---
title: "Gestión de clínicas, pacientes y citas"
shortTitle: "Gestión de clínicas, pacientes y citas"
summary: "Desarrollé un producto propio que conecta la solicitud de cita con la agenda clínica y el trabajo administrativo."
feature:
  signal: "5 roles"
  context: "Producto propio de gestión de citas desarrollado hasta la fase precomercial."
  figureTitle: "Quién puede cambiar una cita"
  caption: "El paciente solicita una cita desde el portal. El personal trabaja desde su panel. Ambas vías pasan por la autorización del servidor."
  decision: "Proteger también las operaciones por API"
  explanation: "Diseñé cada transición de la agenda junto con los permisos del rol que la ejecuta. Así, una llamada directa a la API pasa por las mismas comprobaciones que la operación iniciada en pantalla."
---

## Contexto y responsabilidad

Modelé pacientes, profesionales, disponibilidad y estados de cita sobre Frappe. El portal permitía solicitar citas y el personal administrativo disponía de paneles de gestión.

## Autorización

BUSINESS_OWNER, CLINIC_MANAGER, FRONT_DESK, PRACTITIONER y PATIENT tenían responsabilidades distintas. Los controles JavaScript guiaban la navegación. Las operaciones de negocio requerían comprobar los permisos en el servidor, incluso al acceder directamente por API.

## Resultado y aprendizaje

Implementé la gestión de citas, las notificaciones por correo y los flujos multirrol. El producto quedó desarrollado sin comercializar. Diseñar cada transición de cita obligó a concretar quién podía ejecutarla.
