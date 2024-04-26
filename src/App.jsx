import React from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";

const App = () => {
  const user = true

  return (
    <div className='app-container'>
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
