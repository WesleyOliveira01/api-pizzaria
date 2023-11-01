import cors from 'cors'
import express from 'express'
import {router} from './routes'

const port = 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port, () => {
  console.log(`server rodando na porta ${port}`)
})
