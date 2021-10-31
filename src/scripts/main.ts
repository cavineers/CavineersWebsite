import * as ScrollMagic from 'react-scrollmagic';
import { Scene } from 'react-scrollmagic';
/* eslint-disable no-new */
export class Main {
    /**
     * Returns to the main home page.
     */
    public static returnToMain() {
        sessionStorage.clear();
        window.location.replace('/');
    }

    /**
     * Opens the sidebar.
     */
    public static openSide() {
        (<HTMLInputElement>document.getElementById('side-menu')).style.width = '250px';
    }

    /**
     * Closes the sidebar.
     */
    public static closeSide() {
        (<HTMLInputElement>document.getElementById('side-menu')).style.width = '0px';
    }

    /* ---------------------------- About Animations ---------------------------- */

    public static animations(props: any) {
        if (window.location.hash === '#/about#Covid') {
            document.getElementById('Covid')?.scrollIntoView();
        }

        const css = document.createElement('style');
        css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
        document.body.appendChild(css);

        const headSection = document.querySelector('.introSec');
        const secondSection = document.querySelector('.secondSec');

        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            document.body.style.overflow = 'auto';
            (<HTMLInputElement>headSection).style.animation = 'backgroundAnimation 0.90s linear';
            (<HTMLInputElement>headSection).style.animationFillMode = 'forwards';
            (<HTMLInputElement>secondSection).style.animation = 'backgroundAnimationRev 0.90s linear';
            (<HTMLInputElement>secondSection).style.animationFillMode = 'forwards';
            (<HTMLInputElement>document.getElementById('num')).style.animation = 'changeColorToWhite 0.60s linear';
            (<HTMLInputElement>document.getElementById('num')).style.animationFillMode = 'forwards';
            (<HTMLInputElement>document.getElementById('name')).style.animation = 'changeColorToWhite 0.60s linear';
            (<HTMLInputElement>document.getElementById('name')).style.animationFillMode = 'forwards';
            (<HTMLInputElement>document.getElementById('introTextCont')).style.animation = 'changeColorToWhite 0.60s linear';
            (<HTMLInputElement>document.getElementById('introTextCont')).style.animationFillMode = 'forwards';
        }, 2700);

        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }
}
