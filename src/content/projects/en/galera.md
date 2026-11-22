---
title: "High Availability Database Infrastructure"
shortTitle: "High availability with MariaDB Galera"
summary: "I deployed three Galera nodes on Kubernetes with MaxScale and persistent storage, then tested how the database service recovered during failover and restoration."
feature:
  signal: "< 1 minute"
  context: "Recovery observed in failover and restore tests on the three-node cluster."
  figureTitle: "What has to recover before a query can succeed"
  caption: "MaxScale routes connections. Galera synchronizes nodes. Longhorn preserves their data as Kubernetes remounts volumes."
  decision: "A running node could still be recovering"
  explanation: "A volume mount issue after a Kubernetes update led me to check storage, Galera synchronization and the application connection path separately."
---

## The availability objective

MetaZenIT's Frappe applications depended on MariaDB. I wanted the database to keep serving applications through a node failure and to understand what it took to bring the cluster back into service.

## My responsibility

I designed, deployed and administered the cluster on real infrastructure. I was responsible for application connectivity, persistent storage, component upgrades and recovery testing.

## The path of a connection

Applications reached MariaDB through MaxScale. Behind it, three Galera nodes ran on Kubernetes under MariaDB Operator. Persistent Longhorn volumes held each instance's data.

## Three states worth checking

An incident could involve volume availability, a node's synchronization state or MaxScale's ability to route connections. A running process in Kubernetes answered just one part of the question about service health.

## Deployment and operation

I configured cluster networking, storage and the Frappe integration. During operation I investigated problems mounting Longhorn volumes after Kubernetes upgrades and worked on Galera recovery and MaxScale configuration.

## Observed results

The three-node cluster ran in production. I observed recovery in under a minute in documented failover and restoration tests. That measurement describes those tests on that configuration.

## What I learned

I now frame recovery from the application's point of view. Bringing a node back is one step. I also need to understand where application connections will go and what state the data will be in when they arrive.
