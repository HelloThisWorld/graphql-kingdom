const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
const _conn = process.env.mongogq;

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

mongoose.connect(_conn, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Yes! We are connected!');
});


const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(4000, () => {
    console.log('Listening for requets on my awesome port 4000');
});