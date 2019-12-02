#!/usr/bin/env bash

wget https://yarnpkg.com/latest.tar.gz
tar zvxf latest.tar.gz

rm latest.tar.gz
YARN_PATH=$(find . -name \*yarn\* -type d -maxdepth 1 -print | head -n1)

echo $YARN_PATH

IFS='/' read -ra my_array <<< "$YARN_PATH"

export PATH="$PATH:${my_array[1]}/bin"

yarn
yarn run seed
yarn develop
