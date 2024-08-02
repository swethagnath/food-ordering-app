import express, {Request, Response} from "express"
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import myUserRoute from './routes/MyUserRoute'

mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log("connected to DB"))

const app = express()
app.use(express.json())
app.use(cors())


app.get('/health', async (req: Request, res: Response) => {
    res.send({message: "health Ok !"})
})
app.use("/api/my/user", myUserRoute)

app.listen(8000, () => console.log("server started on localhost: 8000"))