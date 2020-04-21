#!/usr/bin/env sh

# abort on errors
set -e

# build
NODE_ENV=production npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:xseignard/projet-dave.git master:gh-pages

cd -