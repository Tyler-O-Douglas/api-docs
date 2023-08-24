# String API

Tagging a release on this repository will update the String documentation.

## What is in this repository?

This repository contains

- String's Fern API Definition which lives in the [definition](./fern/api/definition/) folder
- Generators (see [generators.yml](./fern/api/generators.yml))

## What is in the API Definition?

The API Definition contains an OpenAPI Specification adapted to be compatible with Fern.

To make sure that the definition is valid, you can use the Fern CLI.

```bash
npm install -g fern-api # Installs CLI
fern check # Checks if the definition is valid
```

## How to generate documentation

Merging to main will trigger documentation to update at https://docs.meetstring.com/ or you can run:

```bash
fern generate --docs
```
