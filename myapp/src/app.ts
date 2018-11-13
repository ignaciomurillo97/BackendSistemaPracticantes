import express = require("express");
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import cors = require('cors');

import { router as administratorRouter} from './routes/administrator';
import { router as companyRouter} from './routes/company';
import { router as coordinatorRouter} from './routes/coordinator';
import { router as studentRouter} from './routes/student';
import { router as loginRouter } from "./routes/login";


// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use('/administrator', administratorRouter );
app.use('/company', companyRouter );
app.use('/coordinator', coordinatorRouter );
app.use('/student', studentRouter );
app.use('/login', loginRouter );




// export our app
export default app;