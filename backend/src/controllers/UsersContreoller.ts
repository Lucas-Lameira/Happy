import {Request, Response} from 'express'

export default {
  create (request: Request, response: Response) {
    
    const {name, email, password} = request.body;
    const userData = {name, email, password}

    return response.json(userData)
  }
}