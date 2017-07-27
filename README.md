# VSC Open in Finder

<p align="center">
	<img src="https://raw.githubusercontent.com/fabiospampinato/vscode-open-in-finder/master/resources/logo-128x128.png" alt="Logo">
</p>

Adds a command for opening the current file or project in Finder.

There's already a `Files: Active File in Finder` command, but it doesn't work if there is no currently active file, in that case this extension opens the root path of the project.

## Install

Run the following in the command palette:

```shell
ext install vscode-open-in-finder
```

## Usage

It adds 1 command to the command palette:

```js
'Open in Finder' // Opens the current file/project in Terminal
```

### Keyboard Shortcut

Use the following to embed a shortcut in keybindings.json. Replace with your preferred key bindings.

```json
{
  "key": "ctrl+cmd+f",
  "command": "openInFinder.open",
  "when": "editorFocus"
}
```

## License

MIT © Fabio Spampinato
