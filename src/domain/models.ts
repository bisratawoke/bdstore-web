export interface ICategorie {
  title: string;
  icon?: React.ReactElement;
}

export interface IProduct {
  id: string;
  location: string;
  price: number;
  description: String;
  catalog_type: string;
  status: string;
  picture_url: string;
}

export interface Region {
  name: string;
  picture_url: string;
}
