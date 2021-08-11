/** @format */

import React, { useEffect, useState } from 'react';
function NetWork() {
  function getConnection() {
    const nav: any = navigator;
    if (typeof nav !== 'object') return null;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
  }

  function getConnectionProperty() {
    const c = getConnection();
    if (!c) return {};
    return {
      rtt: c.rtt,
      type: c.type,
      saveData: c.saveData,
      downlink: c.downlink,
      downlinkMax: c.downlinkMax,
      effectiveType: c.effectiveType
    };
  }

  const [network, setNetWork] = useState<any>({
    ...{ since: undefined, online: navigator.onLine },
    ...getConnectionProperty()
  });

  useEffect(() => {
    function onOnLine() {
      setNetWork((prevState: any) => ({
        ...prevState,
        online: true,
        since: new Date()
      }));
    }

    function onOffLine() {
      setNetWork((prevState: any) => ({
        ...prevState,
        online: false,
        since: new Date()
      }));
    }

    function onConnectionChange() {
      setNetWork((prevState: any) => ({
        ...prevState,
        ...getConnectionProperty()
      }));
    }

    window.addEventListener('online', onOnLine);
    window.addEventListener('offline', onOffLine);
    const connection = getConnection();
    connection === null || connection === undefined
      ? undefined
      : connection.addEventListener('change', onConnectionChange);
    return function () {
      window.removeEventListener('online', onOnLine);
      window.removeEventListener('offline', onOffLine);
      connection === null || connection === undefined
        ? undefined
        : connection.removeEventListener('change', onConnectionChange);
    };
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(network)}</pre>
    </div>
  );
}
export default NetWork;
