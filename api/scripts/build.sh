#!/usr/bin/env bash

# Build the admin
npm run build

# Copy content types
mkdir api-tmp
mv api/* api-tmp

# Copy components
mkdir components-tmp
mv components/* components-tmp