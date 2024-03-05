
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';
import {getProjectRootPath} from 'vscode-extras';
import {openInFinder, revealInFinder} from './utils';

/* MAIN */

const open = async (): Promise<void> => {

  const filePath = vscode.window.activeTextEditor?.document.uri.fsPath;

  if ( filePath && fs.existsSync ( filePath ) ) {

    await revealInFinder ( filePath );

  } else {

    await openRoot ();

  }

};

const openRoot = async (): Promise<void> => {

  const rootPath = getProjectRootPath ();

  if ( rootPath ) {

    await openInFinder ( rootPath );

  } else {

    vscode.window.showErrorMessage ( 'You have to open a project or file before opening it in Finder' );

  }

};

/* EXPORT */

export {open, openRoot};
