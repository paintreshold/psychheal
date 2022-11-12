 
 






let cross = document.querySelector("#nn");

let crosscondition = 5;
let condition = 5;



    cross.addEventListener('click', function() {
         

        if (crosscondition > 3) {

        document.getElementById("forma").style.visibility = "visible";
        crosscondition = crosscondition - 4;

            
           }

        
           else  {

            document.getElementById("forma").style.visibility = "hidden";
            crosscondition = crosscondition + 4;
    
    
            };
        
    });
    

 



let burger = document.querySelector(".menuSmallIcon")


burger.addEventListener('click', function() {
         

    if (condition > 3) {

    document.getElementById("burgerCale").style.transform = "translate(375px, 0px)";   
    document.getElementById("mnsmall").style.transform = "rotate(90deg)";
    document.getElementById("burgerCale").style.visibility = "visible";
     
    condition = condition - 4;

        
       }

    
       else  {

        document.getElementById("burgerCale").style.transform = "translate(0px, 0px)";
        document.getElementById("mnsmall").style.transform = "rotate(0deg)";
        document.getElementById("burgerCale").style.visibility = "hidden";
         
        condition = condition + 4;


        };
    
});

 

 
 




 