import React from "react";
import ItemsList from "./ItemsList";
const Content = ({items,handleCheck,handleDelete}) => {

  
  // const [items, setItems] = useState([
  //   { id: 1, checked: true, item: "practice coding" },
  //   { id: 2, checked: false, item: "playing cricket" },
  //   { id: 3, checked: true, item: "read about AI" },
  // ]);

  // const [count, setCount] = useState(99);
  // const [name, setName] = useState("Earn");

  // function incrementFn() {
  //   setCount((count) => {
  //     return count + 1;
  //   });
  //   setCount((count) => {
  //     return count + 1;
  //   });
  //   setCount((count) => {
  //     return count + 1;
  //   });
  // }

  // function decrementFn() {
  //   setCount((count) => {
  //     return count - 1;
  //   });
  // }

  // function handleName() {
  //   const names = ["Earn", "Grow", "Give"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // }

  // const handleCheck = (id) => {
  //   const itemList = items.map((item) =>
  //     item.id === id ? { ...item, checked: !item.checked } : item
  //   );
  //   setItems(itemList);
  //   localStorage.setItem("todo_list", JSON.stringify(itemList));
  // };

  // const handleDelete = (id) => {
  //   const itemList = items.filter((item) => item.id !== id);
  //   setItems(itemList);
  //   localStorage.setItem("todo_list", JSON.stringify(itemList));
  // };

  const numbers = [-2, -1, 0, 1, 2];
  const itemss = numbers.filter((n) => n > 0).map((n) => ({ number: n }));
  console.log(itemss);
  return (
    <main className="main">

      {(items.length) ? (
        <ItemsList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
