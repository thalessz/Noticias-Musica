var mysql = require('mysql2/promise');
const express = require('express');
const app = express();


app.set('view engine', 'hbs')
app.set('views', './views')
app.set('assets', './assets')
app.use(express.static('public'))

app.get('/', (req, res) => {
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'jornal'
            });
            console.log('Conexão bem sucedida com o banco de dados')
            let [results, fields] = await connection.query('select * from noticia where 1');
            res.render('index', {results, style: 'index', title: ''});
            connection.end();
            }catch(err)
            {console.log(err)}
    }
    get_data();
    
});
app.get('/noticia/:id', (req,res) => {
    let id= req.params.id;
    console.log('noticia selecionada:' + id);
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'jornal'
            });
            console.log('Conexão bem sucedida com o banco de dados')
            let [results, fields] = await connection.query('select * from noticia where id = '+id);
            console.log(results)
            let titulo = results[0].titulo;
            console.log(titulo)
            res.render('noticia', {results, style:'noticia', title: titulo});
            connection.end();
            }catch(err)
            {console.log(err)}
    }
    get_data();
})
app.get('*', (req,res) =>{
    res.status(404).send("Destino não encontrado :(")
})

const port=3000;
app.listen(port, ()=>{
    console.log("servidor rodando em http://localhost:"+ port);
});

