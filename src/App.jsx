import React from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";

const App = () => {

  return (
    <div className='app-container'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App
