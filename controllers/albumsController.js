const axios = require('axios');

const albumsController = {
    index:('/albums', async (req, res) => {
        console.log('ok');
        let postData =  await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/albums')
        ]);

        const posts = postData[0].data;        

        // send data to view
        res.render('albums', { apiResponse: posts });
        console.log(posts)
    })
}
module.exports = albumsController;