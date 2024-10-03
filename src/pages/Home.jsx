import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Category from "../Components/Category";
import Deals from "../Components/Deals";
import FeaturedProduct from "../Components/Featuredproduct";
import Menu from "../Components/Menu"
import ServicesSection from "../Components/ServicesSection";
import AuthComponent from './../Components/AuthComponent';
import Poster from './../Components/Poster';
import Brand from './../Components/Brand';
import TodayDeals from "../Components/TodayDeals";
import NewArrival from "../Components/NewArrival";

function Home() {
    return (
        <div>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <FeaturedProduct></FeaturedProduct>
            <TodayDeals></TodayDeals>
            <NewArrival></NewArrival>
            <Poster></Poster>
            <Deals></Deals>
            <Category></Category>
            <Blog></Blog>
            <Brand></Brand>


        </div>
    )
}

export default Home
