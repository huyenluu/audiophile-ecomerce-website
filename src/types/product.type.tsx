interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Includes {
  quantity: number;
  item: string;
}

interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

interface Other {
  slug: string;
  name: string;
  image: Image;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Gallery;
  others: Other[];
}
