# 9/14/2023

- I noticed today that the code that is generated by `yo langium` uses an older version of `monaco-editor-wrapper` (from 12/22) than do the examples that are provided in the Typefox repo (https://github.com/TypeFox/monaco-components/tree/main/packages/examples/src/langium)

- Upgrading the hello-world project to use the latest `monaco-editor-wrapper` with latest  `monaco-editor-workers` without changing the setup code seems to work.