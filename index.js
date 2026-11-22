const app = require('./app')
const { PORT } = require('@util/common')

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`) //eslint-disable-line
})