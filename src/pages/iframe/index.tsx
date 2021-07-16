import React from 'react';

function Iframe() {
  function handleOnLoad() {
    const iframe = document.getElementById('test');
    (iframe as any).height = (document.querySelector('#test') as any)?.contentWindow?.document.documentElement.scrollHeight;
  }

  return (
    <div className="container" style={{ height: (document.querySelector('#test') as any)?.contentWindow?.document.documentElement.offetHeight }}>
      <iframe
        id="test"
        src="../btn"
        title="测试"
        onLoad={handleOnLoad}
      />
    </div>
  );
}
export default Iframe;
