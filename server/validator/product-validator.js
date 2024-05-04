const { z } = require("zod");

const productSchema = z.object({
  id: z
    .string({ required_error: "id is required" })
    .trim()
    .min(3, { message: "id must be atleast of 3 char." })
    .max(1000, { message: "id must not be more than 1000 characters" }),

  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 char." })
    .max(1000, { message: "Name must not be more than 1000 characters" }),

  category: z
    .string({ required_error: "category is required" })
    .trim()
    .min(3, { message: "category must be atleast of 3 char." }),

  actual_price: z
    .number({ required_error: "actual_price is required" })
    .nonnegative({ message: "actual_price must be greater than equal to 0" }),

  discounted_price: z
    .number({ required_error: "discounted_price is required" })
    .nonnegative({ message: " discounted_price must be greater than 0" }),

  discount_percentage: z
    .number({ required_error: "discount_percentage is required" })
    .nonnegative({
      message: "discount_percentage must be greater than equal to 0",
    }),

  about: z
    .string({ required_error: "about is required" })
    .trim()
    .min(3, { message: "about must be atleast of 3 char." }),

  url: z.array(
    z.string({ required_error: "url is required" })
      .url({ message: "Invalid url" }),
  ).refine((array) => array.length > 0, {
    message: "Url Array must not be empty",
  }),

  rating: z
    .number({ required_error: "rating is required" })
    .gte(0, { message: "rating must be greater than 0" })
    .lte(5.1, { message: "rating must be less than 5.1" }),

  rating_count: z
    .number({ required_error: "rating count is required" })
    .int({ message: "rating count must be an integer" }) // value must be an integer
    .nonnegative({ message: "rating Count must be greater than equal to 0" }),
});

module.exports = { productSchema };
