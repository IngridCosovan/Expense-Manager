const express = require('express')
const app = express()
const port = 7117
export default app

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
