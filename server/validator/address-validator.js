const { z } = require("zod");

const deliveryLocationSchema = z.object({
    fullname: z
        .string({ required_error: "fullname is required" })
        .min(3, { message: "Name must be atleast of 3 char." })
        .max(255, { message: "Name must not be more than 255 characters" }),

    phone: z
        .string({ required_error: "phone is required" })
        .min(5, { message: "Phone should be atleast 5 digit" }),

    pincode: z
        .string({ required_error: "pincode is required" })
        .min(6, { message: "pincode is 6 digit" })
        .max(6, { message: "pincode is 6 digit" }),

    flat: z
        .string({ required_error: "flat number not provided" }),

    area: z
        .string({ required_error: "invalid area provided" }),

    state: z
        .string({ required_error: "invalid state provided" })

})

const addressSchema = z.object({
    deliveryAddress: z.array(deliveryLocationSchema)

})

module.exports = { addressSchema };