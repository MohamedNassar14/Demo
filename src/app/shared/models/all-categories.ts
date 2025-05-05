export interface SubCategory {
    id: string;
    mainCategoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    subCategories: SubCategory[];
  }
  export interface CreateCategoryDto {
    name: string;
    description: string;
    imageUrl: string;
  }
  export interface UpdateCategoryDto {
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
  }
  
  export interface SubCategories {
    id: string;
    mainCategoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    mainCategory: {
      id: string;
      name: string;
      description: string;
      imageUrl: string;
      createdAt: string;
      updatedAt: string;
    }
  }
  
  export interface MainCategoriesResponse {
    message: string;
    data: Category[];
  }
  export interface SubCategoriesResponse {
    message: string;
    data: Category;
  }
  
