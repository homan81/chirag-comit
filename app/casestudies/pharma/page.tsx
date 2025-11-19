import "@/app/globals.css";
import Banner from "@/app/components/casestudies/pharma/banner";
import Second from "@/app/components/casestudies/pharma/second";
import Third from "@/app/components/casestudies/pharma/third";
import Fourth from "@/app/components/casestudies/pharma/fourth";
import Fifth from "@/app/components/casestudies/pharma/fifth";
import Last from "@/app/components/casestudies/pharma/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Pharma() {
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
