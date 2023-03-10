const btnNode = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

const localData = localStorage.getItem('url', 'data');
if (localData) {
    displayResult(JSON.parse(localData));
}

function displayResult(data) {
    const resultNode = document.querySelector('.result');
    let cards = ''
    data.forEach(item => {
       const cardBlock = `
           <div class = 'card'>
             <img src='${item.download_url}' class='card-image'/>
           </div> `;
        cards = cards + cardBlock;    
    });
    
    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    const value1 = +document.querySelector('#page').value;
    const value2 = +document.querySelector('#limit').value;

    if (!(value1 >=1 && value1 <=10) && (value2 >=1 && value2 <=10)) {
        resultNode.innerHTML = '<p class="errorText">Page number out of range from 1 to 10</p>'
        return;
    } 
    else if (!(value2 >=1 && value2 <=10) && (value1 >=1 && value1 <=10)) {
        resultNode.innerHTML = '<p class="errorText">Limit out of range from 1 to 10</p>'
        return;
    } 
    else if (!(value1 >=1 && value1 <=10) && !(value2 >=1 && value2 <=10)) {
        resultNode.innerHTML = '<p class="errorText">Page number and limit out of range from 1 to 10</p>'
        return;
    }

    fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
        .then((response) => {
            console.log("response", response);
            result = response.json();
            return result;
        })
        .then((data) => {
            displayResult(data);
            console.log(data);
            localStorage.setItem('url', JSON.stringify(data));
        })
            
});