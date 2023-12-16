#!/bin/sh

WORKSPACE="${INFRA_WORKSPACE:-test}"

cd infrastructure || exit 1;

echo "Switching to workspace $WORKSPACE in $PWD"
terraform workspace select "$WORKSPACE" || terraform workspace new "$WORKSPACE"
