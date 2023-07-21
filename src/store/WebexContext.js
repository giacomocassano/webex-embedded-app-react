//Create a Context with Context API
import React from 'react';

const initialState = {
  webexApp: null,
  logs: [],
  setWebexApp: () => {},
  log: () => {},
  clearLogs: () => {},
};

const WebexContext = React.createContext(initialState);

const WebexProvider = ({children}) => {
  const [webexApp, setWebexApp] = React.useState(false);
  const [logs, setLogs] = React.useState([]);

  const log = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <WebexContext.Provider
      value={{
        webexApp,
        setWebexApp,
        logs,
        log,
        clearLogs,
      }}
    >
      {children}
    </WebexContext.Provider>
  );
};

export {WebexContext, WebexProvider};
