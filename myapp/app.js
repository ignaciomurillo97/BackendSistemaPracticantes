const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');


let administratorRouter = require('./routes/administrator.js');
let companyRouter = require('./routes/company.js');
let coordinatorRouter = require('./routes/coordinator.js');
let indexRouter = require('./routes/index.js');
let loginRouter = require('./routes/login.js');
let studentRouter = require('./routes/student.js');

let app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/administrator', administratorRouter);
app.use('/company', companyRouter);
app.use('/coordinator', coordinatorRouter);
// app.use('/session', sessionRouter);
app.use('/student', studentRouter);
app.use('/login', loginRouter);


// session
app.set('trust proxy', 1);
app.use(session({
   secret: 'culpa de torres',
   resave: true,
   saveUninitialized: true,
   cookie: { maxAge: 6000000 }
}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

module.exports = app;
