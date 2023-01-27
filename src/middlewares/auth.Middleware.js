import { signUpSchema, signInSchema } from "../schemas/auth.Schema.js";
import { usersCollection } from "../config/db.js";
import bcrypt from 'bcrypt';

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


export async function SignInVerification(req, res, next) {
    const {email, password} = req.body;

    try {

        const user = await usersCollection.findOne({ email });

        if (!user) {
            return res.status(401).send("Este usuário não está autorizado a fazer login");
        }

        const checkPassword = bcrypt.compareSync(password, user.password);

        if(!checkPassword) {
            return res.status(401).send("Este usuário não está autorizado a fazer login");
        }

        res.locals.user = user;

    } catch (err) {
        console.log(err);
        return res.status(500).send("Ocorreu um erro, tente novamente mais tarde");
    }
    next();
}
