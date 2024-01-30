const { z } = require("zod");

const bannerSchema = z.object({
    url: z
        .string({ required_error: "Link is required" })
        .trim()
        .url({ message: 'Invalid url' }),
    name: z
        .string({ required_error: "name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 char." })
});

module.exports = { bannerSchema };