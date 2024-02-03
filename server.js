var mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const bodyparser = require('body-parser')


app.set('view engine', 'hbs')
app.set('views', './views')
app.set('assets', './assets')
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            });
            console.log('Conexão bem sucedida com o banco de dados')
            let [results, fields] = await connection.query('SELECT noticia.*, user_data.user_name FROM noticia JOIN user_data ON noticia.Autor = user_data.id');
            res.render('index', {results, style: 'index', title: 'The News: Sua Newsletter!'});
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
                user: 'root', database: 'the_news'
            });
            console.log('Conexão bem sucedida com o banco de dados')
            let [results, fields] = await connection.query('select * from noticia where id = '+id);
            console.log(results)
            let titulo = results[0].titulo;
            console.log(titulo)
            res.render('index', {results, style: 'index', title: titulo})
            connection.end();
            }catch(err)
            {console.log(err)}
    }
    get_data();
})
app.get('/politica', (req, res)=>{
    console.log('categoria selecionada: Política')
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco")
            let [results,fields] = await connection.query('SELECT noticia.* FROM noticia JOIN noticia_tag ON noticia.id = noticia_tag.noticia_id WHERE noticia_tag.tag_id = 1;')
            console.log(results)
            if(results.lenght>0){
                let titulo = results[0].titulo;
                 console.log(titulo)
            }else{
                error = "Infelizmente não encontramos nenhuma notícia com essa tag :("
            }
            res.render('index', {results, style:'index', title:'The News:Política', error: error})
            conection.end();
        }catch(err){
            console.log(err)
        }
    }
    get_data();
})
app.get('/economia', (req, res)=>{
    console.log('categoria selecionada: Economia')
    async function get_data(){
        let error;
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco")
            let [results,fields] = await connection.query('SELECT noticia.* FROM noticia JOIN noticia_tag ON noticia.id = noticia_tag.noticia_id WHERE noticia_tag.tag_id = 2;')
            console.log(results)
            if(results.lenght>0){
                let titulo = results[0].titulo;
                 console.log(titulo)
            }
            else{
                error = "Infelizmente não encontramos nenhuma notícia com essa tag :("
            }
            res.render('index', {results, style:'index', title:'The News:Economia', error: error})
            conection.end();
        }catch(err){
            console.log(err)
        }
    }
    get_data();
})
app.get('/esportes', (req, res)=>{
    console.log('categoria selecionada: Esportes')
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco")
            let [results,fields] = await connection.query('SELECT noticia.* FROM noticia JOIN noticia_tag ON noticia.id = noticia_tag.noticia_id WHERE noticia_tag.tag_id = 3;')
            console.log(results)
            if(results.lenght>0){
                let titulo = results[0].titulo;
                 console.log(titulo)
            }else{
                error = "Infelizmente não encontramos nenhuma notícia com essa tag :("
            }
            res.render('index', {results, style:'index', title:'The News:Esportes', error: error})
            conection.end();
        }catch(err){
            console.log(err)
        }
    }
    get_data();
})
app.get('/cultura', (req, res)=>{
    console.log('categoria selecionada: Cultura')
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco")
            let [results,fields] = await connection.query('SELECT noticia.* FROM noticia JOIN noticia_tag ON noticia.id = noticia_tag.noticia_id WHERE noticia_tag.tag_id = 4;')
            console.log(results)
            if(results.lenght>0){
                let titulo = results[0].titulo;
                 console.log(titulo)
            }else{
                error = "Infelizmente não encontramos nenhuma notícia com essa tag :("
            }
            res.render('index', {results, style:'index', title:'The News:Cultura', error: error})
            conection.end();
        }catch(err){
            console.log(err)
        }
    }
    get_data();
})
app.get('/tecnologia', (req, res)=>{
    console.log('categoria selecionada: Tecnologia')
    async function get_data(){
        try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco")
            let [results,fields] = await connection.query('SELECT noticia.* FROM noticia JOIN noticia_tag ON noticia.id = noticia_tag.noticia_id WHERE noticia_tag.tag_id = 5;')
            console.log(results)
            if(results.lenght>0){
                let titulo = results[0].titulo;
                 console.log(titulo)
            }else{
                error = "Infelizmente não encontramos nenhuma notícia com essa tag :("
            }
            res.render('index', {results, style:'index', title:'The News:Tecnologia', error: error})
            conection.end();
        }catch(err){
            console.log(err)
        }
    }
    get_data();
})
app.get('/login', (req,res)=>{
    res.render('login', {title: 'The News- Login'})
})
app.post('/login_auth', (req,res)=>{
    let user_email = req.body.email;
    let user_pass = req.body.senha;
    console.log(user_email +" "+ user_pass)
    async function get_data(){
     try{
            const connection = await mysql.createConnection({
                user: 'root', database: 'the_news'
            })
            console.log("conexão bem-suscedida com o banco");
            let [results, fields] = await connection.execute('select * from user_data where user_email = ? and user_password = ?', [user_email, user_pass]);
            console.log(results)
            if(results.length>0)
            {
                res.redirect('/');
            }
            else{
                res.redirect('/login')
            }
            connection.end()
     }catch(err){
        console.log(err)
     }
    }
    get_data();
})
app.get('*', (req,res) =>{
    res.status(404).send("Destino não encontrado :(")
})
app.get('/cadastro', (req,res)=>{
    res.render('cadastro', {titulo: cadastro})
})
app.post('/cadastro_auth', (req,res)=>{
    
})
const port=3000;
app.listen(port, ()=>{
    console.log("servidor rodando em http://localhost:"+ port);
});

