import React, { useState } from 'react';
import './StatusButton.css';

function StatusButton() {
  const [status, setStatus] = useState('offline');

  const toggleStatus = () => {
    setStatus(status === 'online' ? 'offline' : 'online');
  };

  return (
    <button className={`status-button ${status}`} onClick={toggleStatus}>
      <div className="status-dot" />
      {status === 'online' && <span className="status-tooltip">Online</span>}
      {status === 'offline' && <span className="status-tooltip">Offline</span>}
    </button>
  );
}

export default StatusButton;
