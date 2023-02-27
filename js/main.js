const userName = document.getElementById("user-name");
const form = document.getElementById("form");

const login = document.querySelector(".login");
const selectedCategory = document.querySelector(".select-categorys");
const question = document.querySelector(".question");
const verRanking = document.getElementById("ver-ranking");
const congratulations = document.querySelector(".congratulations");
const usersList = document.querySelector(".users-list")

/* login */
form.addEventListener("submit", e=> {
    e.preventDefault()
    if(userName.value.length>=4) {
        login.classList.add("hidden");
        selectedCategory.classList.remove("hidden");
    }
})


/* Select Category */
const deportes = document.getElementById("deporte");
const videosJuegos = document.getElementById("videos-juegos");
const historia = document.getElementById("historia");
const seriesPeliculas = document.getElementById("series-peliculas");

deportes.addEventListener("click", e=> {
    e.preventDefault()
    selectedCategory.classList.add("hidden");
    question.classList.remove("hidden");
})
videosJuegos.addEventListener("click", e=> {
    e.preventDefault()
    selectedCategory.classList.add("hidden");
    question.classList.remove("hidden");
})
historia.addEventListener("click", e=> {
    e.preventDefault()
    selectedCategory.classList.add("hidden");
    question.classList.remove("hidden");
})
seriesPeliculas.addEventListener("click", e=> {
    e.preventDefault()
    selectedCategory.classList.add("hidden");
    question.classList.remove("hidden");
})


/* Question */

/*opcions*/ 
const opcionesA = document.querySelectorAll(".a");
const opcionesB = document.querySelectorAll(".b");
const opcionesC = document.querySelectorAll(".c");
const opcionesD = document.querySelectorAll(".d");

/*questions*/
const pregunta1 = document.querySelector(".preguntaNumero1");
const pregunta2 = document.querySelector(".preguntaNumero2");
const pregunta3 = document.querySelector(".preguntaNumero3");
const pregunta4 = document.querySelector(".preguntaNumero4");
const pregunta5 = document.querySelector(".preguntaNumero5");

const quizNum =  document.getElementById("quizNum");
const questionsAnswered = document.querySelectorAll(".answered");
quizNum.innerHTML = questionsAnswered.length+1;

let cont = 1;
console.log(quizNum.innerHTML)

opcionesA.forEach((opcionA) => opcionA.addEventListener("click", e=> {
    e.preventDefault()
    console.log("selecciono opcion A")
    // pregunta1.classList.add("answered");
    // const questionsAnswered = document.querySelectorAll(".answered");
    // quizNum.innerText = questionsAnswered.length;
    // console.log(quizNum.innerHTML)
    if(!pregunta1.classList.contains("answered")) {
        pregunta1.classList.add("hidden");
        pregunta1.classList.add("answered");
        pregunta2.classList.remove("hidden");
        quizNum.innerText = 2;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta2.classList.contains("answered")) {
        pregunta2.classList.add("hidden");
        pregunta2.classList.add("answered");
        pregunta3.classList.remove("hidden");
        quizNum.innerText = 3;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta3.classList.contains("answered")) {
        pregunta3.classList.add("hidden");
        pregunta3.classList.add("answered");
        pregunta4.classList.remove("hidden");
        quizNum.innerText = 4;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta4.classList.contains("answered")) {
        pregunta4.classList.add("hidden");
        pregunta4.classList.add("answered");
        pregunta5.classList.remove("hidden");
        quizNum.innerText = 5;
        console.log(quizNum.innerHTML)
    }    
    else if(!pregunta5.classList.contains("answered")) {
        pregunta5.classList.add("hidden");
        pregunta5.classList.add("answered");
        question.classList.add("hidden");
        congratulations.classList.remove("hidden");
    }
}))


