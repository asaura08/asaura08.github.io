---
title: "Laboratorio de monitorización con Elastic Stack y Suricata"
shortTitle: "Elastic Stack y Suricata"
summary: "Reuní Suricata, la recogida de registros y métricas y la consulta en Kibana en un laboratorio que se puede levantar con Docker Compose."
---

## Del sensor a la consulta

Quería estudiar el recorrido de un evento de seguridad desde el sensor hasta una interfaz de consulta. Preparé un entorno con Suricata para detección en red, Filebeat para registros y Metricbeat para métricas. Logstash y Elasticsearch se encargan del procesamiento y la indexación, y Kibana permite explorar los datos.

## Un entorno reproducible

El repositorio contiene la definición de los servicios en Docker Compose y su configuración de arranque. Incluye la inicialización de certificados y la conexión de Kibana a Elasticsearch. El resultado es un laboratorio que otra persona puede levantar para inspeccionar cómo encajan los componentes.
