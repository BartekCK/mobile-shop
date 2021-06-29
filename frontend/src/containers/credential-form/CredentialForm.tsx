import React from 'react';
import { useFormik } from 'formik';

// styles
import './styles.scss';
import { IProduct } from '../../core/types';
import Input from '../../components/input';

type Props = {
  totalPrice: number;
  products: IProduct[];
};

const CredentialForm: React.FC<Props> = (props: Props) => {
  const validate = (values: any) => {
    const errors: any = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="credential--wrapper" onSubmit={formik.handleSubmit}>
      <Input
        type="firstName"
        label="First name"
        name="firstName"
        fieldProps={formik.getFieldProps('firstName')}
        errMsg={formik.errors.firstName}
      />
      <Input
        type="lastName"
        label="Last name"
        name="lastName"
        fieldProps={formik.getFieldProps('lastName')}
        errMsg={formik.errors.lastName}
      />
      <Input
        type="email"
        label="Email"
        name="email"
        fieldProps={formik.getFieldProps('email')}
        errMsg={formik.errors.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CredentialForm;
