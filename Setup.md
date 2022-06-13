# Project Setup

## Basic Setup

```bash
# NodeJS
nvm install 16.15.1

# Dependencies
yarn init -y
yarn add apollo-server graphql

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

# References

- [Git ignore](https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup)
- [Commitlint types](https://github.com/conventional-changelog/commitlint#what-is-commitlint)
