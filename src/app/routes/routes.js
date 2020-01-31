module.exports = (app) => {

    app.get('/test' , (req,res) => {
        res.send('TESTE')
    });

    app.get('/', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <p>Olar Mundo</p>
            </body>
            </html>
        `);
    });
    
    app.get('/livros', (req, res) => {
        res.marko(
            require('../views/livros/lista/lista.marko'),
            {
                Livros:[
                    {
                        id: 1801,
                        title: "Fundamentos de Node"
                    },
                    {
                        id: 1802,
                        title: "nodeJS Avançado"
                    },
                    {
                        id: 1803,
                        title: "Fundamentos de Banco de Dados"
                    },
                    {
                        id: 1804,
                        title: "Banco de Dados Avançado"
                    },
                    {
                        id: 1805,
                        title: "logica de Programação"
                    },
                    {
                        id: 1806,
                        title: "HTML5 & CSS3 - Do Básico ao avançado"
                    }
                ]
            }
        )
    });
}

