import Footer from "./Footer";
import Header from "./Header";
import {useState} from "react";
import Content from "./content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {

  const [items, setItems] = useState(JSON.parse
    (localStorage.getItem("todo_list"))
  );

  const [newItem,setNewItem]=useState('')

  const [search,setSearch]=useState('')


  const addItem=(item)=>{
    const id = items.length?items[items.length-1].id+1:1;
    const addNewItem = {id,checked:false,item}
    const itemList = [...items,addNewItem]
    setItems(itemList)
    localStorage.setItem("todo_list", JSON.stringify(itemList));
  }
  
  const handleCheck = (id) => {
    const itemList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(itemList);
    localStorage.setItem("todo_list", JSON.stringify(itemList));
  }

  const handleDelete = (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);
    localStorage.setItem("todo_list", JSON.stringify(itemList));
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem(' ')
  }

  return (
    <div className="App">
       <Header title ="Prasanna's Todo List"/>
       <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}/>
       <SearchItem
       search={search}
       setSearch={setSearch}/>
       <Content 
       items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
       />
       <Footer
       length ={items.length}
       />
    </div>
  );
}   

export default App;