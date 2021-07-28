/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-var-requires */

const chalk = require('chalk');
const path = require('path');
const childProcess = require('child_process');

const log = console.log;

const Mode = { OK: 0, WARN: 1, ERROR: 2, INFO: 3 };

const exec = (cmd) =>
    new Promise((resolve, reject) => {
        childProcess.exec(cmd, (err) => {
            if (err) {
                log(err, Mode.ERROR);
                reject();
            }
            resolve(cmd);
        });
    });

const logger = (msg, type) => {
    switch (type) {
        case 0:
            log(`[${chalk.green('SUCCESS')}]    ${msg}`);
            break;
        case 1:
            log(`[${chalk.blue('LOG')}]  ${msg}`);
            break;
        case 2:
            log(`[${chalk.blue('ERROR')}]  ${msg}`);
            break;
        case 3:
            log(`[${chalk.greenBright.bold('FINALIZE')}]  ${msg}`);
            break;
        default:
            break;
    }
};

/**
 * Actual commands being executed.
 */
async function commands() {
    // Yarn
    logger('Installing Packages / Assets', 1);
    exec('yarn install').then(() => {
        logger('Packages Installed', 0);

        // CSS
        logger('Running Server CSS Compilers', 1);
        exec('yarn run sass').then(() => {
            logger('CSS Compiled', 0);

            // Build
            logger('Building Optimized React App', 1);
            exec('yarn run build').then(() => {
                logger('Production Build Ready', 0);

                // Custom Domain
                logger('Adding CNAME To Build', 1);
                exec('echo 4541cavineers.org > ./build/CNAME').then(() => {
                    logger('CNAME Created', 0);
                    // Finalize / Deploy
                    logger('Ready to Deploy', 1);
                    exec('yarn run publish').then(() => {
                        logger('Deployed to GH-Pages', 3);
                    });
                });
            });
        });
    });
}

commands();

// npm run tsc-checkServer && npm run tsc-checkClient && npm run prepublish && git add -f public/JS && git add -f server/JS