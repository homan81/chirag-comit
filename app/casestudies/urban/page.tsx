import "@/app/globals.css";
import Banner from "@/app/components/casestudies/urban/banner";
import Second from "@/app/components/casestudies/urban/second";
import Third from "@/app/components/casestudies/urban/third";
import Fourth from "@/app/components/casestudies/urban/fourth";
import Fifth from "@/app/components/casestudies/urban/fifth";
import Last from "@/app/components/casestudies/urban/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Urban() {
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
