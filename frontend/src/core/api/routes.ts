const getPhones = (phoneId?: string) => (phoneId ? `api/phones/${phoneId}` : 'api/phones');

const postPurchase = () => `api/payments/session`;

export const Route = { getPhones, postPurchase };
