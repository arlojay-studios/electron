'use strict';

/**
 * Module Dependencies
 * @private
 */

import {Response} from 'express';

/**
 * Webclient Setup
 * @param {Application} router
 * @returns {Application}
 */
export class electron {

    public mainPage(res: Response) {
        return res.sendFile('./bootstrap.html')
    }
    
    public script(res: Response) {
        return res.sendFile('./web.ts');
    }

}