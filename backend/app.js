import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

const app = express();
app.use(express.json());

app.use("/api/user",router)

app.use("/api/blog",blogRouter)

mongoose.connect('mongodb+srv://admin:AuU82img-zERCpW@cluster0.fflwhcn.mongodb.net/Blog?retryWrites=true&w=majority'
).then(()=>app.listen(5000)).then(()=>console.log("Connected to Database")).catch((err)=>console.log(err));
 