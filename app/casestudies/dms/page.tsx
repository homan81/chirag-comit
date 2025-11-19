import "@/app/globals.css";
import Banner from "@/app/components/casestudies/dms/banner";
import Second from "@/app/components/casestudies/dms/second";
import Third from "@/app/components/casestudies/dms/third";
import Fourth from "@/app/components/casestudies/dms/fourth";
import Fifth from "@/app/components/casestudies/dms/fifth";
import Last from "@/app/components/casestudies/dms/last";
// import Parallax from "../../components/casestudies/parallax";
// import ScrumPage from "../../components/homepage/ScrumPage";

export default function DMS() {
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
