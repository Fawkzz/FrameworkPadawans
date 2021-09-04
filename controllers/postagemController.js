const axios = require('axios');

const postagemController = {
    index:('/postagem', async (req, res) => {
        console.log('ok');
        let postData =  await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ]);

        const posts = postData[0].data;        

        // send data to view
        res.render('postagem', { apiResponse: posts });
        console.log(posts)
    })
}


module.exports = postagemController;

