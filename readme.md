# Open in Finder

<p align="center">
  <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-finder/master/resources/logo.png" width="128" alt="Logo">
</p>

Adds a few commands for opening the current file or project in Finder.

There's already a `Files: Active File in Finder` command, but it doesn't work if there is no currently active file, in that case this extension opens the root path of the project.

## Install

Follow the instructions in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-open-in-finder), or run the following in the command palette:

```shell
ext install fabiospampinato.vscode-open-in-finder
```

## Usage

It adds 2 commands to the command palette:

```js
'Open in Finder' // Open the current file or project in Finder
'Open Root in Finder' // Open the current project in Finder
```

## License

MIT © Fabio Spampinato
