# MangaUpdates OpenAPI Types

This folder contains auto-generated types for the [MangaUpdates API](https://api.mangaupdates.com/), as well as
some helper types.

> **WARNING:**
>
> Do not modify the auto-generated files manually!

## To re-generate the API types...

Run the following commands from the root of the repository:

```sh
curl -o mu-openapi.yaml https://api.mangaupdates.com/openapi.yaml

npx swagger-typescript-api@^9.3.1  \
  --path mu-openapi.yaml  \
  --output src/MangaUpdates/models  \
  --name mu-api.d.ts \
  --type-prefix MU \
  --route-types \
  --no-client

rm mu-openapi.yaml
```

If routes have been added/removed from the API, you may need to manually modify
`index.d.ts` for `MangaUpdates.request` to work correctly.
