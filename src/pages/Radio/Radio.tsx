/** @format */

import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { RadioGroupContext } from './context';

const classPrefix = 'puzzle-ad-radio-wrapper';

export type RadioValue = string | number | undefined;

export type RadioProps = {
  checked?: boolean;
  onChange?: (val: RadioValue) => void;
  value: RadioValue;
  className?: string;
  children: ReactNode;
  [prop: string]: any;
};

const Radio = (props: RadioProps) => {
  const groupContext = useContext(RadioGroupContext);
  const { value, className, children, ...restProps } = props;

  const onChange = (e: any) => {
    props.onChange?.(e.target.value);
    groupContext?.onChange?.(e.target.value);
  };

  const radioProps: any = {
    ...restProps,
    value
  };
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = value === groupContext.value;
  }

  return (
    <label className={classNames(classPrefix, className)}>
      <input type="radio" {...radioProps} />
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );
};
export { Radio };
