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
yarn install
yarn json-server --watch api/db.json
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

- Mutation

```graphql
mutation($book: BookInput!) {
  createBook(book: $book) {
    id
  }
}
```

```json
// variables
{
  "book": {
    "author": "bqliu",
    "title": "graphql"
  }
}
```

- Subscription

```graphql
subscription {
  statistics {
    onlineUsers
  }
}

subscription {
  event {
    message
  }
}
```
