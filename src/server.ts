import express, { type NextFunction, type Request, type Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors, { type CorsOptions } from 'cors';
import morgan from 'morgan';
import config from '@/config';
import {movieRouter} from '@/routers';

const app = express();

// Setup helmet
app.use(helmet());

// Setup compression
app.use(compression());

// Setup Cors
const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if(!origin || config.CLIENTS.includes(origin)) {
      callback(null, true);
    } else {
      throw new Error('Blocked by cors');
    }
  },
};
app.use(cors(corsOptions));

// Setup logger
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1', movieRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, __next: NextFunction) => {
  res.status(500).json({
    statusCode: 500,
    errors: [
      {
        server: error.message
      }
    ]
  });
});

app.listen(config.PORT, () => {
  console.log('Magic happens at port', config.PORT);
});