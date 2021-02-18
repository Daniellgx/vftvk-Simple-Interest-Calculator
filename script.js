function compute()
{
     r= document.getElementById("Rate").value; 
     p = document.getElementById("principal").value;
     y= document.getElementById("years").value;
     i=(parseInt (r)*parseInt (p)*parseInt(y))/100;
     d = new Date();//to get actual date
     n = d.getFullYear() + parseInt (y);
     if(p<=0){ //condition to enter a positive number
          alert("Enter a positive number");
          return p;
      }
     //Displays message 
     document.getElementById("result").innerHTML = "If you deposit \n"+p+"$ at an interest rate of \n"+r +"% you will receive an amount of \n"+i+"$ in the year "+n
  
     
  
  

   
}

function updateSlider(slideAmount){
  
        var sliderDiv = document.getElementById("sliderAmount");
        sliderDiv.innerHTML = slideAmount;

}
        