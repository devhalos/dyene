#!/bin/sh

npx concurrently -k -s first -n 'sb:app,sb:test' -c 'magenta,blue' $1
