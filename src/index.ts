import dotenv from "dotenv";
import { validate } from "./validate";

dotenv.config();
validate();

import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

client.messages
  .create({
    from: process.env.FROM_NUMBER,
    body: "testing out",
    to: process.env.TO_NUMBER,
  })
  .then((message) => console.log(message.sid));
