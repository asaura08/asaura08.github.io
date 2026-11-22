---
title: "Plataforma SaaS de hosting y aprovisionamiento automático"
shortTitle: "Hosting y aprovisionamiento SaaS"
summary: "Adapté Frappe Press y Agent para desplegar aplicaciones desde un panel de autoservicio. La plataforma llegó a producción y atendió a clientes de pago."
feature:
  signal: "Clientes en producción"
  context: "Hosting Frappe en producción durante mi etapa en MetaZenIT."
  figureTitle: "Del alta de un sitio a su dominio"
  caption: "Press coordinaba el alta. Agent preparaba el entorno remoto. El proxy, DNS y TLS hacían accesible la aplicación."
  decision: "El despliegue fallaba al inicializar el proxy"
  explanation: "Seguí el error desde la operación de despliegue hasta Frappe Agent. Corregí el acceso al bloqueo de configuración del proxy y el proyecto incorporó el cambio."
---

## El problema de los despliegues manuales

En MetaZenIT quería ofrecer hosting de aplicaciones Frappe. Dar de alta un sitio implicaba preparar el entorno, instalar la aplicación y hacerla accesible desde su dominio. Mi objetivo era que una petición desde un panel iniciara ese trabajo.

## Mi responsabilidad

Como fundador y responsable técnico, me encargué de adaptar el software y operar los servidores donde se ejecutaba. Eso incluía mantener imágenes Docker, investigar despliegues fallidos y modificar componentes de Frappe cuando la solución estaba en su código.

## Del panel al entorno de aplicación

Frappe Press gestionaba aplicaciones, sitios y dominios. Frappe Agent ejecutaba las operaciones de infraestructura en los servidores remotos. Las imágenes Docker proporcionaban los entornos de ejecución. DNS, el proxy inverso y TLS completaban el recorrido hasta el sitio del cliente.

## Diagnóstico entre componentes

Un error que aparecía al desplegar podía originarse en el agente. Investigué un fallo en la inicialización del proxy de Frappe Agent y corregí el acceso a su bloqueo de configuración. La corrección se incorporó al repositorio oficial.

## Adaptación y despliegue

Construí imágenes, adapté componentes a Ubuntu 24.04 e integré los agentes con Press. Mantuve los cambios en forks y trabajé tanto sobre la configuración de los servidores como sobre el código que coordinaba las operaciones.

## Resultado en producción

La plataforma llegó a aprovisionar y alojar aplicaciones Frappe en producción. Durante esa etapa de MetaZenIT, los clientes pagaron por el servicio.

## Qué aprendí

Seguir un alta desde el panel hasta el dominio me ayudó a acotar cada incidencia. El estado del sitio, la operación del agente y la configuración del proxy responden a preguntas distintas sobre un mismo despliegue. Automatización del cliclo de ventas de un SaaS.
