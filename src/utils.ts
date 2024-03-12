
/* IMPORT */

import {exec} from 'vscode-extras';

/* MAIN */

const openInFinder = async ( folderPath: string ): Promise<void> => {

  await exec ( 'open', [folderPath] );

};

const revealInFinder = async ( filePath: string ): Promise<void> => {

  await exec ( 'open', ['-R', filePath] );

};

/* EXPORT */

export {openInFinder, revealInFinder};
