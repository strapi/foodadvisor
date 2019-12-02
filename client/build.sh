#!/usr/bin/env bash

YARN_VERSION=1.19.2

wget https://github.com/yarnpkg/yarn/releases/download/v$YARN_VERSION/yarn-v${YARN_VERSION}.tar.gz
tar zvxf yarn-v$YARN_VERSION.tar.gz

rm yarn-v$YARN_VERSION.tar.gz

export PATH="$PATH:yarn-v$YARN_VERSION/bin"

yarn install
yarn start
