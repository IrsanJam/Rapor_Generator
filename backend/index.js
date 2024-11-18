import mysql from 'mysql2';
import { urlPort, mysqlDBConfig } from './config.mjs';
import express from 'express';
import cors from 'cors';
import authModel from './routes/authRouter.mjs';
import template from './routes/template.mjs';

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use('/', [authModel, template]);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Welcome to MERN Project' });
});

// Setup MySQL connection
const connection = mysql.createConnection(mysqlDBConfig);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error.stack);
    return;
  }
  console.log('Connected to MySQL Database');
  app.listen(urlPort, () => {
    console.log('Server running on port', urlPort);
  });
});
