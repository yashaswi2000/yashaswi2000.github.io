---
title: "Generative and discriminative models, briefly"
description: "A compact mental model for two ways a classifier can learn from data."
published: 2024-09-09
topic: "Machine learning"
---

Language modeling can be framed as classification: given the context so far, select the next token from a very large set of possible classes.

That framing also helps distinguish two broad approaches to classification.

## Generative classifiers

A generative classifier models how each class could have produced the observed data. At prediction time, it asks which class is most likely to have generated the input. Naive Bayes is the classic example.

## Discriminative classifiers

A discriminative classifier learns the boundary between classes directly. It focuses on which features are useful for distinguishing one outcome from another. Logistic regression is a familiar example.

One approach models the underlying story of the data; the other concentrates on the decision. Both can solve classification problems, but they encode different assumptions about what is worth learning.

_Reading note based on Jurafsky and Martin’s Speech and Language Processing draft (August 2024)._
