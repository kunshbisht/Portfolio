#!/bin/bash

if [ -z "$*" ]; then
  echo "Error: Commit message is empty."
  exit 1
fi

git add .
git commit -m "$*"
git push origin main