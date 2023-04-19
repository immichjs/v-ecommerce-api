import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  private categories = [];

  public findAll() {
    return this.categories;
  }

  public createCategory({ name, description }: CreateCategoryDto) {
    const category = { id: uuid(), name, description };
    this.categories.push(category);

    return category;
  }

  public updateCategory(id: string, { name, description }: UpdateCategoryDto) {
    const category = this.categories.find((category) => category.id === id);

    if (category) {
      if (name) category.name = name;
      if (description) category.description = description;

      return category;
    }
  }

  public deleteCategory(id: string) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (categoryIndex >= 0) {
      this.categories.splice(categoryIndex, 1);
    }
  }
}
