import React from 'react';
import PropTypes from 'prop-types';
// import "./index.less";

const GlobalFooter = ({ copyright }) => (
  <div className="globalFooter">
    {copyright && <div className="copyright">{copyright}</div>}
  </div>
);

GlobalFooter.propTypes = {
  copyright: PropTypes.element,
};
export default GlobalFooter;
