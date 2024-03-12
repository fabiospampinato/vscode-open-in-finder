
/* IMPORT */

import {alert, getActiveFilePath, getProjectRootPath} from 'vscode-extras';
import {openInFinder, revealInFinder} from './utils';

/* MAIN */

const open = async (): Promise<void> => {

  const filePath = getActiveFilePath ();

  if ( filePath ) {

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

    alert.error ( 'You have to open a project or file before opening it in Finder' );

  }

};

/* EXPORT */

export {open, openRoot};
