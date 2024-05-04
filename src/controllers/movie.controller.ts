import {MovieService} from '@/services';
import type { Request, Response } from 'express';


class MovieController {
  public static async getMovies(req: Request, res: Response): Promise<Response> {
    const movieService = new MovieService(req);
    const result = await movieService.getMovies();
    return res.status(result.statusCode).json(result);
  }

  public static async createMovie(req: Request, res: Response): Promise<Response> {
    const movieService = new MovieService(req);
    const result = await movieService.createMovie();
    return res.status(result.statusCode).json(result);
  }

  public static async getMovie(req: Request, res: Response): Promise<Response> {
    const movieService = new MovieService(req);
    const result = await movieService.getMovie();
    return res.status(result.statusCode).json(result);
  }

  public static async deleteMovie(req: Request, res: Response): Promise<Response> {
    const movieService = new MovieService(req);
    const result = await movieService.deleteMovie();
    return res.status(result.statusCode).json(result);
  }

  public static async updateMovie(req: Request, res: Response): Promise<Response> {
    const movieService = new MovieService(req);
    const result = await movieService.updateMovie();
    return res.status(result.statusCode).json(result);
  }
}

export default MovieController;