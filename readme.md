# `stab-at-lang-editor`

This project is a prototype for running an editor and language server, that was generated by Langium, in a browser.  The idea is to wrap the editor in a Lit WebComponent so that it can be packaged for reuse.

## Project Structure

This project uses an `npm` workspace.  The projects contained in the workspace are in the `packages` folder. The project consists of:

### `hello-world`

A small Langium language server/editor project that implements a simple "HelloWorld" grammar.  When you build this project, it is configured to produce a web worker that can be used in the browser to move the language server from a Node backend into the browser itself, eliminating the need for a server-based language server.

### `wrapper-js-html`

A reconstitution of the example shown [here](https://github.com/TypeFox/monaco-components/blob/main/packages/examples/verify_wrapper.html). 

### `wrapper-js-code`

A reconstitution of the example shown [here](https://github.com/TypeFox/monaco-components/blob/main/packages/examples/src/wrapperTs.ts)

### `hello-world-lit`

The eventual Lit component project that will wrap the `hello-world` language.

