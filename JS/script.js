console.log('Welcome to Palindrome Checker');

const btnCheck = document.querySelector("button");
const str = document.querySelector("input");

btnCheck.addEventListener('click', (e) => {
    e.preventDefault();

    const inputWord = str.value.toLocaleLowerCase();
    const string = inputWord.split("");

    const revString = string.reverse();
    const joinString = revString.join("");

    if (inputWord == joinString) {
        document.querySelector(".output-text").innerHTML = `<div>
                                                              <p class="text-center" style="font-size: 1rem; color: black;">${inputWord} = ${joinString}</p>
                                                              <p class="text-center text-success" style="font-size: 1.5rem; color: black;">It is a Palindrome !!</p>`;

        str.value = "";
    } else {
        document.querySelector(".output-text").innerHTML = ` <p class="text-center text-danger my-5" style="font-size: 1.25rem; color: black;">It is not a Palindrome !!</p>`;
    }
    
    setTimeout(() => {
        window.location.reload();
    }, 1500);
});
