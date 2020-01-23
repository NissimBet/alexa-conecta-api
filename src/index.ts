import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import mongo from 'connect-mongo';

import { MONGODB_URI, SESSION_SECRET } from './utils/secrets';
import { GetAllGroups, GetGroupByName } from './controllers/';

const app = express();

const MongoStore = mongo(session);

// create connection to mongo DB cloud
const mongoURL = MONGODB_URI;
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo server at ' + mongoURL))
  .catch(error => console.log('MongoDB connection error. Make sure it is running ' + error));

app.set('port', process.env.PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.get('/', (_, res) => {
  res.status(200).send('Hi');
});

app.get('/api/groups/all', GetAllGroups);
app.get('/api/group/name/:name', GetGroupByName);

export default app;
