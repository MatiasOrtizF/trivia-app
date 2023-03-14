// login
const userName = document.getElementById("user-name");
const form = document.getElementById("form");
const login = document.querySelector(".login");

// select category
const selectedCategory = document.querySelector(".select-categorys");

// questions
const question = document.querySelector(".questions");

/* Select Category */
const categorys = document.querySelectorAll(".categoria");
const categorySelec = document.getElementById("categoria-seleccionada");

//question
const answers = document.querySelectorAll(".answer");
const preguntaOne = document.getElementById("question");

//answers
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");

// ranking
const viewRanking = document.getElementById("ver-ranking");
const congratulations = document.querySelector(".congratulations");
const usersList = document.querySelector(".users-list");
const backToPlay = document.getElementById("back-play");
const sorry = document.querySelector(".sorry");


/* login */
form.addEventListener("submit", e=> {
    e.preventDefault()
    if(userName.value.length>=4) {
        login.classList.add("hidden");
        selectedCategory.classList.remove("hidden");
    }
})


let contadorsss = 0;

    let categorySelected = "";

categorys.forEach((category) => category.addEventListener("click",e=> { 
    if(category.innerHTML=="Food &amp; Drink") {
        categorySelected = "food_and_drink";
    } else if(category.innerHTML=="Film &amp; Tv") {
        categorySelected = "film_and_tv";
    } else {
        categorySelected=category.innerHTML;
    }
    cargaApi();
    selectedCategory.classList.add("hidden");
    question.classList.remove("hidden");
    timerd();
    categorySelec.innerHTML = category.innerHTML;
}))



function cargaApi() {

    fetch('https://the-trivia-api.com/api/questions?limit=5&categories='+categorySelected)
    .then(response => response.json())
    .then(data => {

        console.log(data)

        if(contadorsss==5) {
            question.classList.add("hidden");
            
        }

        function preguntasRespuestas() {

    
        
        preguntaOne.innerHTML = data[contadorsss].question;
        quizNum.innerHTML=contadorsss+1;

        let listaDePreguntas = data[contadorsss].incorrectAnswers;
        correctAnswer = data[contadorsss].correctAnswer;
        listaDePreguntas.push(correctAnswer);

        let listaNumerosRandoms = [];
        while(listaNumerosRandoms.length<4) {
            let min = 0;
            let max = 3;
            let numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
            if(!listaNumerosRandoms.includes(numeroRandom)) {
                listaNumerosRandoms.push(numeroRandom);
            }

        }
        console.log(listaNumerosRandoms)

        answerA.innerHTML = listaDePreguntas[listaNumerosRandoms[0]];
        answerB.innerHTML = listaDePreguntas[listaNumerosRandoms[1]];
        answerC.innerHTML = listaDePreguntas[listaNumerosRandoms[2]];
        answerD.innerHTML = listaDePreguntas[listaNumerosRandoms[3]];
    
    }

    preguntasRespuestas();
    console.log(preguntasRespuestas(correctAnswer))

        answers.forEach((answer) => answer.addEventListener ("click", e=> {
            if(answer.innerHTML == correctAnswer) {
                console.log("correct")
                contadorsss++;
            } else {
                console.log("incorrect")
                contadorsss++;
            }
            if(contadorsss!=5) {
                preguntasRespuestas();
            }
            if(contadorsss==5) {
                question.classList.add("hidden");
                sorry.classList.remove("hidden");
            }
        }) ) 


    })

}

/* Timer */
var contadores = 0;

function timerd() {
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
    }, 60*1000);
}

/* Question */
const quizNum =  document.getElementById("quizNum");

/* congratulations */
viewRanking.addEventListener("click", e=> {
    e.preventDefault()
    congratulations.classList.add("hidden");
    usersList.classList.remove("hidden");
})  

backToPlay.addEventListener("click", e=> {
    e.preventDefault()
    sorry.classList.add("hidden");
    login.classList.remove("hidden");
})