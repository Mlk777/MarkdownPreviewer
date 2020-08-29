#!/usr/bin/env sh

#abort on errors

set -e

# build

yarn run build

# navigate into the build output directory

cd dist

git init

git add -A

git commit -m 'moving from heroku to github pages'

git push -f git@github.com:Mlk777/MarkdownPreviewer.git master:gh-pages

cd -
