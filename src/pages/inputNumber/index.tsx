/** @format */

import React from 'react';
import { InputNumber, Button } from 'antd';
function Demo() {
  const [value, setValue] = React.useState<string | number>('99');

  function onChange(value: number) {
    console.log('changed', value);
  }

  function handleSetVal() {
    setValue(55);
  }

  return (
    <>
      <InputNumber
        defaultValue={1000}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
        parser={(value?: string | undefined) =>
          parseInt((value as string)?.replace(/\$\s?|(,*)/g, ''), 10)
        }
        onChange={onChange}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={(value) => `${value}%`}
        parser={(value: string | undefined): number =>
          parseInt((value as string).replace('%', ''), 10)
        }
        onChange={onChange}
      />
      <InputNumber
        decimalSeparator="-"
        min={1}
        max={10}
        defaultValue={3}
        onChange={onChange}
      />
      {/* // 不能通过onChange来触发超出范围，因为onChange一旦超出范围之后就会自动变成最大值；只能是从外面赋值 */}
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button onClick={handleSetVal}>赋值</Button>
    </>
  );
}
export default Demo;
