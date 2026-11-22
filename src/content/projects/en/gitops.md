---
title: "Production platform and GitOps automation"
shortTitle: "Production platform and GitOps automation"
summary: "I managed up to seven servers hosting applications and services for MetaZenIT."
feature:
  signal: "Up to 7 servers"
  context: "Peak size of the infrastructure I managed at MetaZenIT."
  figureTitle: "How a change reached production"
  caption: "GitHub Actions ran integration jobs. Kargo promoted changes and Argo CD reconciled the cluster with the state declared in Git."
  decision: "Finding a difference between Git and the cluster"
  explanation: "The manifest recorded what should be running. During storage or connectivity incidents I compared that configuration with operational metrics in Prometheus and Grafana."
---

## My responsibility

I managed Linux, networking, DNS and TLS. I packaged applications with Docker, deployed them with Helm and operated Kubernetes and K3s clusters through Rancher.

## From repository to production

GitHub Actions handled continuous integration. Kargo managed promotions and Argo CD reconciled the manifests with the cluster. Ansible automated server tasks.

## Operations and lessons

I investigated storage and connectivity incidents using Prometheus and Grafana. Keeping desired state in Git gave me a reference when comparing a failing service with its intended configuration.
