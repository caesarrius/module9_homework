function useRequest(callback) {
    const value = document.querySelector('input').value;
    const reUrl = 'https://picsum.photos/v2/list?limit=' + value;
     
    let xhr = new XMLHttpRequest();
    xhr.open('GET', reUrl, true);
   
    xhr.onload =  function() {
       if (!(value >= 1 && value <= 10)) {
        const resultNode = document.querySelector('.result');
        const error = '<p class="errorText">Number outside the range from 1 to 10</p>';
        resultNode.innerHTML = error;
       } else {
         const result = JSON.parse(xhr.response);
         if (callback) {
          callback(result);
         }
       }
    }
     xhr.send();
}
 
function displayResult(apiData) {
  const resultNode = document.querySelector('.result');
    let cards = ''
    apiData.forEach(item => {
       const cardBlock = `
           <div class = 'card'>
             <img src='${item.download_url}' class = 'card-image'/>
           </div> `;
        cards = cards + cardBlock;    
    });
    
    resultNode.innerHTML = cards;
}
   
const request = document.querySelector('.request');
request.addEventListener('click', () => {
    useRequest(displayResult);
});