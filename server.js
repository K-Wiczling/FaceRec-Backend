const http = require ('http');

const server = http.createServer((request, response) => {
    const user = {
        name: 'Karol',
        place: 'Rumia'
    }
    response.setHeader('Content-type', 'application/json')
    response.end(JSON.stringify(user))
})

server.listen(3000)
