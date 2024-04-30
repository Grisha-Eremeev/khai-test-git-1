const express = require('express')
const productRouter = require('./product/product.router');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');
const userRouter = require('./user/user.router');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRouter);
app.use(errorResponder);
app.use(userRouter);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

