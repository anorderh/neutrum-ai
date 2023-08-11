import { Controller, Post } from '@nestjs/common';
import { BiasService } from './bias.service';

@Controller('bias')
export class BiasController {
    constructor(private readonly biasService: BiasService) {}

    @Post('transform')
    async transformBias(article: string): Promise<string> {
        const transformedArticle = await this.biasService.detectAndTransform(article);
        return transformedArticle;
    }
}