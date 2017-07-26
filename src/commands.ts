
/* IMPORT */

import * as absolute from 'absolute';
import * as applescript from 'applescript';
import * as openPath from 'open';
import * as path from 'path';
import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

function open () {

  const {activeTextEditor} = vscode.window,
        {rootPath} = vscode.workspace,
        editorPath = activeTextEditor ? activeTextEditor.document.fileName : undefined;

  if ( editorPath && absolute ( editorPath ) ) {

    applescript.execString (`
      set thePath to POSIX file "${editorPath}"
      tell application "Finder"
        reveal thePath
        activate
      end tell
    `);

  } else if ( rootPath ) {

    openPath ( rootPath, 'Finder' );

  } else {

    vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in Finder' );

  }

}

/* EXPORT */

export {open};
