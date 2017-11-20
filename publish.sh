#!/bin/bash

git config --global user.email "travis@travis-ci.com"
git config --global user.name "Travis CI"

PKG_VERSION=`node -p "require('./package.json').version"`
npm run build:gh-pages
git add -f ./dist
git add -f ./docs
git commit -m "PUBLISH v${PKG_VERSION}"
git tag -a $PKG_VERSION -m $PKG_VERSION
git remote add origin-publish https://${GITHUB_TOKEN}@github.com/RecuencoJones/test-travis-gh-pages-npm.git
git push -f origin-publish master
git push origin-publish --tags

