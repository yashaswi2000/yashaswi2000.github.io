---
title: "Docker builds that respect the cache"
description: "A short checklist for faster, more predictable container builds."
published: 2024-09-04
topic: "Infrastructure"
---

Docker build speed is often decided before the build begins: the order of instructions determines how much work can be reused.

## Order from stable to volatile

Each changed layer invalidates the layers that follow it. Put stable system dependencies and package manifests before frequently changing application code. A source edit should not force the operating-system dependency layer to rebuild.

## Keep package operations together

Update the package index and install packages in the same instruction. This prevents a stale index from being cached independently and leaves a smaller, more reproducible layer.

```dockerfile
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*
```

## Build from source

When practical, compile binaries as part of the container build instead of copying locally generated artifacts. The source and build definition then remain the source of truth, independent of a developer’s machine.

The governing idea is simple: arrange the Dockerfile so that an ordinary code change invalidates the smallest possible amount of work.
