
/* IMPORT */

import {execFile} from 'node:child_process';

/* MAIN */

const openInFinder = async ( folderPath: string ): Promise<void> => {

  execFile ( 'open', [folderPath] );

};

const revealInFinder = async ( filePath: string ): Promise<void> => {

  execFile ( 'open', ['-R', filePath] );

};

/* EXPORT */

export {openInFinder, revealInFinder};
