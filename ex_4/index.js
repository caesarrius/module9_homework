const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

btnNode.addEventListener("click", () => {
    const firstValue = document.querySelector('#width').value;
    const secondValue = document.querySelector('#height').value;

    if ((firstValue >= 100 && firstValue <= 300) 
    && (secondValue >= 100 && secondValue <= 300)) {
       fetch(`https://picsum.photos/${firstValue}/${secondValue}`)
        .then((response) => {
            resultNode.innerHTML = `<img src ="${response.url}">`;
        })
        .catch((error) => console.log(error));
    } else {
        const error = '<p class="errorText">One of the numbers outside the range from 100 to 300</p>';
        resultNode.innerHTML = error;
    }
});