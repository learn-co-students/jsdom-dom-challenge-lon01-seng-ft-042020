// DOM Elements
let seconds = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let pause = document.querySelector('#pause')
let submit = document.querySelector('#submit')

// create increment timer
const createSecondsIncrementor = setInterval(function () {
    seconds.innerText++; 
}, 1000)

// // create minus button
function decrement() {seconds.innerText--}
minus.addEventListener('click', function(event) {decrement()})

// // // create plus button
// function increment() {seconds.innerText++}
// plus.addEventListener('click', function(event) {increment()})

// pause.addEventListener('click', function(event) {
// if (pause.innerText === "pause") {
//     pause.innerText = "resume";
//     clearInterval(createSecondsIncrementor)
//     minus.disabled = true;
//     plus.disabled = true;
//     submit.disabled = true;
//     }
// else {
//     const createSecondsIncrementor = setInterval(function() {seconds.innerText++;}, 1000);
//     pause.innerText = "pause"
//     minus.disabled = false;
//     plus.disabled = false;
//     submit.disabled = false;
// }
// }
// )

pause.addEventListener("click", function(e){
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
        clearInterval(createSecondsIncrementor)
        
        plus.disabled = true;
        minus.disabled = true;
        submit.disabled = true;
    }
    else {
        count = setInterval(function () {
            seconds.innerText++; 
        }, 1000);
        pause.innerText = "pause"

        plus.disabled = false;
        minus.disabled = false;
        submit.disabled = false;
    }
});

//  create a submit button, that adds comments to thr comments section
// define the submit button
// const submit = document.querySelector('#submit')
submit.addEventListener('click', function(event) {
    let comment = document.querySelector('#comment-input').value
    const submit = document.querySelector('#submit')
    event.preventDefault()
    const commentList = document.querySelector('#list')
    commentList.innerHTML += `<li>${comment}</li>`
    document.querySelector("#comment-form").reset();
})
