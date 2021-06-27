const getPhones = (phoneId?: string) =>
  phoneId ? `api/phones/${phoneId}` : "api/phones";

export const Route = { getPhones };
