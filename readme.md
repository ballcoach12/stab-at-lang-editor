# `stab-at-lang-editor`

This project is a prototype for running an editor and language server, that was generated by Langium, in a browser.  The idea is to wrap the editor in a Lit WebComponent so that it can be packaged for reuse.

## Project Structure

The project consists of:

### `hello-world`

A small Langium language server/editor project that implements a simple "HelloWorld" grammar.  When you build this project, it is configured to produce a web worker that can be used in the browser to move the language server from a Node backend into the browser itself, eliminating the need for a server-based language server.

To build:

```
cd hello-world
npm run buildall
``````

### `hello-world-editor-lit`

A Lit component project that wraps the `hello-world` language.

**This project is still needing CSS work, but implements the basic functionality**

To build:

```
cd hello-world-editor-lit
npm run build
``````

To serve:

```
npm run dev
```

### `wrapper-js-html`

A reconstitution of the example shown [here](https://github.com/TypeFox/monaco-components/blob/main/packages/examples/verify_wrapper.html). This project uses Vite for building and bundling.

To build:

```
cd wrapper-js-html
npm run build
```

To serve:

```
npm run dev
```

### `wrapper-hello-world-code`

Demonstrates the use of code to initialize an editor using resources created from the `hello-world` project.  These resources are manually copied into folders for use at runtime. 

To build:

```
cd wrapper-hello-world-code
npm run build
```

To serve:

```
npm run dev
```

### `wrapper-js-code`

A reconstitution of the example shown [here](https://github.com/TypeFox/monaco-components/blob/main/packages/examples/src/wrapperTs.ts). This project uses Vite for building and bundling.

To build:

```
cd wrapper-js-code
npm run build
```

To serve:

```
npm run dev
```

