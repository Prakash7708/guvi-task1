
//a)Get all the countries from Asia continent /region using Filter function



const getCountriesasia = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response; 
         
         const asia = countries.filter((n)=>n.region==="Asia");
         console.log(asia);

    };

};
getCountriesasia(); 

//b)Get all the countries with a population of less than 2 lakhs using Filter function

const getCountriespop = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response; 
         
         const pop2k = countries.filter((n)=>n.population<200000);
         console.log(pop2k);

    };

};
getCountriespop(); 

//c)Print the following details name, capital, flag using forEach function

const getCountriesname = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         var countries =  xhr.response; 
         
        //  const name = countries.map((n)=>n.name.common);
        //  console.log(name);
        // const name= countries.forEach(n => {n.name.common});
        //  console.log(name);
       let name = "";
       let flag ="";
       let capital ="";
       countries.forEach(myfuntion);
       function myfuntion(item){
           name+= "   Name :  "+item.name.common;
           flag+="     Flag : "+item.flags.svg;
           capital += "     Capital"+item.capital;

       }
       console.log(name);
       console.log(flag);

     

    // let capital = "";

    // countries.forEach(myfuntion1);
    // function myfuntion1(item){
    //     name+= item.capital+"  ";
    // }
    // console.log(capital)


    // let flag = "";

    // countries.forEach(myfuntion1);
    // function myfuntion1(item){
    //     name+= item.flag;
    // }
    // console.log(capital)

     }

 };


getCountriesname(); 


// d)Print the total population of countries using reduce function

const getCountriestotalpop = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response; 
         
         const totalpop = countries.reduce((pre,cur)=>pre+cur.population,0); //pre=0
         console.log(totalpop);

    };

};
getCountriestotalpop(); 



// e)Print the country which uses US Dollars as currency.

const getCountriesUSD = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response; 
         
         const USD = countries.filter((n)=>n.currencies=='USD');
        
         console.log(USD);

    };

};
getCountriesUSD(); 
