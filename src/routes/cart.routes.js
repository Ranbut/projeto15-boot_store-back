import { Router } from "express";
import { postCart, getCart, deleteCart } from "../controllers/cart.controller.js";
import { token } from "../middlewares/token.Middleware.js";

const cartRoute = Router();

cartRoute.post("/cart", token, postCart);
cartRoute.get("/cart", token, getCart);
cartRoute.delete("/cart", token, deleteCart);

export default cartRoute;