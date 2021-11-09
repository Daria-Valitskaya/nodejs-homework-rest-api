const app = require("../app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const DB_HOST =
  "mongodb+srv://daria_valitskaya:UlrZnmpfQiBHxeR0@cluster0.fqxue.mongodb.net/notebook?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
