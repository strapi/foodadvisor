#!/usr/bin/env bash

# Copy content types
cp -a api-tmp/. api

# Copy components
cp -a components-tmp/. components

# Seed data
npm run seed
mv data/.tmp/* .tmp
mv data/uploads/* public/uploads

# Create the first administrator
node scripts/create-first-administrator.js