require('module-alias/register')

const { PORT } = require('@util/common')
const app = require('./app')

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`) //eslint-disable-line
})
