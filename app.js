const  express = require('express');

const app = express();

const bookRouter = express.Router();

const port = process.env.PORT || 3000;

bookRouter.route('/book')

.get((req,res)=>{
  const reponse = {hello: 'Informe de clase de API'};

  res.json(reponse);
});

app.use('/api',bookRouter);


app.get('/',(req,res)=>{
    res.send('clase de ayer');
});

app.listen(port,()=>{
    console.log(`Puerto ${port}`);
});