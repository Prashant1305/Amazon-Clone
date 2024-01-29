const { z } = require("zod");

const bannerSchema = z.object({
    url: z
        .string({ required_error: "Link is required" })
        .trim()
        .url({ message: 'Invalid url' })
});

module.exports = { bannerSchema };