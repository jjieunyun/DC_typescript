/**
 * 💡record타입! -> 잘 모르겠으니 다시 복습해볼 것
 */

type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

//❗️한 page당 PageInfo를 묶어 줄수있는 형태
const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
