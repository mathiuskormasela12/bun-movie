import {Router} from 'express';
import {MovieController} from '@/controllers';
import { checkCreateMovieBodyMiddleware } from '../config/middlewares';

const movieRouter = Router();

movieRouter.get('/movies', MovieController.getMovies);
movieRouter.get('/movie/:id', MovieController.getMovie);
movieRouter.delete('/movie/:id', MovieController.deleteMovie);
movieRouter.post('/movie', checkCreateMovieBodyMiddleware, MovieController.createMovie);
movieRouter.put('/movie/:id', checkCreateMovieBodyMiddleware, MovieController.updateMovie);

export default movieRouter;