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
            elem.addEventListener("mousedown", startSound); // обработчик - на каждый элемент, когда мы на него нажимаем мышкой срабатывает функция startSound
            elem.addEventListener("mouseover", startSound); // обработчик - на каждый элемент, когда мы на него наводм мышкой срабатывает функция startSound 
            elem.addEventListener("mouseout", stopSound); // обработчик - на каждый элемент, когда мы с него убераем курсор срабатывает функция stopSound
        });

    } //наши кнопки должны начать реагировать на наведение мышки


const stopCorrespondOver = () => {
    COLLECTION.forEach((elem) => { // метод для перебора всех элементов массива COLLECTIO 
        elem.classList.remove("active"); // удаление у элемента класс active - элемент не активный
        elem.removeEventListener("mouseout", stopSound); // когда мы убераем курсор с кнопки появл mouseout
        elem.removeEventListener("mouseover", startSound); // когда мы наводм на кнопку появл mouseover
    });
}


PIANO.addEventListener("mousedown", startCorrespondOver);
document.addEventListener("mouseup", stopCorrespondOver);