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

## Hints

- **Shortcut**: you might want to map the default shortcut for the `Reveal Active File in Finder` action to this extension, add this to your `keybindings.json` file:
```json
  { "key": "cmd+k r", "command": "openInFinder.open" }
```

## Contributing

If you found a problem, or have a feature request, please open an [issue](https://github.com/fabiospampinato/vscode-open-in-finder/issues) about it.

If you want to make a pull request you can debug the extension using [Debug Launcher](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-debug-launcher).

## License

MIT © Fabio Spampinato
