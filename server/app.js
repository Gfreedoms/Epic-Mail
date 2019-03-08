/* eslint-disable no-console */
import express, { json } from 'express';
import userRoute from './route/userRoute';
import messageRoute from './route/messageRoute';

const app = express();

app.use(json());
app.use(userRoute);
app.use(messageRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app started at ${port}`));

export default app;
