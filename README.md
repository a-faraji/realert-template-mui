# Realert Template: MUI

[![RealertTemplateMui Build](https://github.com/a-faraji/realert-template-mui/actions/workflows/build.yml/badge.svg)](https://github.com/a-faraji/realert-template-mui/actions/workflows/build.yml)

This is a template to be used with [Realert Package](https://github.com/a-faraji/realert).

## Installation

```shell
npm i @a-faraji/realert-template-mui
```
```shell
yarn add @a-faraji/realert-template-mui
```

## Usage

Pass `RealertTemplateMui` as `template` prop to `RealertProvider`.

```jsx
import React from 'react';
import { RealertProvider } from '@a-faraji/realert';
import { RealertTemplateMui } from '@a-faraji/realert-template-mui';

export default function App() {
  return (
    <RealertProvider template={RealertTemplateMui}>
      {/* ... rest of your code */}
    </RealertProvider>
  );
};
```

To have typescript support for additional dialog props, define the type-aware hook.

```tsx
import { useRealert } from '@a-faraji/realert';

const useMuiRelaert = useRealert<typeof RealertTemplateMui>();
```

## API
*Coming soon!*
