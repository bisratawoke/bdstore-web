import { ICategorie, IProduct, Region } from "../domain/models";
import { AiOutlineCar } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsHouse, BsPencil } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { BiBook, BiNetworkChart } from "react-icons/bi";
import { MdOutlineFastfood } from "react-icons/md";
import { TbShoe } from "react-icons/tb";
import { RiEyeCloseLine } from "react-icons/ri";
// import { MdOutlineWbSunny } from "react-icons/md";
import { GiJewelCrown } from "react-icons/gi";
export default class localStorage {
  private categories = [
    {
      title: "Technology",
      icon: <HiOutlineComputerDesktop className="text-2xl text-gray-600" />,
    },
    {
      title: "CAR",
      icon: <AiOutlineCar className="text-2xl text-gray-600" />,
    },
    {
      title: "Shoes",
      icon: <TbShoe className="text-2xl text-gray-600" />,
    },
    {
      title: "Clothing",
      icon: <IoShirtOutline className="text-2xl text-gray-600" />,
    },
    {
      title: "Cosmotics",
      icon: <RiEyeCloseLine className="text-2xl text-gray-600" />,
    },
    {
      title: "House",
      icon: <BsHouse className="text-2xl text-gray-600" />,
    },
    {
      title: "Books",
      icon: <BiBook className="text-2xl text-gray-600" />,
    },
    {
      title: "Food",
      icon: <MdOutlineFastfood className="text-2xl text-gray-600" />,
    },
    {
      title: "Stationary",
      icon: <BsPencil className="text-2xl text-gray-600" />,
    },
    {
      title: "Jobs",
      icon: <BiNetworkChart className="text-2xl text-gray-600" />,
    },
    {
      title: "Jewelery",
      icon: <GiJewelCrown className="text-2xl text-gray-600" />,
    },
  ];
  private products = [
    {
      id: "1",
      location: "Amhara",
      region_name: "Amhara",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Open for negotiation",
      picture_url:
        "https://a0.muscache.com/im/pictures/5ba59478-0416-4fac-8661-6c976e9f262b.jpg?im_w=720",
    },
    {
      id: "1",
      location: "Addis Ababa",
      region_name: "Addis Ababa",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "Addis Ababa",
      region_name: "Addis Ababa",
      price: 3000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "SNNP",
      region_name: "SNNP",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "SNNP",
      region_name: "SNNP",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Open of negotiation",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "Amhara",
      region_name: "Amhara",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Open for negotiation",
      picture_url:
        "https://a0.muscache.com/im/pictures/5ba59478-0416-4fac-8661-6c976e9f262b.jpg?im_w=720",
    },
    {
      id: "1",
      location: "Addis Ababa",
      region_name: "Addis Ababa",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "Addis Ababa",
      region_name: "Addis Ababa",
      price: 3000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "SNNP",
      region_name: "SNNP",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Fixed price",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
    {
      id: "1",
      location: "SNNP",
      region_name: "SNNP",
      price: 1000,
      description: "New Car",
      catalog_type: "CAR",
      status: "Open of negotiation",
      picture_url: "https://via.placeholder.com/300x200.png",
    },
  ];
  constructor() {}

  public async storeItem(key: string, value: string) {
    return new Promise<boolean>((resolve, reject) => {
      try {
        window.localStorage.setItem(key, value);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  }
  public getItem(key: string) {
    return window.localStorage.getItem(key);
  }

  public getProductFilters() {
    return {
      location: window.localStorage.getItem("location"),
      category: window.localStorage.getItem("category"),
      min_price: window.localStorage.getItem("min_price"),
      max_price: window.localStorage.getItem("max_price"),
    };
  }

  public async getCategories(filter?: string): Promise<Array<ICategorie>> {
    if (filter && filter.length > 0) {
      return this.categories.filter((categorie: ICategorie) =>
        categorie.title.toLowerCase().startsWith(filter.toLowerCase())
      );
    } else return this.categories;
  }

  public async getProducts(filter?: any): Promise<IProduct[]> {
    let current = await this.filterProductsByProductType(filter.category);
    current = await this.filterProductsByRegion(filter.location, current);
    current = await this.filterProductsByPriceRange(
      parseInt(filter.min_price),
      parseInt(filter.max_price),
      current
    );
    return current;
  }

  private async filterProductsByProductType(
    productName: string
  ): Promise<IProduct[]> {
    if (productName && productName.length > 0 && productName !== "Everything") {
      let products = this.products.filter((product: IProduct) =>
        product.catalog_type.toLowerCase().startsWith(productName.toLowerCase())
      );
      return products;
    } else return this.products;
  }
  private async filterProductsByRegion(
    regionName: string,
    current: IProduct[]
  ): Promise<IProduct[]> {
    if (regionName && regionName.length > 0 && regionName !== "Anywhere") {
      return current.filter((product: IProduct) =>
        product.location.toLowerCase().startsWith(regionName.toLowerCase())
      );
    } else return current;
  }

  private async filterProductsByPriceRange(
    min_price: number,
    max_price: number,
    current: IProduct[]
  ): Promise<IProduct[]> {
    if (
      min_price &&
      max_price &&
      min_price > 0 &&
      max_price > 0 &&
      min_price != null &&
      max_price != null
    ) {
      return current.filter(
        (product: IProduct) =>
          product.price >= min_price && product.price <= max_price
      );
    } else return current;
  }
  public async getRegions(filter?: string): Promise<Region[]> {
    if (filter && filter?.length > 0) {
      return [
        {
          name: "Amhara",
          picture_url: "https://via.placeholder.com/300x200.png",
        },
        {
          name: "Addis",
          picture_url: "/src/assets/Flag_of_Addis_Ababa.svg.png",
        },
        {
          name: "SNNP",
          picture_url:
            "/src/assets/Flag_of_the_Southern_Nations,_Nationalities,_and_Peoples'_Region.svg.png",
        },
        {
          name: "Oromia",
          picture_url: "/src/assets/flag_of_oromia_region.gif",
        },
      ].filter((region: Region) => !region.name.toLowerCase().indexOf(filter));
    }
    return [
      {
        name: "Amhara",
        picture_url: "https://via.placeholder.com/300x200.png",
      },
      {
        name: "Addis",
        picture_url: "/src/assets/Flag_of_Addis_Ababa.svg.png",
      },
      {
        name: "SNNP",
        picture_url:
          "/src/assets/Flag_of_the_Southern_Nations,_Nationalities,_and_Peoples'_Region.svg.png",
      },
      {
        name: "Oromia",
        picture_url: "/src/assets/flag_of_oromia_region.gif",
      },
    ];
  }

  public getUserToken(): string | null {
    try {
      const token = window.localStorage.getItem("token");
      if (token && token.length > 1) {
        return token;
      } else return null;
    } catch (error) {
      throw error;
    }
  }

  public deleteToken() {
    try {
      window.localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  }
}
