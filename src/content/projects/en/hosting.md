---
title: "SaaS Hosting Platform and Automated Provisioning"
shortTitle: "SaaS hosting and provisioning"
summary: "I adapted Frappe Press and Agent to deploy applications from a self-service panel. The platform went into production and served some paying customers."
feature:
  signal: "Customers in production"
  context: "Production Frappe hosting during my time at MetaZenIT."
  figureTitle: "From site creation to a working domain"
  caption: "Press coordinated the request. Agent provisioned the remote environment. The proxy, DNS and TLS made the application reachable."
  decision: "Deployment failed during proxy initialization"
  explanation: "I traced the deployment failure to Frappe Agent, fixed how the proxy accessed its configuration lock and contributed the fix upstream."
---

## The cost of provisioning by hand

At MetaZenIT I wanted to offer hosting for Frappe applications. Bringing a site online meant preparing its environment, installing the application and making it reachable at its domain. My goal was to set that work in motion from a self-service panel.

## My responsibility

As founder and technical lead, I adapted the software and operated the servers it ran on. I maintained Docker images, investigated failed deployments and changed Frappe components when a fix belonged in their code.

## From the panel to a running site

Frappe Press managed applications, sites and domains. Frappe Agent carried out infrastructure operations on remote servers. Docker images supplied the application environments. DNS, a reverse proxy and TLS connected the customer's domain to the site.

## Tracing failures across components

A deployment error could originate inside the agent. I investigated a failure during proxy initialization in Frappe Agent and fixed how it accessed its configuration lock. The upstream project merged the change.

## Adapting and deploying the platform

I built images, adapted components for Ubuntu 24.04 and integrated the agents with Press. I maintained changes in forks and worked on both the server configuration and the code that coordinated operations.

## Production outcome

The platform provisioned and hosted Frappe applications in production. It served some paying customers during that period at MetaZenIT.

## What I learned

Following a provisioning request from the panel through to its domain gave me a way to narrow down incidents. The site's state, the agent operation and the proxy configuration each answer a different question about the same deployment.
