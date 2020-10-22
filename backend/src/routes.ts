import {Router} from 'express'
import multer from 'multer'

import OrphanageController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

import UsersController from './controllers/UsersContreoller';

const upload = multer(uploadConfig)

const routes = Router();

routes.get('/orphanages', OrphanageController.index) 
routes.get('/orphanages/:id', OrphanageController.show)  
routes.post('/orphanages', upload.array('images') ,OrphanageController.create)  

routes.post('/users', UsersController.create)
export default routes;