import * as Yup from "yup";
export interface IProduct {
  _id: string;
  name: string;
  price: number;
  original_price: number;
  description: string;
  image: string;
  brand: { id: number; name: string; slug: string };
  specifications: ISpecification[];
}
export interface IUser {
  emai: string;
  password: string;
  firstName: string;
  lastName: string;
}
interface ISpecification {
  name: string;
  attributes: { code: string; value: string; name: string }[];
}
export const signupSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
export type SignupForm = Yup.InferType<typeof signupSchema>;
export const signinSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters"),
});
export type SigninForm = Yup.InferType<typeof signinSchema>;
export const updateSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  image: Yup.string().required("Image is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string()
    .min(10, "Tối thiểu 10 kí tự")
    .required("Description is required"),
  original_price: Yup.number().required("Original Price is required"),
});
export type updateForm = Yup.InferType<typeof updateSchema>;
export const addSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  image: Yup.string().required("Image is required"),
  price: Yup.number().required("Price is required"),
  description: Yup.string()
    .min(10, "Tối thiểu 10 kí tự")
    .required("Description is required"),
  original_price: Yup.number().required("Original Price is required"),
});
export type addForm = Yup.InferType<typeof addSchema>;
