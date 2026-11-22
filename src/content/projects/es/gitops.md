---
title: "Plataforma de producción y automatización GitOps"
shortTitle: "Plataforma de producción y automatización GitOps"
summary: "Administré hasta siete servidores para alojar aplicaciones y servicios de MetaZenIT."
feature:
  signal: "Hasta 7 servidores"
  context: "Máximo administrado en la infraestructura propia de MetaZenIT."
  figureTitle: "Cómo llegaba un cambio a producción"
  caption: "GitHub Actions ejecutaba la integración. Kargo promovía cambios y Argo CD reconciliaba el estado declarado en Git con Kubernetes."
  decision: "Localizar una diferencia entre Git y el clúster"
  explanation: "El manifiesto daba una referencia concreta para investigar qué debía estar ejecutándose. Contrastaba esa configuración con las métricas de Prometheus y Grafana durante incidencias de almacenamiento o conectividad."
---

## Mi responsabilidad

Administré Linux, redes, DNS y TLS. Usé Docker para empaquetar aplicaciones, Helm para desplegarlas y Rancher para gestionar los clústeres Kubernetes y K3s.

## Del repositorio a producción

GitHub Actions ejecutaba la integración continua. Kargo gestionaba promociones y Argo CD reconciliaba los manifiestos con el clúster. Ansible automatizaba tareas de los servidores.

## Operación y aprendizaje

Investigué incidencias de almacenamiento y conectividad con apoyo de Prometheus y Grafana. Mantener el estado deseado en Git permitía comparar la configuración prevista con la de un servicio que fallaba.
