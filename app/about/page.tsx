import "../globals.css";
import Banner from "../components/about/banner";
import Second from "../components/about/second";
import Third from "../components/about/third";
import Fourth from "../components/about/fourth";
import Fifth from "../components/about/fifth";
import Sixth from "../components/about/sixth";
import Parallax from "../components/about/parallax";
import ScrumPage from "../components/homepage/ScrumPage";

export default function About() {
  return (
    <>
      <Banner />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Parallax />
      <ScrumPage />
    </>
  );
}
