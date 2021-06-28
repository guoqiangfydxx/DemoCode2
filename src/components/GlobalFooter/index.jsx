import React from "react";
// import "./index.less";

const GlobalFooter = ({ copyright }) => {
  return (
    <div className="globalFooter">
      {copyright && <div className="copyright">{copyright}</div>}
    </div>
  );
};

export default GlobalFooter;