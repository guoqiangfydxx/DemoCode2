/** @format */

import React from 'react';
import { DraggableContainer, DraggableChild } from 'react-dragline';

class Example extends React.Component {
  state = {
    childs: [
      { id: 1, position: { x: 100, y: 10 } },
      { id: 2, position: { x: 400, y: 200 } }
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
        {childs.map(({ id, position }, index) => {
          const style = {
            width: 100,
            height: 100,
            cursor: 'move',
            background: '#8ce8df'
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
