function opennav(){
    document.getElementById("navmenu").style.display = "flex";
}



//vehicules //

var v1 = "Moto";
var v2 = "Compact";
var v3 = "Citadine";
var v4 = "Berlin/automatique";
var v5 = "Utilitaire";
var v6 = "Trucks/automatique";
var v7 = "Heavy Machines";


var f1 = "essance";
var f2 = "diesel";
var f3 = "hybride";
var f4 = "electrique";



function select(){

    
    var choice = document.getElementById("vehicule");
    var selectedchoice = choice.options[choice.selectedIndex].text;
  


    var f = document.getElementById("fuel");
    var selectedf = f.options[f.selectedIndex].text;

    
    ///moto//////////
    if(selectedchoice == v1){

        document.getElementById("e").style.display = "block";
        document.getElementById("d").style.display = "none";
        document.getElementById("h").style.display = "none";
        document.getElementById("el").style.display = "block";
        
        if (selectedf == f1){
               var days = window.prompt("how much days : ");
               var price = (1.4000000000000001 + 10); 
               window.priceholder.value = price + "$";
        }else if(selectedf == f4){
            var days = window.prompt("how much days : ");
            price = (0.5 + 10) * days;
            window.priceholder.value = price + "$";
        }
        
      /////compact///////////
    }else if(selectedchoice == v2){
        document.getElementById("el").style.display = "none";
        document.getElementById("e").style.display = "block";
        document.getElementById("h").style.display = "block";
        document.getElementById("d").style.display = "block";

        if (selectedf == f3){
        var days = window.prompt("how much days : ");
        price = (1.26 + 14) * days; 
        window.priceholder.value = price + "$";

        }else if(selectedf == f1){
        var days = window.prompt("how much days : ")
        price = (1.9600000000000002 + 14) * days;  
        window.priceholder.value = price + "$";
        
        

        }else if(selectedf == f2){
        var days = window.prompt("how much days : ")
        price = (2.94 + 14) * days;
        window.priceholder.value = price + "$";
        }

        
     ///////citadine/////
    }else if (selectedchoice == v3) {
        document.getElementById("e").style.display = "block";
        document.getElementById("d").style.display = "block";
        document.getElementById("h").style.display = "block";
        document.getElementById("el").style.display = "block";

        if (selectedf == f3){
            var days = window.prompt("how much days : ")
            price = (1.08 + 12) * days; 
            window.priceholder.value = price + "$";

        }else if(selectedf == f1) {
            var days = window.prompt("how much days : ")
            price = (1.6800000000000002 + 12) * days; 
            window.priceholder.value = price + "$";

        }else if(selectedf == f2){
            var days = window.prompt("how much days : ")
            price = (2.52 + 12) * days; 
            window.priceholder.value = price + "$";

        }else if(selectedf == f4){
            var days = window.prompt("how much days : ")
            price = (0.6000000000000001 + 12) * days; 
            window.priceholder.value = price + "$";

        }


        ////berlin///////////
    }else if (selectedchoice == v4){
        document.getElementById("el").style.display = "none";
        document.getElementById("e").style.display = "block";
        document.getElementById("d").style.display = "block";
        document.getElementById("h").style.display = "block";

        if (selectedf == f3){

           var days = window.prompt("how much days : ")
           price = (1.7999999999999998 + 3.8 + 20) * days; 
           window.priceholder.value = price + "$";

       
       }else if(selectedf == f1){
           var days = window.prompt("how much days : ")
           price = (2.8000000000000003 + 3.8 + 20) * days; 
           window.priceholder.value = price + "$";


       }else if(selectedf == f2){
        var days = window.prompt("how much days : ")
        price = (4.2 + 3.8 + 20) * days; 
        window.priceholder.value = price + "$";
       }
     
    ////utilitaire///////
    }else if(selectedchoice == v5){
        document.getElementById("e").style.display = "none";
        document.getElementById("h").style.display = "none";
        document.getElementById("el").style.display = "none";
        document.getElementById("d").style.display = "block";

        if(selectedf == f2){
        var days = window.prompt("how much days : ")
        price = (3.36 + 16) * days; 
        window.priceholder.value = price + "$";
       }


    ////Trucks//////////
    }else if(selectedchoice == v6){
        document.getElementById("e").style.display = "none";
        document.getElementById("h").style.display = "none";
        document.getElementById("el").style.display = "none";
        document.getElementById("d").style.display = "block";
        if(selectedf == f2){
            var days = window.prompt("how much days : ")
            price = (52.5 + 47.5 + 250) * days
            window.priceholder.value = price + "$";


       } 

    } else if(selectedchoice == v7){
        document.getElementById("h").style.display = "none";
        document.getElementById("el").style.display = "none";
        document.getElementById("d").style.display = "block";
        document.getElementById("e").style.display = "none";
        if(selectedf == f1){
            var days = window.prompt("how much days : ")
            price = (126.00000000000001 + 900) * days
            window.priceholder.value = price + "$";
        }else if(selectedf == f2){
            var days = window.prompt("how much days : ")
            price = (189 + 900) * days
            window.priceholder.value = price + "$";


        }

    }    
    
}

function display_info(){
    var name1 = window.name1.value;
    var email = window.email.value;
    var message = window.massage.value;
    var subject = window.subject.value;

    alert("welcome " + "" + name1  + "" + "your email is" + "" + "" + email + "" + "" + "this is your message " + "" + message + "" + "your subject is " + "" + subject);
   
 
}


/*function moto(){

    
    var days = window.daysinput.value;
    var price = (1.4000000000000001 + 10);
    window.priceholder.value = price * days;

}*/


/*
document.getElementById("d").style.display = "none";
        document.getElementById("h").style.display = "none";
        if (selectedf == f1){
               var days = window.daysinput.value;
               var price = (1.4000000000000001 + 10); 
        }else if(selectedf == f4){
            var days = window.prompt("how much days : ");
            price = (0.5 + 10) * days;
            window.priceholder.value = price + "$";
        }*/