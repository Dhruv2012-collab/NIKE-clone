import NavBar from "./components/navbar";
import SearchBar from "./components/search";
import Sales from "./components/sales";
import LookOfFootball from "./components/look_of_football";
import Featured from "./components/featured";
// import { Scroll } from "lucide-react";
import Carousel from "./components/Carousel";
import Carouseltwo from "./components/Carouseltwo";
import SportCarousel from "./components/SportCarousel";
// import ShoeCarousel from "./components/shoecarosuel";

const App = () => {
  const searchData = [
    "New & Featured",
    "Men",
    "Women",
    "Kids",
    "Sale",
    "SNKRS",
  ];
  const slides = [
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/916afd63-ef31-4778-b80d-0482e9c671e7/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/c6ed0822-346c-4719-92ad-ec07855d5648/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_437,c_limit/717b69f4-c425-47dc-8e1e-34478d0f5573/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_300,c_limit/916afd63-ef31-4778-b80d-0482e9c671e7/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_441,c_limit/4a130a2d-4553-4ffd-8ec1-1975d24c3621/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_437,c_limit/5cdb2af6-eac7-471f-9e8f-e9f42a418318/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_441,c_limit/f092034a-ca4c-4969-b968-10fc151ccc54/men-s-shoes-clothing-accessories.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_501,c_limit/109ec4a2-a1ea-4aa3-8af4-b04a5c4db766/men-s-shoes-clothing-accessories.jpg",
  ];
  return (
    <div class="flex flex-col flex-wrap">
      <NavBar
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1024px-Jumpman_logo.svg.png"
        store="Find a Store"
        help="Help"
        join="Join Us"
        signIn="Sign In"
      />
      <SearchBar
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1920px-Logo_NIKE.svg.png"
        searchItems={searchData}
      />
      <Sales
        display="New Styles On Sale: Up To 40% Off"
        info="Shop All Our New Markdowns"
      />
      <LookOfFootball
        logo="https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/57e6bdb9-54da-439f-9dd1-0e30bfdc9b62/image.jpg"
        title="FIELD GENERAL"
        subtitle="Look of Football"
        description="Crafted with purpose. Driven by passion. Designed for everyday."
        btnText="Shop"
      />
      <Featured />
      <Carousel slides={slides} />
      <Carouseltwo />
      <SportCarousel />
    </div>
  );
};

export default App;
