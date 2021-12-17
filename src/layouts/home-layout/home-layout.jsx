import { Route, Switch } from "react-router";
import Footer from "../../components/common/footer/footer";
import ChooseCategory from "../../components/home/choose-category/choose-category";
import GetStarted from "../../components/home/get-started/get-started";
import Header from "../../components/home/header/header";
import HeroSearch from "../../components/home/hero-search/hero-search";
import Instruction from "../../components/home/instruction/instruction";
import SignIn from "../../components/home/sign-in/sign-in";
import SignUp from "../../components/home/sign-up/sign-up";

const HomeLayout = (props) => {

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home/sign-in">
          <SignIn />
        </Route>
        <Route path="/home/sign-up">
          <SignUp />
        </Route>
      </Switch>
      <HeroSearch />
      <Instruction />
      <ChooseCategory />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default HomeLayout;
