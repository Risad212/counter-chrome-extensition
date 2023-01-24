let markUp = `
<html lang="en">
<head>
    <title>counter app</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet">
</head>
<body>
    
     <div class="counter-container">
        <button class="minus">-1</button>
         <h3 class="value">count: 0</h3>
        <button class="plus">+1</button>
    </div>
</body>
</html>
`

document.documentElement.innerHTML = markUp



let counterDisplayElem = document.querySelector('.value');
let counterMinusElem = document.querySelector('.minus');
let counterPlusElem = document.querySelector('.plus');


chrome.storage.sync.get('value', function(data){
    let res = data.value;  
    modifyPlus(res)
    modifyMinus(res)
    updateDisplay(res);
})

function modifyPlus(count){
    counterPlusElem.addEventListener("click",()=>{
        count++;
        chrome.storage.sync.set({'value': count}, function(){
            updateDisplay(count);
        });
    }) ;
}

function modifyMinus(count){
    counterMinusElem.addEventListener("click",()=>{
        if(count > 0){
            count--;
            chrome.storage.sync.set({'value': count}, function(){
                updateDisplay(count);
            });
        }
    });
}


function updateDisplay(data){
    counterDisplayElem.innerHTML = `count: ${data?data: 0}`;
};








