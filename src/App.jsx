import './index.css';
import {useState} from 'react';

function App() {
  const [fruits, setFruits] = useState([
    {id:1, name:"Papaya", image:"https://source.unsplash.com/100x100/?papaya", price:3.99},
    {id:2, name:"Mango", image:"https://source.unsplash.com/100x100/?mango", price:0.69}
  ])

  const handleAdd = () =>{
    setFruits([...fruits,
       {id:3, name:"Banana", image:"https://source.unsplash.com/100x100/?banana", price:0.69},
    {id:4, name:"Pineapple", image:"https://picsum.photos/id/824/100", price:0.69},{
      id:5, name:"Strawberry", image:"https://picsum.photos/id/1080/100", price:2.69
    }])  
    
  }

  const handleDelete = (id) =>{
    const newFruits = fruits.filter((fruit)=>fruit.id !== id)
    setFruits(newFruits)
  }
  return (
    <div className="container">
      <header className="App-header">
        <h1>Fruit Store</h1>
        {fruits.map((fruit)=>(
          <li key={fruit.id} className='d-flex justify-content-between align-items-center'>
            <h4>{fruit.name}</h4>
            <img src={fruit.image} alt="tropical" />
            <p>${fruit.price}</p>
<button onClick={()=>handleDelete(fruit.id)}>delete</button>
          </li>
        ))}
        <button onClick={handleAdd}>Add</button>
      </header>
    </div>
  );
}

export default App;
