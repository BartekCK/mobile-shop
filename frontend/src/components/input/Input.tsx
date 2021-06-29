import React from 'react';

// types
import { FieldInputProps } from 'formik/dist/types';

// styles
import './styles.scss';

type Props = {
  label: string;
  id?: string;
  type: string;
  name: string;
  errMsg?: string;
  fieldProps: FieldInputProps<any>;
};

const Input: React.FC<Props> = (props: Props) => {
  const { label, name, type, fieldProps, id, errMsg } = props;
  return (
    <div className="input--wrapper">
      <label htmlFor={name}>{label}</label>
      <input id={id} type={type} {...fieldProps} />
      {errMsg ? <div className="err">{errMsg}</div> : null}
    </div>
  );
};

export default Input;
