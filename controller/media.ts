import { Request, Response } from "express";
import { MediaModel } from "../models/media";

interface MulterRequest extends Request {
    file: any;
}

export const uploadImg = (req: Request, res: Response) => {
    if(req.file) {
        res.json({
            file: (req as MulterRequest).file.location
        })
    }
}

export const createMedia = async(req: Request, res: Response) => {
    const body = req.body

    const media = new MediaModel(body)
    await media.save()

    return res.json({
        media
    })
}

export const getMedia = async(req: Request, res: Response) => {

    const orderBy = req.params.orderby as 'SUBJECT' | 'TYPE'

    let media 

    switch(orderBy){
        case 'SUBJECT': 
            media = await MediaModel.find().sort({subject: 1})
            break;
        
        case 'TYPE': 
            media = await MediaModel.find().sort({type: 1})
            break;
        default:
            media = await MediaModel.find().sort({createdAt: 1})
    }

    return res.json({
        media
    })
}

export const getMediaBySubject = async(req: Request, res: Response) => {

    const orderBy = req.params.orderby as 'SUBJECT' | 'TYPE'
    const searchString = req.params.searchString

    let media 

    switch(orderBy){
        case 'SUBJECT': 
            media = await MediaModel.find({
                subject:{$regex: searchString, $options: 'i'}
            }).sort({subject: 1})
            break;
        
        case 'TYPE': 
            media = await MediaModel.find({
                subject:{$regex: searchString, $options: 'i'}

            }).sort({type: 1})
            break;
        default:
            media = await MediaModel.find({
                subject:{$regex: searchString, $options: 'i'}

            }).sort({createdAt: 1})
    }

    return res.json({
        media
    })
}

export const getMediaByTitle = async(req: Request, res: Response) => {

    const orderBy = req.params.orderby as 'SUBJECT' | 'TYPE'
    const searchString = req.params.searchString

    let media 

    switch(orderBy){
        case 'SUBJECT': 
            media = await MediaModel.find({
                title:{$regex: searchString, $options: 'i'}
            }).sort({subject: 1})
            break;
        
        case 'TYPE': 
            media = await MediaModel.find({
                title:{$regex: searchString, $options: 'i'}

            }).sort({type: 1})
            break;
        default:
            media = await MediaModel.find({
                title:{$regex: searchString, $options: 'i'}

            }).sort({createdAt: 1})
    }

    return res.json({
        media
    })
}

export const getMediaById = async(req: Request, res: Response) => {

    const id = req.params.id

    const media = await MediaModel.findById(id)

    return res.json({
        media
    })
}