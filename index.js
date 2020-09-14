const app = require('./app');

app.listen(3000, () => {
  console.log(
    `Server started at https://svna-portal-api.azurewebsites.net//api:${3000}`
  );
});
