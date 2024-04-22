import {Router} from 'express'
import { createMedia, getMedia, getMediaById, getMediaBySubject, getMediaByTitle, uploadImg } from '../controllers/media'
import { upload } from '../helpers/upload'
import { isCreator, isReader } from '../middlewares/validateJWT'


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