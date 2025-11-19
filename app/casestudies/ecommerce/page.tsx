import "@/app/globals.css";
import Banner from "@/app/components/casestudies/ecommerce/banner";
import Second from "@/app/components/casestudies/ecommerce/second";
import Third from "@/app/components/casestudies/ecommerce/third";
import Fourth from "@/app/components/casestudies/ecommerce/fourth";
import Fifth from "@/app/components/casestudies/ecommerce/fifth";
import Last from "@/app/components/casestudies/ecommerce/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Ecommerce() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <div className="container border-1 border-b-black border-dashed mx-auto"></div>
      <Last />
      {/* <Parallax />
      <ScrumPage /> */}
    </>
  );
}
