import type { Request } from 'express';

abstract class Service {
  protected body: Request['body'];
  protected params: Request['params'];

  constructor(req: Request) {
    this.body = req.body;
    this.params = req.params;
  }
}

export default Service;