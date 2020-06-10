// Didn't do anything time-related
document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll('button')
    const pauseButton = document.querySelector("#pause");  
    pauseButton.addEventListener("click", (e) => {
    //   do this for every button
      for (let button in buttons) {
          turnOffButton(e, button);
          };
    //  currently only edits the pause button itself
      
    });
//     quoteDiv.append(quoteText, quoteButton, quoteImage);
//     quotesList.append(quoteDiv);
//   }

  function turnOffButton(event, button) {
    event.preventDefault();
      event.target.innerText = "button paused";
    }
    
    // find the minus button & counter elements
    const minusButton = document.querySelector('#minus');
    const counter = document.querySelector('#counter');
    // event listener on button click
    minusButton.addEventListener('click', () => {
        // extracts value of counter and increments 
        const counterValue = parseInt(counter.innerText) - 1;
        counter.innerText = counterValue;
    });
    // find the plus button
    const plusButton = document.querySelector('#plus');
    // event listener on button click
    plusButton.addEventListener('click', () => {
        // extracts value of counter and increments 
        const counterValue = parseInt(counter.innerText) + 1;
        counter.innerText = counterValue
        
    });
    
    // find the heart button
    const heartButton = document.querySelector('#heart');
    // event listener on button click
    heartButton.addEventListener('click', () => {
        // grabs current counter number
        const currentCounterNumber = document.querySelector('#counter').innerText;
        // checks if currentcounterNumber has an li, if no, it will start likes at 0, if yes, will add one more like 
        const counterNumberLiIfExists = document.getElementById(currentCounterNumber);
        
        if (!counterNumberLiIfExists) {
            // creates an li for the number showing on the counter
            const counterNumberLi = document.createElement("li");
            // adds counter number & gives li an id
            counterNumberLi.innerHTML = `Counter Number: ${currentCounterNumber}, Likes: `;
            counterNumberLi.id = currentCounterNumber;
            // creates div for likes and defaults to 0,
            const likesDiv = document.createElement("div");
            likesDiv.textContent = "0";
            // appends div to li
            counterNumberLi.appendChild(likesDiv);
            // appends li to ul 
            const likesUl = document.querySelector('.likes');
            likesUl.appendChild(counterNumberLi)
        } else {
            // grab current number of likes
            likesDiv = counterNumberLiIfExists.childNodes[1];
            // increment by 1 
            currentLikes =  parseInt(likesDiv.innerText) + 1;
            // add back to div
            likesDiv.innerText = currentLikes;
        };
    });

    
    

});