import { Router } from "express";

import { postCart, getCart } from "../controllers/cart.controllers.js";
import { token } from "../middlewares/token.Middleware";

const cartRoute = Router();

cartRoute.post("/cart", postCart, token);
cartRoute.get("/cart", getCart, token);
cartRoute.delete("/cart", deleteCart, token);

export default cartRoute;