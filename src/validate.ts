import { z } from "zod";

const envSchema = z.object({
  TWILIO_ACCOUNT_SID: z.string(),
  TWILIO_AUTH_TOKEN: z.string(),
  TO_NUMBER: z.string(),
  FROM_NUMBER: z.string(),
});

export const validate = () => envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
