import Footer from "../../components/common/footer/footer";
import ChooseCategory from "../../components/home/choose-category/choose-category";
import GetStarted from "../../components/home/get-started/get-started";
import Header from "../../components/home/header/header";
import HeroSearch from "../../components/home/hero-search/hero-search";
import Instruction from "../../components/home/instruction/instruction";

const HomeLayout = (props) => {

  return (
    <div>
      <Header />
      <HeroSearch />
      <Instruction />
      <ChooseCategory />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default HomeLayout;
