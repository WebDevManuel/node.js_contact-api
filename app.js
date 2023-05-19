import express from "express";

const app = express();
const port = 3_000;

let contacts = [
  {
    id: 1,
    name: "mazlum",
    email: "mazzi@web.de",
  },
  {
    id: 2,
    name: "claudio",
    email: "claudio@web.de"
  },

]

app.get('/', (req, res) => {
  res.status(200).send("HOME => endpoints: /contacts");
});

app.get('/contacts', (req, res) => {
  res.json(contacts)
});

app.get('/contacts:contactId', (req,res)=>{
  try {
    const {contactsID} =req.params;
    
  } catch (error) {
    
  }

})


app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});