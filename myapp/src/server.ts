import app from './app'

const server = app.listen(app.get("port"), () => {
    console.log('Server running in port 3000')
});

export default server;