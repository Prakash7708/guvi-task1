import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pricing from "./Pricing";

function App() {
  var changes=[{h2:"Single User",h3:"5GB Storage",price:"$0",head:"FREE",class1:"text-muted",class2:"fas fa-times",class3:"text-muted",class4:"fas fa-times"},
               {h2:"5 User",h3:"5GB Storage",price:"$9",head:"PLUS",class1:"",class2:"fas fa-check",class3:"text-muted",class4:"fas fa-times"},
               {h2:"Unlimited User",h3:"150GB Storage",price:"$49",head:"PRO",class1:"",class2:"fas fa-check",data:"Unlimited  "}]
  return (
    <div className='App'>
     {/* <section className='pricing py-5'/>
     <div className='container'/> */}
      <div className='row'> 
      { changes.map((input)=>{
          return <Pricing price={input.price} head={input.head} class1={input.class1}
           class2={input.class2} class3={input.class3} class4={input.class4} data1={input.data} h2={input.h2} h3={input.h3}></Pricing>
        })
      }

        {/* <Pricing price="$0" head="plus" class1="text-muted" class2="fas fa-check"></Pricing>
        <Pricing price="$9" head="plus"></Pricing>
        <Pricing price="$49" head="plus"></Pricing> */}
        </div> 
      </div>
      

      
  );
}

export default App;
