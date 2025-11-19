import "@/app/globals.css";
import Banner from "@/app/components/casestudies/auditing/banner";
import Second from "@/app/components/casestudies/auditing/second";
import Third from "@/app/components/casestudies/auditing/third";
import Fourth from "@/app/components/casestudies/auditing/fourth";
import Fifth from "@/app/components/casestudies/auditing/fifth";
import Last from "@/app/components/casestudies/auditing/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function Auditing() {
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
