import { object, string, array, number, mixed } from "yup";
import { genres } from "../data/recommanded-movies/data";

export const movieValidationSchema = object({
  title: string()
    .required("Movie title is required")
    .max(100, "Movie title must be less then 100 characters"),
  type: string().required("Movie type is required"),
  rating: number()
    .min(0, "Rating not be less than zero")
    .max(10, "Rating not be more than ten"),
  genre: array()
    .of(string().oneOf(genres, "Invalid genre selected"))
    .min(1, "Please select at least one genre")
    .max(5, "You can select up to 5 genres only") // Adjust max limit as needed
    .required("Genre is required"),
  votes: number().min(0, "Votes not be less than zero"),
  image: mixed()
    .nullable()
    .required("File is required")
    .test(
      "fileType",
      "Only PNG, JPEG, and JPG files are supported",
      (value) => {
        if (typeof value === 'string') return true;
        if (!value || !(value instanceof File)) return false; // Ensure value is a File
        const supportedFormats = ["image/png", "image/jpeg", "image/jpg"];
        return supportedFormats.includes(value.type);
      }
    )
    .test("fileSize", "File size should be less than 5 MB", (value) => {
      if (typeof value === 'string') return true;
      if (!value || !(value instanceof File)) return false; // Ensure value is a File
      return value.size <= 5 * 1024 * 1024; // 5 MB
    }),
});
