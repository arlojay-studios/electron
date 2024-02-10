'use strict';

/**
 * Module Dependencies
 * @private
 */

import type { Application, Response } from 'express';

/**
 * Webclient Setup
 * @param { Response } res
 */

export class electron {

    public page(server: Application) {
        server.get('/', (req, res: Response) => {
            res.sendFile(__dirname + '/bootstrap.html')
        })

        server.get('/js', (req, res: Response) => {
            res.sendFile(__dirname + '/page.js')
        })

        server.get('/scss', (req, res: Response) => {
            res.sendFile(__dirname + '/stylesheet.scss')
        })
    }

}