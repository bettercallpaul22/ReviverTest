 export interface ImageModel {
    id:string;
    name:string;
 }

 interface Photo {
    url: string;
    user: number;
    title: string;
    id: number;
    description: string;
  }
  
  export interface PhotosResponse {
    success: boolean;
    total_photos: number;
    message: string;
    offset: number;
    limit: number;
    photos: Photo[];
  }