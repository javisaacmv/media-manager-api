import {Router} from 'express'

import { isCreator, isReader } from '../middlewares/validateJWT'
import { upload } from '../helpers/upload'
import { createMedia, getMedia, getMediaById, getMediaBySubject, getMediaByTitle, uploadImg } from '../controller/media'


const mediaRouter = Router()

mediaRouter.get('/', getMedia)
mediaRouter.get('/:orderby', getMedia)
 mediaRouter.get('/subject/:searchString', getMediaBySubject)
 mediaRouter.get('/subject/:searchString/:orderby', getMediaBySubject)
mediaRouter.get('/title/:searchString', getMediaByTitle)
mediaRouter.get('/title/:searchString/:orderby', getMediaByTitle)
mediaRouter.get('/byId/:id', isReader, getMediaById)
mediaRouter.post('/',isCreator, createMedia)
mediaRouter.post('/image',[isCreator, upload.single('img')], uploadImg)



export default mediaRouter