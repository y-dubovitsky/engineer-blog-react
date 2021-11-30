import Footer from "../../components/private/footer/footer";
import ChooseCategory from "../../components/public/choose-category/choose-category";
import GetStarted from "../../components/public/get-started/get-started";
import Header from "../../components/public/header/header";
import HeroSearch from "../../components/public/hero-search/hero-search";
import Instruction from "../../components/public/instruction/instruction";

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