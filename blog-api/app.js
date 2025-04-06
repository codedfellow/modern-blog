const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('<h3>Blog API</h3>')
})
  
const port = 3000;

const start = async () => {
    try {
        // await connectDb(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log('start error...', error);
    }
};

start()