# workerd fetch cache bug

## Reproduce

```bash
npm run build
npm run start
```

### Positive Case

Navigate to:

<http://localhost:8788/fetch-test-success>

Expect a positive response.

### Negative Case

Navigate to:

<http://localhost:8788/fetch-test-failure>

Expect an application error and a console error:

```bash
[wrangler:inf] GET /fetch-test-success 200 OK (100ms)
✘ [ERROR] Error: The 'cache' field on 'RequestInitializerDict' is not implemented.

      at checkURL
  (file:///.../workerd-fetch-cache-bug/.wrangler/tmp/bundle-HPhckR/checked-fetch.js:9:9)
      at Object.apply
  ...
```

## Root Cause

The workerd implementation of `fetch` does not support the `cache` option of RequestInit.
