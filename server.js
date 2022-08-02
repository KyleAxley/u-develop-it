//import express
const express = require('express');
//port designation
const PORT = process.envPORT || 3001;
const app = express();

// express middleware 
app.use(express.urlencoded({ express: false }));
app.use(express.json()); 


//Default response for any other request (Not Found)

app.use((req, res) => {
    res.status(404).end(); 
}); 


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}!`); 
});
