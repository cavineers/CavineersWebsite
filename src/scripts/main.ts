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
        const TxtRotate = function (this: any, el: any, toRotate: any, period: any) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function () {
            const i = this.loopNum % this.toRotate.length;
            const fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const that = this;
            let delta = 300 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(() => {
                that.tick();
            }, delta);
        };

        const elements = document.getElementsByClassName('txt-rotate');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-rotate');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                // @ts-ignore
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        const css = document.createElement('style');
        css.type = 'text/css';
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
