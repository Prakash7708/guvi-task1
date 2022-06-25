var div =document.createElement("div");
div.innerHTML=`
<h1>CALCULATOR</h1>
<form name="form1">
<input class="input" id="inputName" type="search" name="answer" placeholder="Enter">
<label for="input" class="btn-outline-success">Results:</label>


<div class="div2">
<button class=" btn btn-outline-success btn2" value="1" type="button" onclick="form1.answer.value +='1'">1</button>
<button class=" btn btn-outline-success btn2" value="2" type="button" onclick="form1.answer.value +='2'">2</button>
<button class=" btn btn-outline-success btn2" value="3" type="button" onclick="form1.answer.value +='3'">3</button>
<button class="calc btn btn-outline-success " value="+" type="button" onclick="form1.answer.value +='+'">+</button>
<button  class=" btn btn-outline-success btn2" value="6" type="button" onclick="form1.answer.value +='6'">6</button>
<button class=" btn btn-outline-success btn2" value="5" type="button" onclick="form1.answer.value +='5'">5</button>
<button class=" btn btn-outline-success btn2" value="4" type="button" onclick="form1.answer.value +='4'">4</button>
<button  class="calc btn btn-outline-success btn2" value="-" type="button" onclick="form1.answer.value +='-'">-</button>
<button class=" btn btn-outline-success btn2" value="7"type="button" onclick="form1.answer.value +='7'">7</button>
<button class=" btn btn-outline-success btn2" value="8" type="button" onclick="form1.answer.value +='8'">8</button>
<button class=" btn btn-outline-success btn2" value="9" type="button" onclick="form1.answer.value +='9'">9</button>
<button  class="calc btn btn-outline-success value="*" btn2" type="button" onclick="form1.answer.value +='*'">x</button>
<button class="calc btn btn-outline-success btn2" value="." type="button" onclick="form1.answer.value +='.'">.</button>
<button class=" btn btn-outline-success btn2" value="0" type="button" onclick="form1.answer.value +='0'">0</button>
<button  class="calc btn btn-outline-success btn2" value="%" type="button" onclick="form1.answer.value +='%'"> / </button>
<button class=" btn btn-outline-success btn2" id="gg" value="=" type="button" onclick="form1.answer.value=eval(form1.answer.value)"> = </button>

</div> 
<button name="output" id="output1" value="Clea All" class="btn btn-outline-success output" onclick="form1.answer.value=''" id="output1" >clear</button>
</form> 
`;

document.body.append(div);


//  let num1=document.querySelector("form1.output.value");
//   num1.innerText=`${form.input.value}`;


// async function search(){
//   try{let cd=document.getElementById("inputName").value;
       
     
//     //console.log(cd*1);
  
//     let b=(`${cd}`)*1;
    
    
//       let ctyId0 = document.querySelector("#output1");
//       ctyId0.innerText=`${b}`;
// }
 
     
//        catch(error){
//          //error display
//              var Error=error;
//              let Error0 = document.querySelector("#Error");
//              Error0.innerText=`${Error}`;  
//        }
      
     
//      }
     