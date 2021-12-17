const http = require('http')

console.log('http methods: ', http.METHODS)
console.log('http status codes: ', http.STATUS_CODES)
console.log('http global agent: ', http.globalAgent)

// server tests 

const server = http.createServer((req, res) => {
	// put http request handlers here
	res.statusCode = 200
	res.setHeader('Content-Type', 'text/html')
	res.end('<h1>Hello yall!</h1>')

})

const port = 3030

server.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
