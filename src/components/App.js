import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);

    console.log("clicked")
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>

      <Header  toggleHandler={onDarkModeClick} modeTitle={isDarkMode}/> 
      
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
