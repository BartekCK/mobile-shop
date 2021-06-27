import { ApiInstance } from "./ApiInstance";
import { Route } from "./routes";

const getPhone = async (phoneId?: string) => {
  const { data } = await ApiInstance.get(Route.getPhones(phoneId));

  return data;
};

export const Api = { getPhone };
