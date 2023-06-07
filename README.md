This repository contains a reproduction of a `next@13.4.5-canary.7` bug.

# The specific scenario where the bug occurs

The following conditions must be met:

- In development (i.e. the dev server).
- In a dynamc route.
- In a statically rendered route using `generateStaticParams()`.
- While Draft Mode is enabled.

With the above met, call `router.refresh()` in a Client Component's `useEffect()`.

# The error

The following output prints to the server console. The browser performs a full refresh rather than a client-side refresh.

```
- error Error: invariant: Expected pageData to be a string for app data request but received undefined. This is a bug in Next.js.
    at DevServer.renderToResponseWithComponentsImpl (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:1261:27)
    at async DevServer.renderPageComponent (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:1320:24)
    at async DevServer.renderToResponseImpl (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:1351:32)
    at async DevServer.pipeImpl (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:634:25)
    at async Object.fn (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/next-server.js:1142:21)
    at async Router.execute (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/router.js:315:32)
    at async DevServer.runImpl (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:608:29)
    at async DevServer.run (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/dev/next-dev-server.js:922:20)
    at async DevServer.handleRequestImpl (/[REDACTED]/nextjs-tutorial-app-router/node_modules/next/dist/server/base-server.js:539:20)
{
  digest: undefined
}
```

# Reproduction steps

Start the development server before continuing.

```sh
npm run dev
```

## With Draft Mode disabled

1. Go to `/foo`. The page should perform a client-side refresh every 1 second with no errors.

## With Draft Mode enabled

1. Go to `/draft`. You should be redirect to `/foo`, now with Draft mode enabled.
1. The page should perform a full browser refresh every 1 second with errors in the console. **🐛 It is supposed to perform a client-side refresh every 1 second.**

## To disable Draft Mode

1. Go do `/end-draft`.
