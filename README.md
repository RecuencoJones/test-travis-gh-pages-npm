[![Build Status](https://travis-ci.com/RecuencoJones/test-travis-gh-pages-npm.svg?token=aEFEyxH22R2zBRmM2Yab&branch=develop)](https://travis-ci.com/RecuencoJones/test-travis-gh-pages-npm)
[![npm version](https://badge.fury.io/js/test-travis-gh-pages-npm.svg)](https://badge.fury.io/js/test-travis-gh-pages-npm)

# test-travis-gh-pages-npm

Repository to test integration of travis, gh-pages and npm

## Setup CI/CD

With travis, it is very simple to have a minimal setup to run CI, all that is required to build any PR or push to 
branches is a `.travis.yml` file

```yaml
language: node_js
node_js: 
- '6'

install:
- npm install

script:
- .travis/build-integration.sh
```

and adding this repository to travis, so it will start watching for changes.

As we want to publish an `npm` package, we can add deploy steps with `npm` provider. We will need to get our token from the `~/.npmrc` file after running `npm login` or `npm adduser`.

There are various options that Travis recommends to set this token without exposing it publicly, one is to use their 
CLI to encrypt this token. 
Another approach, which I find simpler, is to add the token as an environment variable through the travis web UI. 
This way we won't need travis CLI nor huge tokens hardcoded in `.travis.yml` and we can conceal the visibility of the 
token.

In addition to the npm token, we will also generate a GitHub personal access token to allow travis to push to the repository.

![Example tokens](https://i.imgur.com/3LCqMTW.png)

Once we set the token, we can write our deploy block

```yaml
before_deploy:
- .travis/build-production.sh

deploy:
  provider: npm
  email: <user@email>
  api_key: "$NPM_TOKEN"
  on:
    branch: develop
  skip_cleanup: true

after_deploy:
- .travis/publish.sh
```

We only want to publish on our develop branch, which will feed from pull requests. 
Before publication we only need to generate the `/dist` directory and afterwards, we can build our documentation and 
push everything to `master` branch.

## GitHub Pages

Since we just want to publish the output from our documentation tool `typedoc`, we won't be using Jekyll for this project.
`typedoc` outputs a static website by default, which will be used for GitHub pages. All we need to do is to set that it 
should be written to `/docs` directory and GitHub pages should build from `master` branch, `/docs` directory.

![Example GH Pages configuration](https://i.imgur.com/daOwMDx.png)

After some time, GitHub will be running the static website.
