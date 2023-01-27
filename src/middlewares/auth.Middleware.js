import { signUpSchema } from "../schemas/signUp.Schema.js";
import { usersCollection } from "../config/db.js";

export async function SignUpVerification(req, res, next) {
    const user = req.body;

    try {

        const { error } = signUpSchema.validate(user, { abortearly: false });

        if (error) {
            const errorMessage = error.details.map(detail => detail.message);
            return res.status(400).send(errorMessage);
        };

        const verifyUser = await usersCollection.findOne({ email: user.email });

        if (verifyUser) {
            return res.status(409).send("Este usuário já existe, faça login");
        }
        
        res.locals.user = user;

    } catch (err) {
        console.log(err);
        return res.status(500).send("Ocorreu um erro, tente novamente mais tarde");
    }
    next();
}
