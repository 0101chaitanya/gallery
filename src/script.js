import css from './style.css';

(function() {
    const images = Array.from(document.querySelectorAll('img'));
    console.log(document.querySelector(`[alt="image1"]`));
    let i = 1;
    let timeOt;

    function show(i) {
        document
            .querySelector(`[alt="image${i}"]`)
            .classList.add('enable');
        time();
    }
    show(i);

    function time() {
        timeOt = setTimeout(() => {
            document
                .querySelector(`img[alt=image${i}`)
                .classList.remove('enable');
            // console.log(i);
            i = i < 5 ? i + 1 : 1;
            show(i);
        }, 5000);
    }
    let bubbles = document.querySelectorAll('#circleSet>span');
    bubbles.forEach((bubble, index) => {
        bubble.addEventListener('click', (e) => {
            document
                .querySelector(`img[alt=image${i}`)
                .classList.remove('enable');
            clearTimeout(timeOt);
            show(index + 1);
            i = index + 1;
        });
    });
    let left = document.querySelector('#left>span');
    left.addEventListener('click', (e) => {
        document
            .querySelector(`img[alt=image${i}`)
            .classList.remove('enable');
        clearTimeout(timeOt);
        i = i >= 2 ? i - 1 : 5;
        show(i);
        console.log(i);
    });
    let right = document.querySelector('#right>span');
    console.log(left, right);
    right.addEventListener('click', (e) => {
        document
            .querySelector(`img[alt=image${i}`)
            .classList.remove('enable');
        clearTimeout(timeOt);
        i = i <= 4 ? i + 1 : 1;
        show(i);

        console.log(i);
    });
})();