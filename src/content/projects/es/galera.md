---
title: "Infraestructura de alta disponibilidad con MariaDB Galera"
shortTitle: "MariaDB Galera en alta disponibilidad"
summary: "Desplegué tres nodos Galera en Kubernetes con MaxScale y almacenamiento persistente. Probé la recuperación del servicio ante fallos y durante restauraciones."
feature:
  signal: "< 1 minuto"
  context: "Recuperación observada en pruebas de failover y restauración del clúster de tres nodos."
  figureTitle: "Qué tiene que recuperarse para volver a servir una consulta"
  caption: "MaxScale dirige las conexiones. Galera sincroniza los nodos. Longhorn conserva sus datos cuando Kubernetes vuelve a montar los volúmenes."
  decision: "Un nodo en ejecución aún podía estar recuperándose"
  explanation: "Tras una actualización de Kubernetes, un problema de montaje me llevó a comprobar tres cosas por separado: el volumen, la sincronización de Galera y la ruta de conexión de la aplicación."
---

## El objetivo de disponibilidad

Las aplicaciones Frappe de MetaZenIT dependían de MariaDB. Quería que la base de datos pudiera seguir prestando servicio cuando fallara un nodo y entender qué trabajo hacía falta para recuperar el conjunto.

## Mi responsabilidad

Diseñé, desplegué y administré el clúster en infraestructura real. Me ocupé del acceso de las aplicaciones, la persistencia, las actualizaciones de componentes y las pruebas de recuperación.

## La ruta de una conexión

Las aplicaciones accedían a MariaDB a través de MaxScale. Detrás operaban tres nodos Galera en Kubernetes, gestionados mediante MariaDB Operator. Los volúmenes persistentes de Longhorn conservaban los datos de cada instancia.

## Tres estados que importan

Para diagnosticar un fallo necesitaba distinguir el estado del volumen, la sincronización del nodo y la capacidad de MaxScale para dirigir conexiones. Que Kubernetes mostrara un proceso en ejecución resolvía solo una parte de la pregunta sobre la salud del servicio.

## Puesta en marcha y operación

Configuré los servicios de red, el almacenamiento y la integración con Frappe. Durante la operación investigué problemas de montaje de volúmenes Longhorn tras actualizaciones de Kubernetes y trabajé en la recuperación de Galera y la configuración de MaxScale.

## Resultados observados

El clúster de tres nodos operó en producción. En las pruebas documentadas de failover y restauración observé una recuperación inferior a un minuto. La medida corresponde a esas pruebas y a la configuración utilizada.

## Qué aprendí

Ahora planteo la recuperación desde el punto de vista de la aplicación. Recuperar un nodo es un paso. Para dar por recuperado el servicio también necesito entender por dónde entrarán las conexiones y en qué estado encontrarán los datos.
