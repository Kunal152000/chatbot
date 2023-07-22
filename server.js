const express = require("express");
const bodyParser = require("body-parser");
const chatbot = require("./chatbot");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/whatsapp-webhook", chatbot);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
