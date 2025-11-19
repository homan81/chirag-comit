import "@/app/globals.css";
import Banner from "@/app/components/casestudies/damages/banner";
import Second from "@/app/components/casestudies/damages/second";
import Third from "@/app/components/casestudies/damages/third";
import Fourth from "@/app/components/casestudies/damages/fourth";
import Fifth from "@/app/components/casestudies/damages/fifth";
import Last from "@/app/components/casestudies/damages/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Damages() {
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
