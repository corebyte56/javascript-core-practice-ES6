const filterInput = document.getElementById("filterInput");
const filterBtn = document.getElementById("filterBtn");
const output = document.getElementById("output");




filterBtn.addEventListener('click', function(e){
    e.preventDefault();
    let inputValue = filterInput.value;
    if(inputValue.length === 0){
        output.innerText = "Please enter numbers!";
        return; 
    }
    let numbers = inputValue.split(",").map(Number);
    
    let result = numbers.filter(num => num % 2 === 0);
    
      if(result.length === 0){
        output.innerText = "No even numbers found";
    }else{
        output.innerText = "Even Numbers: " + result.join(", ");
    }

})

