import express from 'express'
import pg from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();


const APIPORT = 3000;

const app = express();

app.use(cors());

app.use(express.json())

const reviews = [{1: 'Hello World'}]

app.get('/api/reviews' , async ( req, res) => {
  console.log('Fetching Reviews')
  try {
    const result = reviews
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.use((req, res,next) => {
  next({message: 'The path you are looking for does not exist' ,
  status:400})
})

app.use((err, req, res, next) => {
  console.log('Unknown Route Hit')
  res.status(err.status).json({error:err})
})

app.listen(APIPORT || 3000, (req,res) => {
  console.log('Server is listening on port 3000')
})