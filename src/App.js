import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.scss';

function App() {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div className="App">
      <Sidebar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Content
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}

export default App;
