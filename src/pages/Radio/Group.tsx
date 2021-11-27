/** @format */

import React, { ReactNode } from 'react';
import cs from 'classnames';
import { RadioValue, Radio } from './Radio';
import { RadioGroupContext } from './context';
type GroupProps = {
  options?: { label: string; value: number | string }[];
  className?: string;
  name?: string;
  value?: RadioValue;
  onChange?: (val: RadioValue) => void;
  children: any;
  label?: string;
};
const groupPrefixCls = 'puzzle-ad-radio-group-wrapper';
const Group = (props: GroupProps) => {
  const { value, onChange, name, className, children, options, label } = props;

  const onRadioChange = (val: RadioValue) => {
    if (onChange && val !== value) {
      onChange(val);
    }
  };

  const renderGroups = (): ReactNode => {
    let childrenRender = children;
    if (options && options.length > 0) {
      childrenRender = options.map((option) => {
        const { label, value: optionVal } = option;
        return (
          <Radio key={name} value={optionVal} checked={value === optionVal}>
            {label}
          </Radio>
        );
      });
    }

    return (
      <div className={cs(groupPrefixCls, className)}>
        <span className="puzzle-form-label">{label}</span>
        <div className="puzzle-form-control">{childrenRender}</div>
      </div>
    );
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        onChange: onRadioChange,
        name
      }}
    >
      {renderGroups()}
    </RadioGroupContext.Provider>
  );
};
export { Group };
