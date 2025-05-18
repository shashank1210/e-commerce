import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from '../config/cloudinary.config';
import { ApiError } from './ApiError';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'shopspot',
        format: async () => 'jpg', // supports promises as well
        public_id: (req: Request, file: Express.Multer.File) => {
            // Use original filename (without extension) + timestamp for uniqueness
            const name = file.originalname.split('.').slice(0, -1).join('.') || 'image';
            return `${name}-${Date.now()}`;
        },
    } as any,
});

const upload = multer({ storage: storage });


const uploadImage = (fieldName: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const uploadSingle = upload.single(fieldName);
        uploadSingle(req, res, (err: any) => {
            if (err) {
                console.error('Cloudinary upload error:', err); // Add this line
                return res.status(400).send({ message: 'Image upload failed', error: err });
            }
            next();
        });
    };
};

const deleteImage = async (publicId: string) => {
    try {
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
    } catch (error) {
        console.log('Error deleting image: ' + error.message);
    }
};

export { uploadImage, deleteImage };
