import { Injectable } from "@nestjs/common";
import { ArticleDto } from "./article.dto";
import { ArticlesRepository } from "./articles.repository";

@Injectable()
export class ArticlesService {
    constructor(private readonly articlesRepository: ArticlesRepository) {}

    findAll(): ArticleDto[] {
        return this.articlesRepository.findAll();
    }
}