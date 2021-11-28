export class Main {
    static returnToMain() {
        sessionStorage.clear();
        window.location.replace('/');
    }
    static openSide() {
        document.getElementById('side-menu').style.width = '250px';
    }
    static closeSide() {
        document.getElementById('side-menu').style.width = '0px';
    }
    static animations(props) {
        var _a;
        if (window.location.hash === '#/about#Covid') {
            (_a = document.getElementById('Covid')) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
        }
        const css = document.createElement('style');
        css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
        document.body.appendChild(css);
        const headSection = document.querySelector('.introSec');
        const secondSection = document.querySelector('.secondSec');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            headSection.style.animation = 'backgroundAnimation 1.0s linear';
            headSection.style.animationFillMode = 'forwards';
            secondSection.style.animation = 'backgroundAnimationRev 1.0s linear';
            secondSection.style.animationFillMode = 'forwards';
            document.getElementById('num').style.animation = 'changeColorToWhite 0.90s linear';
            document.getElementById('num').style.animationFillMode = 'forwards';
            document.getElementById('name').style.animation = 'changeColorToWhite 0.90s linear';
            document.getElementById('name').style.animationFillMode = 'forwards';
            document.getElementById('introTextCont').style.animation = 'changeColorToWhite 0.90s linear';
            document.getElementById('introTextCont').style.animationFillMode = 'forwards';
        }, 2700);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }
}
