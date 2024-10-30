import { object, string } from "yup";

export const profileValidation = object({
  name: string()
    .required("User name is required")
    .min(3, "name msut be more than 3 characters")
    .max(50, "name must be less than 50 characters"),
  email: string().required("email is required").email("email is not valid"),
});

export const imageValidation = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/heic",
];

export const isValidImage = (fileType:string) => {
  return imageValidation.includes(fileType);
};
