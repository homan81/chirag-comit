import "../globals.css";
import Banner from "../components/category/banner";
import Parallax from "../components/category/parallax";
import Second from "../components/category/second";
import ScrumPage from "../components/homepage/ScrumPage";
import Third from "../components/category/third";

export default function Category() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Parallax />
      <ScrumPage />
    </>
  );
}
