
/* IMPORT */

import * as absolute from 'absolute';
import * as applescript from 'applescript';
import * as openPath from 'open';
import * as path from 'path';
import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

function open ( root? ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor ? activeTextEditor.document.uri.fsPath : undefined,
        rootPath = Utils.folder.getRootPath ( editorPath );

  if ( !root && editorPath && absolute ( editorPath ) ) {

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

function openRoot () {

  open ( true );

}

/* EXPORT */

export {open, openRoot};
