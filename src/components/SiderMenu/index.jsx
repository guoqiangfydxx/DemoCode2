import React from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from 'rc-drawer';
import SiderMenu from './SiderMenu';
import 'rc-drawer/assets/index.css';

// import "./index.less";

const SiderMenuWrapper = (props) => {
  const { isMobile, collapsed, onCollapse } = props;

  return isMobile ? (
    <DrawerMenu
      getContainer={null}
      level={null}
      handleChild={<i className="drawer-handle-icon" />}
      onHandleClick={() => {
        onCollapse(!collapsed);
      }}
      open={!collapsed}
      onMaskClick={() => {
        onCollapse(true);
      }}
    >
      <SiderMenu {...props} collapsed={isMobile ? false : collapsed} />
    </DrawerMenu>
  ) : (
    <SiderMenu {...props} />
  );
};

SiderMenuWrapper.propTypes = {
  isMobile: PropTypes.bool,
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func,
  logo: PropTypes.object,
};

export default SiderMenuWrapper;
