const http = require('http')

const port = 3030

const options = {
	hostname: 'localhost',
	port: port,
	path: '/',
	method: 'GET'
}

const req = http.request(options, res => {
	console.log(`status code: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

req.on('error', error => {
	console.error(error)
})

req.end()