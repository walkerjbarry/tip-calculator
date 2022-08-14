     /*
     As always, there are many ways to do this. 
     Here, I have chosen a way that is very simple. 
     */ 

     function getMealValue(){
    
        let x= parseInt(document.getElementById('mealCost').value);
        
        let y=parseInt(document.getElementById('tipAmt').value);

        let z=document.getElementById('totalCost');
        z.innerHTML= (x +(x*(y/100)));
        
      }
		
		/*
		In this method, I get the values from the input fields ("...byId")//
        */

		/*
		
		let x= parseInt(document.getElementById('mealCost').value);
        let y=parseInt(document.getElementById('tipAmt').value);
        

		notice the use of "parseInt".  This ensures that the numbers (integers) input into the input fields//
        (which drop in as strings), are employed (calculated) as numbers, NOT strings.  
        Since I've chosen to use integers, and not decimals, I use .parseInt.  
        If decimals were desired, I could use.parseFloat.*/
        
        /*

		z.innerHTML=((x)+(y/x));

        This is the formula for how I arrive at the 
        meal + tip percentage to get the total cost. */