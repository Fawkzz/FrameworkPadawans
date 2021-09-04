const axios = require('axios');

const todosController = {
    index:('/todos', async (req, res) => {
        console.log('ok');
        let postData =  await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/todos')
        ]);

        const posts = postData[0].data;        

        // send data to view
        res.render('todos', { apiResponse: posts });
        console.log(posts)
    })
}


module.exports = todosController;