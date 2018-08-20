const express = require ('express');
const PORT = process.env.PORT || 3000;
app = express();

app.listen(PORT, () => {
    console.log(`listening at: ${PORT}`)
})