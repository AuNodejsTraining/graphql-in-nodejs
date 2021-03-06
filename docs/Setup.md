# Project Setup

## Basic Setup

```bash
# NodeJS
nvm install 16.15.1

# Dependencies
yarn init -y
yarn add apollo-server apollo-server-core graphql
yarn add graphql-modules
yarn add apollo-datasource-rest
yarn add winston

# Git
git init
```

## Hook Setup

```bash
# Dependencies
yarn add @commitlint/cli @commitlint/config-conventional husky -D

# Commitlint config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# Husky config
yarn husky install

cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE

chmod a+x .husky/commit-msg
```

## TypeScript Setup

```bash
yarn add typescript ts-node -D
npx tsc --init
```

## Mock Server Setup

```bash
yarn add json-server -D
```

## Jest Setup

```bash
yarn add jest ts-jest @types/jest -D
```

## Eslint Setup

```bash
yarn add eslint \
  eslint-config-standard \
  eslint-plugin-import \
  eslint-plugin-n \
  eslint-plugin-promise \
  eslint-plugin-standard \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  -D
```

## Subscription Setup

```bash
yarn add graphql-ws ws @graphql-tools/schema apollo-server-core
yarn add @types/ws -D
yarn remove apollo-server
yarn add apollo-server-express
yarn add graphql-subscriptions
```

# References

- [Git ignore](https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup)
- [Commitlint types](https://github.com/conventional-changelog/commitlint#what-is-commitlint)
