import React from 'react';
import {WebexContext} from '../store/WebexContext';
import {Button} from 'react-bootstrap';

const Logs = () => {
  const {logs, clearLogs} = React.useContext(WebexContext);
  return (
    //Create a log list
    <div>
      <div className='d-flex flex-row gap-2 align-items-center'>
        <h2>Logs</h2>
        <Button className='success' onClick={clearLogs}>
          Clear Logs
        </Button>
      </div>
      {/* Log list */}
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
