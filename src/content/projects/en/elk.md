---
title: "A monitoring lab with Elastic Stack and Suricata"
shortTitle: "Elastic Stack and Suricata"
summary: "I brought together Suricata, log and metric collection, and Kibana in a reproducible monitoring lab defined with Docker Compose."
---

## From sensor to search

I wanted to study the path a security event takes from a sensor to a search interface. I put together an environment with Suricata for network detection, Filebeat for logs and Metricbeat for metrics. Logstash and Elasticsearch handle processing and indexing, and Kibana provides the interface for exploring the data.

## A reproducible environment

The repository includes the Docker Compose services and their startup configuration. It covers certificate initialisation and the connection between Kibana and Elasticsearch. Someone else can bring up the lab and inspect how the components fit together.
