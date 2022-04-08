import './App.css';

function App() {
  
const card = [
  {
    heading:"Mobile Operating System",
    list:["Andriod","Blackberry","IPhone","Windows Phone"],
  },{
    heading:"Mobile Mnufacturers",
    list:["Samsung","HTC","Micromax","Aplle"],
  },
]

  return (
    <div>
      {card.map((ele)=>{
        return <Cards ele={ele}></Cards> 
      })}
    </div>
  );
}

function Cards({ele}){
  return <div>
    <h1>{ele.heading}</h1>
    <ul>
      {ele.list.map((el)=>{
       return  <li>{el}</li>
      })}
    </ul>
  </div>;
 }

export default App;
