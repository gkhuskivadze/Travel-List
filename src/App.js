import { useState } from "react";
import Form from "./Form";
import Item from "./Item";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Do you want to clear list?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onHandleToggleItem={handleToggle}
        items={items}
        onDeleteItem={handleDelete}
        onHandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
