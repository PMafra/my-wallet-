import express from "express";
import cors from "cors";
import * as userController from './controllers/userController.js';
import * as financialController from './controllers/financialController.js';
import auth from './middlewares/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", userController.signUp);
app.post("/sign-in", userController.signIn);
app.post("/financial-events", auth, financialController.addFinancial);
app.get("/financial-events", auth, financialController.getFinancials);
app.get("/financial-events/sum", auth, financialController.getFinancialsSum);

export default app;
