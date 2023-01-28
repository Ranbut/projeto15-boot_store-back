import {
  cartCollection,
  usersCollection,
  sessionCollection,
} from "../config/db";

export async function postCart(req, res) {
  const { type, image, price, offer } = req.body;
  const token = req.token;

  try {
    const user = await usersCollection.findOne({ _id: session?.userId });
    const session = await sessionCollection.findOne({ token });
    if (!user) {
      res.status(401).send("Você não está logado!");
    }
    await cartCollection.insertOne({
      type,
      image,
      price,
      offer,
      userId: user._id,
    });
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getCart(req, res) {
  const token = req.token;
  try {
    const session = await sessionCollection.findOne({ token });
    const id = session.userId;
    const card = await cartCollection.find({ userId: id }).toArray();
    res.send(card);
  } catch {
    res.sendStatus(500);
  }
}

export async function deleteCart(req, res) {
  const token = req.token;
  try {
    const session = await sessionCollection.findOne({ token });
    const id = session.userId;
    await cartCollection.deleteOne({ id });
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
}
