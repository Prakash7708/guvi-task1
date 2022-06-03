var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
let array = [{obj1},{obj2}];
console.log(array[obj1]===array[obj2]);
console.log(obj1.name);
console.log(obj2.name);



const getCountriesflag = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response;      
        for (var i=0;i<196;i++){
            console.log(countries[i].flags.svg);
    }
   };

};
getCountriesflag(); 

const getCountries = () =>{
    const xhr = new XMLHttpRequest();
     xhr.open("GET","https://restcountries.com/v3.1/all");
     xhr .send();
     xhr.responseType = "json"; //data format
     xhr.onload = ()=>{
         const countries =  xhr.response;

        //  const name= countries[0].name.common;
        //  console.log(name);
        
        //   const popu= countries[0].population;
        //   console.log(popu);

        //   const reg= countries[0].region;
        //     console.log(reg);
        //   const sreg= countries[0].subregion;
        //   console.log(sreg);
         

        for (var i=0;i<196;i++){
            console.log("              ");
            console.log("Name:  "+countries[i].name.common);
            console.log("Population: "+countries[i].population);
            console.log("Region: "+countries[i].region);
            console.log("Subregion: "+countries[i].subregion);

    }
   };

};
getCountries(); 

