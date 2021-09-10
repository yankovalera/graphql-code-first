import { Customer, Db, db } from "@nexusblog/db";

export interface Context {
  db: Db;
  customer: Customer;
}

export const context = {
  db,
  customer: {
    id: "1",
    username: "test",
  },
};
