
// Requires page to load so start off with DOMContentLoaded eventListener.
document.addEventListener('DOMContentLoaded', (e) => {
    
    let count = 0
    let likeTable = {}
    let counter = document.querySelector("#counter")
    const likes = document.querySelector(".likes")
    const heart = document.querySelector("#heart")
    const submit = document.querySelector("#submit")
    const pause = document.querySelector("#pause")
    const minus = document.querySelector("#minus")
    const comment = document.querySelector("#comment-input")
    const commentBlock = document.querySelector(".comments")
    // because you'll need to display the timer once the page has loaded, you'll need setInterval
    // which needs to increment by the second. As this number will change, it must be a let NOT A const
    let timer = setInterval(() => {
        counter.innerHTML++;
    }, 1000);
    
    // retrieve - button from DOM, assign it to a const variable
    // addEventListener to decrement (-) the counter when the "-" button is pressed.
    minus.addEventListener('click', (e) => {
        counter.innerHTML--;
    })
    
    // retrieve + button from DOM, assign it to a const variable
    // addEventListener to increment (+) the counter when the "+" button is pressed.
    const plus = document.querySelector("#plus")
    plus.addEventListener('click', (e) => {
        counter.innerHTML++;
    })
    
    // retrieve the 'like' button and add an addEventListener (maybe click?)
    // figure out how to record the likes - consider "making a dictionary to keep track of how many likes are entered"
    // create an empty object that will hold/count likes per number 
    // should be able to record when a new number takes in its first "like"
    // li should be modified with incrementing likes per number
    
    
    heart.addEventListener('click', (e) => {
        // add a command that looks for a number, if number is not in table then it starts from 1
        if(likeTable[counter.innerHTML] === undefined){
            likeTable[counter.innerHTML] = 1;
        } else {
            // if number exists then increment by 1
            likeTable[counter.innerHTML] += 1;
        }
            // reset likes list to nothing
            likes.innerHTML = " ";

            // in likeTable, go over each key, make an li for it with the correct value and append
            Object.keys(likeTable).forEach(function (key) {
                let numberOfLikes = likeTable[key];
                const li = document.createElement("li")
                li.innerText = `${key} has been liked ${numberOfLikes} times.`;
                likes.append(li)         
            
        })

    })
    
    // retrieve the 'pause' button, assign it to const variable and add an addEventListener (likely click)
    // when the button is pressed, all other buttons should disable, counter should stop or pause
    // setInterval should have an ID (assign it to a variable) and pass the variable name to clearInterval
    // button should then change from pause to 'resume'
    // const resume = document.querySelector("#resume")
    pause.addEventListener('click', function(e) {
        if (pause.innerText === "pause"){
            clearInterval(timer)
            
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
            pause.innerText = "resume"
            // pause.id = "resume"
        }
        // retrieve resume?
        // (add another addEventListener to resume?)
        // when 'resume' is pressed, it should reset counter and re-enable the buttons
        else {
            timer = setInterval(function(e) {
                counter.innerHTML++;}, 1000);
                minus.disabled = false
                plus.disabled = false
                heart.disabled = false
                submit.disabled = false
                pause.innerText = "pause"
                // resume.id = "pause"
            }
            
        // addEventListener for submit
            submit.addEventListener('click', function(e) {
                e.preventDefault();
                let text = comment.value

                const li = document.createElement("li");
                li.innerText = `${text}`;
                commentBlock.append(li);
                
                
                })
                
        
});
































})