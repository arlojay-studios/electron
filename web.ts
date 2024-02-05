'use strict';

/**
 * Module Dependencies
 * @private
 */

import type { Response } from 'express';

/**
 * Webclient Setup
 * @param {Response} res
 */

export class electron {

    public mainPage(res: Response) {
        res.sendFile('./bootstrap.html')
    }
    
    public script(res: Response) {
        res.sendFile('./web.ts');
    }

}