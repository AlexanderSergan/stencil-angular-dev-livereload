# @livingui - angular hot reload dev environment set up instruction

## Overview

This is an instruction and demo repository to set up proper dev environment for development stencil components and have it integrated and hot reloaded in any angular app.

### 1. Clone @livingui repository

```bash
git clone https://github.com/Uiseguys/livingui.git
```

### 2. Create angular project with @angular/cli

```bash
ng new dev-integration-test-app
```

### 3. Add @livingui/cwc-input into angular app

```bash
cd dev-integration-test-app

npm i --save @livingui/cwc-input
```

Import it into your `app.module.ts` and add '`CUSTOM_ELEMENTS_SCHEMA` to module schemas:

```typescript
import "@livingui/cwc-input/dist/livingui-input";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";


@NgModule({
  // your module definitions here

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

Now you can use imported component in your templates.

```html
  <cwc-input [label]="'Hi label! :)'" [value]="'Input demo value'">
  </cwc-input>
```

### 4. Live reload setup
Stencil config file have a special [copy](https://stenciljs.com/docs/config#copy) property which will be used for copying element's dist folder every build cycle. You must target it right into `node_modules/` folder of the angular app.
 
`livingui/cwc-input/stencil.config.ts`:
```typescript
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "livingui-input",
  enableCache: false,
  bundles: [{ components: ["cwc-input"] }],
  outputTargets: [
    { type: "www" },
    { type: "dist" },
    {
      type: "dist",
      dir:
        "../../dev-integration-test-app/node_modules/@livingui/cwc-input/dist"
    }
  ],
  copy: [],
  plugins: [sass()]
};

```

### 5. Verify
Now you can launch two projects simultaneously and confirm angular app livereload every stencil compile cycle.