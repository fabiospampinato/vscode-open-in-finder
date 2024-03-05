
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'openInFinder.open', Commands.open );
  vscode.commands.registerCommand ( 'openInFinder.openRoot', Commands.openRoot );

};

/* EXPORT */

export {activate};
