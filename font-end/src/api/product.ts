import { IProduct, addForm, updateForm } from "../models";
import instance from "./instance";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};
export const getUser = () => {
  const uri = "/users";
  return instance.get(uri);
};
export const getById = (id: string) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};
export const update = (id: string, body: updateForm) => {
  const uri = "/products/" + id;
  return instance.put(uri, body);
};
export const remove = (id: string) => {
  const uri = "/products/" + id;
  return instance.delete(uri);
};
export const addItem = (body: addForm) => {
  const uri = "/products/";
  return instance.post(uri, body);
};
