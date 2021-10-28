/** @format */

import React from 'react';
import { DraggableContainer, DraggableChild } from 'react-dragline';

class Example extends React.Component {
  state = {
    childs: [
      { id: 1, background: '#8ce8df', size: 100, position: { x: 100, y: 0 } },
      { id: 2, background: '#8ce8df', size: 100, position: { x: 200, y: 106 } },
      { id: 3, background: '#afc7fd', size: 102, position: { x: 500, y: 106 } },
      { id: 4, background: '#d2aff6', size: 150, position: { x: 100, y: 316 } },
      { id: 5, background: '#fee493', size: 200, position: { x: 480, y: 376 } }
    ]
  };

  render() {
    const { childs } = this.state;
    const containerStyle: any = {
      height: 600,
      position: 'relative'
    };

    return (
      <DraggableContainer style={containerStyle}>
        {childs.map(({ id, position, size, background }, index) => {
          const style = {
            width: size,
            height: size,
            cursor: 'move',
            background
          };

          return (
            <DraggableChild key={id} defaultPosition={position}>
              <div style={style}>{index + 1}</div>
            </DraggableChild>
          );
        })}
      </DraggableContainer>
    );
  }
}
export default Example;
