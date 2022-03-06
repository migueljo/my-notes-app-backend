const express = require('express')
const bodyParser = require('body-parser')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error-handler.middleware')

require('./libs/sequelize')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.get('/test', (req, res) => {
  res.json({ message: 'success' })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
