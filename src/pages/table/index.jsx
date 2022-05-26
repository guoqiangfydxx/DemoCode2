/* eslint-disable indent */
/**
 * /* eslint-disable operator-linebreak
 *
 * @format
 */

/**
 * /* eslint-disable operator-linebreak
 *
 * @format
 */

/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

/** @format */
import { Table, Modal, Button } from 'antd';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import './index.scss';

const VirtualTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const { columns, scroll } = props;
  const [tableWidth, setTableWidth] = useState(0);
  const widthColumnCount = columns.filter(({ width }) => !width).length;
  const mergedColumns = columns.map((column) => {
    if (column.width) {
      return column;
    }

    return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
  });
  const gridRef = useRef();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            scrollLeft
          });
        }
      }
    });
    return obj;
  });

  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    console.log('rawData', rawData);
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={(index) => {
          const { width } = mergedColumns[index];
          return totalHeight > scroll.y && index === mergedColumns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => {
          console.log('rowIndex', rowIndex);
          console.log('mergedColumns', mergedColumns);
          console.log('columnIndex', columnIndex);
          console.log('ff', mergedColumns[columnIndex].render);
          return (
            <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last':
                  columnIndex === mergedColumns.length - 1
              })}
              style={style}
            >
              {typeof mergedColumns[columnIndex].render === 'function'
                ? mergedColumns[columnIndex].render(
                    rawData[rowIndex][mergedColumns[columnIndex].dataIndex],
                    rawData[rowIndex]
                  )
                : rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
            </div>
          );
        }}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        console.log('width', width);
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList
        }}
      />
    </ResizeObserver>
  );
}; // Usage

const columns = [
  {
    title: 'A',
    dataIndex: 'name',
    key: 'name',
    width: 150
  },
  {
    title: 'B',
    dataIndex: 'age',
    key: 'age',
    render: (text, record) => `%${record.age}`
  }
];
const data = [
  {
    name: 'tom',
    age: 343
  },
  {
    name: 'fsf',
    age: 24
  }
];

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  function handleClick() {
    setIsShowModal(true);
  }

  function hideModal() {
    setIsShowModal(false);
  }
  return (
    <>
      <Button onClick={handleClick}>click</Button>
      <Modal title="k" visible={isShowModal} width={800} onCancel={hideModal}>
        <VirtualTable
          columns={columns}
          dataSource={data}
          scroll={{
            y: 300,
            x: '100vw'
          }}
          bordered
        />
      </Modal>
    </>
  );
};

export default App;
