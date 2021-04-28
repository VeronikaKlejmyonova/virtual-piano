// PIANO-KEY

const COLLECTION = document.querySelectorAll(".piano-key"); //будет находить все элементы, которые соответсвуют написанию класса
const PIANO = document.getElementById("piano");

// функция при использовании мыши
function startSound(event) {
    let key = event.target;
    let audio = document.getElementById(key.dataset.note);
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
}

// функция при использовании клавиатуры
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
}

// удаление класса active
const stopSound = (event) => {
    event.target.classList.remove("active");
}
const startCorrespondOver = (event) => {
        if (event.target.classList.contains("piano-key")) // если мой таргет будет содержать класс piano-key
        { // если это кнопка, то
            event.target.classList.add("active"); // то добавляем класс active
        }

        COLLECTION.forEach((elem) => { // метод для перебора всех элементов массива COLLECTIO
            //    window.addEventListener('keydown', playSound);
            elem.addEventListener("mousedown", startSound); // обработчик - на каждый элемент, когда мы на него нажимаем мышкой срабатывает функция startSound
            elem.addEventListener("mouseover", startSound); // обработчик - на каждый элемент, когда мы на него наводм мышкой срабатывает функция startSound 
            elem.addEventListener("mouseout", stopSound); // обработчик - на каждый элемент, когда мы с него убераем курсор срабатывает функция stopSound
        });

    } //наши кнопки должны начать реагировать на наведение мышки


const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => { // метод для перебора всех элементов массива COLLECTIO 
        elem.classList.remove("active"); // удаление у элемента класс active - элемент не активный
        //  elem.removeEventListener('mouseleave', stopSound);
        elem.removeEventListener('keydown', stopSound);
        elem.removeEventListener("mouseout", stopSound); // когда мы убераем курсор с кнопки появл mouseout
        elem.removeEventListener("mouseover", startSound); // когда мы наводм на кнопку появл mouseover
    });
}

//mouseover навести курсором
//mouseout убран курсор
//mousedown Кнопка мыши нажата 
//mouseup  Кнопка отпущена над элементом
//mouseleave происходит, когда курсор покидает элемент
//keydown  При  нажатии клавиши
//keyup клавишу отпускают
PIANO.addEventListener("mousedown", startCorrespondOver);
document.addEventListener("mouseup", stopCorrespondOver);
//PIANO.addEventListener("mouseleave", stopCorrespondOver);
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', stopCorrespondOver);


// FULLSCREEN
const bt = document.querySelector('#fullscreen');

bt.addEventListener('click', event => {
    event = document.documentElement;
    if (event.requestFullscreen) {
        event.requestFullscreen(); // W3C spec
    } else if (event.mozRequestFullScreen) {
        event.mozRequestFullScreen(); // Firefox
    } else if (event.webkitRequestFullscreen) {
        event.webkitRequestFullscreen(); // Safari
    } else if (event.msRequestFullscreen) {
        event.msRequestFullscreen(); // IE/Edge
    }

    if (document.fullscreenElement) {
        deactivateFullscreen();
    }
});

///function activateFullscreen(event) {};

function deactivateFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
};