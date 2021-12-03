/** @format */

import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc';
import { Input, Switch } from 'antd';
import { arrayMoveImmutable } from 'array-move';

const DragHandle = SortableHandle(() => <span>::</span>);

const SortableItem = SortableElement(({ value }: any) => (
  <div>
    <DragHandle />
    {value}
    <div>
      <Input />
    </div>
    <span>
      <Switch />
    </span>
  </div>
));

const SortableContainer1 = SortableContainer(({ children }: any) => (
  <div>{children}</div>
));

class App extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  };

  onSortEnd = ({ oldIndex, newIndex }: any) => {
    this.setState(({ items }: any) => ({
      items: arrayMoveImmutable(items, oldIndex, newIndex)
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <SortableContainer1 onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer1>
    );
  }
}

export default App;
