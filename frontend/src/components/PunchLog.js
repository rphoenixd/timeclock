import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PunchLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/punches')
      .then(res => setLogs(res.data))
      .catch(err => console.error('Error fetching punch logs:', err));
  }, []);

  return (
    <div>
      <h4>🕓 Punch Log</h4>
      <table className="table table-bordered">
        <thead>
          <tr><th>User ID</th><th>Action</th><th>Time</th></tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td>{log.user_id}</td>
              <td>{log.action}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PunchLog;
