import React from 'react';

// components
import Card from '../../components/card';

// api
import { Api } from '../../core/api';

// types
import { IPhone } from '../../core/types';

// styles
import './styles.scss';

const GridCard: React.FC = () => {
  const [phones, setPhones] = React.useState<IPhone[]>([]);

  React.useEffect(() => {
    const makeReq = async () => {
      const data = await Api.getPhone();

      setPhones(data);
    };

    makeReq();
  }, []);

  return (
    <main className="grid--wrapper">
      {phones.map((phone) => (
        <Card key={phone.id} phone={phone} />
      ))}
    </main>
  );
};

export default GridCard;
