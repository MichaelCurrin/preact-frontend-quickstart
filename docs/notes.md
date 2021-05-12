# Notes

I tried importing hooks which was successful. Leaving out `?module` results in an internal import error in the script.

```javascript
import { useState } from 'https://unpkg.com/preact@10.5.13/dist/hooks.module.js?module'
```

But then got an error trying to use it as in [Preact Hooks](https://preactjs.com/guide/v10/hooks/) docs.

So the JS script in this template does not use hooks.
