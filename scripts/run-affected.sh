#!/bin/sh

commands="$*"

current_branch=$(git branch --show-current)
base=main
head=HEAD

if [ "$current_branch" = 'main' ]; then
    base=main~1
    head=main
else
    sh ./scripts/track-main-branch.sh
fi

echo "running npx nx affected --base=$base --head=$head -t $commands"

npx nx affected --base=$base --head=$head -t "$commands"
