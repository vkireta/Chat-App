import React, { useState, Fragment } from 'react';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import MainHeader from './components/Headers/MainHeader/MainHeader';
import LogoutHeader from './components/Headers/LogoutHeader/LogoutHeader';

const myChannelID = '5wgnbOqxlxCJ47sN';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const drone = new window.Scaledrone(myChannelID, {
    data: { id: user.id, username: user.username },
  });

  drone.on('open', (error) => {
    if (error) {
      return console.error(error);
    }
  });

  const loginHandler = (username) => {
    setUser(() => {
      return { id: drone.clientId,  username };
    });
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    drone.close();
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
        <MainHeader />
        {isLoggedIn && (
          <LogoutHeader
            username={user.username}
            onLogout={logoutHandler}
          ></LogoutHeader>
        )}
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Chat drone={drone} currentUser={user} onLogout={logoutHandler} />
        )}
      </main>
    </Fragment>
  );
}

export default App;