opcionesB.forEach((opcionB) => opcionB.addEventListener("click", e=> {
    e.preventDefault()
    console.log("selecciono opcion A")
    // pregunta1.classList.add("answered");
    // const questionsAnswered = document.querySelectorAll(".answered");
    // quizNum.innerText = questionsAnswered.length;
    // console.log(quizNum.innerHTML)
    if(!pregunta1.classList.contains("answered")) {
        pregunta1.classList.add("hidden");
        pregunta1.classList.add("answered");
        pregunta2.classList.remove("hidden");
        quizNum.innerText = 2;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta2.classList.contains("answered")) {
        pregunta2.classList.add("hidden");
        pregunta2.classList.add("answered");
        pregunta3.classList.remove("hidden");
        quizNum.innerText = 3;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta3.classList.contains("answered")) {
        pregunta3.classList.add("hidden");
        pregunta3.classList.add("answered");
        pregunta4.classList.remove("hidden");
        quizNum.innerText = 4;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta4.classList.contains("answered")) {
        pregunta4.classList.add("hidden");
        pregunta4.classList.add("answered");
        pregunta5.classList.remove("hidden");
        quizNum.innerText = 5;
        console.log(quizNum.innerHTML)
    }    
    else if(!pregunta5.classList.contains("answered")) {
        pregunta5.classList.add("hidden");
        pregunta5.classList.add("answered");
        question.classList.add("hidden");
        congratulations.classList.remove("hidden");
    }
}))

opcionesC.forEach((opcionC) => opcionC.addEventListener("click", e=> {
    e.preventDefault()
    console.log("selecciono opcion A")
    if(!pregunta1.classList.contains("answered")) {
        pregunta1.classList.add("hidden");
        pregunta1.classList.add("answered");
        pregunta2.classList.remove("hidden");
        quizNum.innerText = 2;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta2.classList.contains("answered")) {
        pregunta2.classList.add("hidden");
        pregunta2.classList.add("answered");
        pregunta3.classList.remove("hidden");
        quizNum.innerText = 3;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta3.classList.contains("answered")) {
        pregunta3.classList.add("hidden");
        pregunta3.classList.add("answered");
        pregunta4.classList.remove("hidden");
        quizNum.innerText = 4;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta4.classList.contains("answered")) {
        pregunta4.classList.add("hidden");
        pregunta4.classList.add("answered");
        pregunta5.classList.remove("hidden");
        quizNum.innerText = 5;
        console.log(quizNum.innerHTML)
    }    
    else if(!pregunta5.classList.contains("answered")) {
        pregunta5.classList.add("hidden");
        pregunta5.classList.add("answered");
        question.classList.add("hidden");
        congratulations.classList.remove("hidden");
    }
}))

opcionesD.forEach((opcionD) => opcionD.addEventListener("click", e=> {
    e.preventDefault()
    console.log("selecciono opcion A")
    if(!pregunta1.classList.contains("answered")) {
        pregunta1.classList.add("hidden");
        pregunta1.classList.add("answered");
        pregunta2.classList.remove("hidden");
        quizNum.innerText = 2;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta2.classList.contains("answered")) {
        pregunta2.classList.add("hidden");
        pregunta2.classList.add("answered");
        pregunta3.classList.remove("hidden");
        quizNum.innerText = 3;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta3.classList.contains("answered")) {
        pregunta3.classList.add("hidden");
        pregunta3.classList.add("answered");
        pregunta4.classList.remove("hidden");
        quizNum.innerText = 4;
        console.log(quizNum.innerHTML)
    }
    else if(!pregunta4.classList.contains("answered")) {
        pregunta4.classList.add("hidden");
        pregunta4.classList.add("answered");
        pregunta5.classList.remove("hidden");
        quizNum.innerText = 5;
        console.log(quizNum.innerHTML)
    }    
    else if(!pregunta5.classList.contains("answered")) {
        pregunta5.classList.add("hidden");
        pregunta5.classList.add("answered");
        question.classList.add("hidden");
        congratulations.classList.remove("hidden");
    }
}))


/*contador*/

var contadores = 0;

var timer = setInterval(() => {
    const seconds = document.getElementById("seconds");
    seconds.innerHTML = contadores+1;
    contadores++;
    console.log(contadores);
    if(contadores==60) {
        question.classList.add("hidden");
        congratulations.classList.remove("hidden");
    }
}, 1000);

setTimeout(() => {
    clearInterval(timer);
},60 * 1000);

/* congratulations */


verRanking.addEventListener("click", e=> {
    e.preventDefault()
    congratulations.classList.add("hidden");
    usersList.classList.remove("hidden");
})



