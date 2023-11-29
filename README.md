## Simple twilio typescript whatsapp example w/ free plan

1. Install deps

   ##### Pnpm

   ```
   pnpm install
   ```

   ##### Npm

   ```
   npm install
   ```

   ##### Yarn

   ```
   yarn
   ```

   ##### Bun

   ```
   bun install
   ```

2. Join sandbox with your real whatsapp number (that number will be used as the "to" in the message create)- https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn
3. create .env file at project root
4. Write your TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TO_NUMBER, FROM_NUMBER from twilio in .env. You can find these values through the links at [the useful links section](#useful-links)

   ```
    TWILIO_ACCOUNT_SID=<TWILIO_ACCOUNT_SID>
    TWILIO_AUTH_TOKEN=<TWILIO_AUTH_TOKEN>
    TO_NUMBER="whatsapp:<number>"
    FROM_NUMBER="whatsapp:<number>"
   ```

5. Run the script (using pnpm here, but any package manager will work)

   ```
   pnpm run send
   ```

   or if you're cool

   ```
   bun src/index.ts
   ```

### Useful links

- Whatsapp sandbox where you will get the FROM number: https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn

- Overview: https://console.twilio.com/us1/develop/sms/overview
- To get account/auth token/TO phone number: https://console.twilio.com/
  - Will be located at the bottom under "Account Info"
