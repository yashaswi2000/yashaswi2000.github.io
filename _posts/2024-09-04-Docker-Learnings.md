---
layout: post
title:  "Docker Learnings"
date:   2024-09-04 15:50:50 -0400
categories: jekyll update
---

Utilising the build cache to the most. build order is important. and any change in step n triggers rebuilding of all the n++ steps. so ordering build steps from least changing onces to most changing onces is optimal.

updating package indexes and installing packages should be done together to make use of package manager cache and thus will be cached together. and clean up the package manager cache after install

``` bash
rm -rf /var/lib/apt/lists/*
```

consider building your binaries as part of docker build rather than copying from source. your source code should be the source of truth not for binaries.
