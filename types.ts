export interface ProductsResponse {
    data: ProductWithAttributes[]
    meta: Meta
}

export interface ProductWithAttributes {
    id: number
    attributes: Product
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export interface Product {
    title: string
    description: string
    price: number
    isNew: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: Image
    categories: Categories
}

export interface Image {
    data: {
        id: number
        attributes: ImageAttributes
    }
}

export interface ImageAttributes {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: ImageFormats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
}

export interface ImageFormats {
    thumbnail: Thumbnail
    small: Small
    medium: Medium
    large: Large
}

export interface Thumbnail {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Small {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Medium {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Large {
    name: string
    hash: string
    ext: string
    mime: string
    path: any
    width: number
    height: number
    size: number
    sizeInBytes: number
    url: string
}

export interface Categories {
    data: Category[]
}

export interface Category {
    id: number
    attributes: categoryAttributes
}

export interface categoryAttributes {
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}





type TProduct = {
    id: number;
    attributes: {
        categories: {
            data: [
                {
                    id: number;
                    attributes: {
                        title: string;
                        // ...
                    };
                },
            ];
        };
        createdAt: Date;
        description: string;
        image: {
            data: {
                attributes: {
                    name: string;
                    url: string;
                    // ...
                };
            };
        };
        isNew: boolean;
        price: number;
        title: string;
        // ...
    };
};

type TCategory = {
    id: number;
    attributes: {
        title: string;
        // ...
    };
};

type TCart = {
    id: string;
    item: TProduct;
    amount: number;
};

export type { TProduct, TCategory, TCart };
