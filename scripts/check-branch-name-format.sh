#!/usr/bin/env bash

local_branch_name="$(git rev-parse --abbrev-ref HEAD)"
branch_pattern="^(feat|fix)/[a-z]*-[0-9]*-[a-z0-9-]*$"

if [[ ! $local_branch_name =~ $branch_pattern ]]; then
    echo "branch is in correct format"
    echo ""
else 
    echo "branch name must:"
    echo "- be in lowercase"
    echo "- be in format: <feat|fix>/<jira card no.>-<dash-delimited-short-description>"
    echo ""
    echo "example format: feat/foo-1-this-is-a-sample-branch-name"
    echo ""
    exit 1
fi
