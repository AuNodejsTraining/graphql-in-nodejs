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
yarn add @commitlint/cli @commitlint/config-conventional husky -D
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
yarn husky install

cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE

chmod a+x .husky/commit-msg
```

# References

- [Git ignore](https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore)
- [Commitlint](https://commitlint.js.org/#/guides-local-setup)
- [Commitlint types](https://github.com/conventional-changelog/commitlint#what-is-commitlint)
