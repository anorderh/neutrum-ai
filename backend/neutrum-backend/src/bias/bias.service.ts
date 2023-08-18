import { Injectable } from '@nestjs/common';

@Injectable()
export class BiasService {
    detectAndTransform(article: string): string {
        let modifiedArticle = "this is the output text!";
        // detect bias and transfrom article logic here
        return modifiedArticle;
        // return new Promise<string>(() => {return modifiedArticle}); 
    }
}
