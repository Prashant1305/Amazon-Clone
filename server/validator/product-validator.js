const { z } = require("zod");

const productSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 char." })
    .max(255, { message: "Name must not be more than 255 characters" }),
  category: z
    .string({ required_error: "category is required" })
    .trim()
    .min(3, { message: "category must be atleast of 3 char." })
    .max(255, { message: "category must not be more than 255 characters" }),
  about: z
    .string({ required_error: "about is required" })
    .trim()
    .min(3, { message: "about must be atleast of 3 char." })
    .max(255, { message: "about must not be more than 255 characters" }),
  url: z
    .string({ required_error: "url is required" })
    .trim()
    .email({ message: "Invalid url address" })
    .min(3, { message: "url must be atleast 3 characters" })
    .max(255, { message: "url must not be more than 255 characters" }),

  rating: z
    .number({ required_error: "rating is required" })
    .min(1, { message: "rating cannot be less than 1" })
    .max(5, "rating cannot be more than 5"),

  rating_count: z
    .number({ required_error: "rating is required" })
    .min(0, { message: "rating cannot be less than 0" })
    .max(500000, "rating cannot be more than 50k"),
});

module.exports = { productSchema };
