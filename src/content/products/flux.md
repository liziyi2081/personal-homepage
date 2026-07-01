---
name: "Flux"
icon: "/images/icons/flux.png"
description: "A lightweight state machine library for TypeScript. Zero dependencies, tree-shakeable."
link: "https://github.com/example/flux"
order: 1
---

## Overview

Flux is a lightweight state machine library designed for TypeScript projects that need predictable state management without the overhead of larger solutions. It follows a simple but powerful model: states, transitions, and actions.

## Features

- **Zero dependencies** — nothing to audit, nothing to conflict
- **Tree-shakeable** — only ship the code you actually use
- **Type-safe** — full TypeScript support with inferred transition types
- **Tiny footprint** — under 2 KB gzipped

## Usage

Define your states, wire up transitions, and let Flux handle the rest:

```ts
import { createMachine } from '@liziyi/flux'

const toggle = createMachine({
  initial: 'off',
  states: {
    off: { toggle: 'on' },
    on: { toggle: 'off' },
  },
})

toggle.send('toggle')
```

## Motivation

Most state management libraries pull in megabytes of dependencies for a problem that can be solved with a few hundred lines of code. Flux is my attempt to prove that simple doesn't have to mean limited.
