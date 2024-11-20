var Name = document.querySelector(".name");
var subname = document.querySelector(".subname");
var btn = document.querySelector(".clickhere");
var entername = document.getElementById("1");

var flag = 0; 
const toggeleFun=()=>{
  if (entername.value.trim() === "") {
    btn.disabled = true; // Disable button if input is empty
  } else {
    btn.disabled = false; // Enable button if input has value
  }
}

entername.addEventListener("input", toggeleFun);

btn.addEventListener("click", function () {
    
  
    if (flag === 0) {
        
        Name.innerHTML = "Hey Hi " + entername.value;
        subname.innerHTML = "Enter Your Partner Name";
        entername.value = "";
       toggeleFun()
        flag = 1; 
    } else {
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1; 
        
        document.body.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
           <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>love score</title>
              <link rel="stylesheet" href="lovescore.css">
            </head>
            <body>
             <h1>Your Love Score is: ${loveScore}%</h1>
            </body>
</html>`;
    }


});
