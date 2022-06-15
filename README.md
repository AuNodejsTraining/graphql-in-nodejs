# GraphQL in NodeJS

## Start

- Local env

```bash
yarn install
yarn json-server --watch api/db.json
yarn start
```

- Production env

```bash
APP_ENV=prod yarn start
```

## Demos

- Directive

```graphql
{
  profile {
    name
    pets {
      name @skip(if: true)
      photo
      avatar @include(if: true)
    }
  }
}
```
