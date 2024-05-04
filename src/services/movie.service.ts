import db from '@/models/db';
import { movies, type Movie } from '@/models/schemas';
import Service from './Service';
import {logger} from '@/helpers';
import type { IResponse, IResponseWithData } from '@/types';
import { eq } from 'drizzle-orm';

class MovieService extends Service {
  public async getMovies(): Promise<Omit<IResponseWithData<Movie[]>, 'errors' | 'message'> | Omit<IResponseWithData<Movie[]>, 'errors' | 'data'>> {
    try {
      const results = await db.select().from(movies);

      if(results.length > 0) {
        return {
          statusCode: 200,
          data: results
        };
      }

      return {
        statusCode: 404,
        data: []
      };
    } catch (err) {
      logger.error(err);
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal Server'
      };
    }
  }

  public async createMovie(): Promise<Omit<IResponse, 'errors'> | Omit<IResponse, 'message'>> {
    try {
      await db.insert(movies).values(this.body);
      return {
        statusCode: 201,
        message: 'Movie created'
      };
    } catch (err) {
      logger.error(err);
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal Server'
      };
    }
  }

  public async getMovie(): Promise<Omit<IResponseWithData<Movie | null>, 'errors' | 'message'> | Omit<IResponse, 'errors'>> {
    try {
      const result = await db.select().from(movies).where(eq(movies.id, Number(this.params.id)));

      if(result.length > 0) {
        return {
          statusCode: 200,
          data: result[0]
        };
      }

      return {
        statusCode: 404,
        message: 'Movie is not found'
      };
    } catch (err) {
      logger.error(err);
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal Server'
      };
    }
  }

  public async deleteMovie(): Promise<Omit<IResponse, 'errors' | 'message'> | Omit<IResponse, 'errors'>> {
    try {
      const result = await db.select().from(movies).where(eq(movies.id, Number(this.params.id)));

      if(result.length > 0) {
        await db.delete(movies).where(eq(movies.id, Number(this.params.id)));
        return {
          statusCode: 200,
          message: 'Movie is deleted'
        };
      }

      return {
        statusCode: 404,
        message: 'Movie is not found'
      };
    } catch (err) {
      logger.error(err);
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal Server'
      };
    }
  }

  public async updateMovie(): Promise<Omit<IResponse, 'errors'> | Omit<IResponse, 'message'>> {
    try {
      const result = await db.select().from(movies).where(eq(movies.id, Number(this.params.id)));

      if(result.length > 0) {
        await db.update(movies).set(this.body).where(eq(movies.id, Number(this.params.id)));
        return {
          statusCode: 201,
          message: 'Movie updated'
        };
      } else {
        return {
          statusCode: 404,
          message: 'Movie is not found'
        };
      }

    } catch (err) {
      logger.error(err);
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal Server'
      };
    }
  }
}

export default MovieService;