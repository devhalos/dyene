#!/bin/sh

WORKSPACE=$(echo "$1" | sed -E 's/--//g')


cd infrastructure || exit 1;

echo "Switching to workspace $WORKSPACE in $PWD"
terraform workspace select "$WORKSPACE" || terraform workspace new "$WORKSPACE"
