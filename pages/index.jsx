import Activities from "./section/activities";
import Footer from "./section/footer";
import Introduction from "./section/introduction";
import Portfolio from "./section/portfolio";
import Skill from "./section/skill";
import Study from "./section/study";

function HomePage() {
    return (
        <div className="min-h-full background">
            <div className="max-w-4xl mx-auto font-sans antialiased text-gray-700">
                <div className="bg-white py-12 px-16 shadow-lg">
                    <Introduction />
                    <Study />
                    <Skill />
                    <Portfolio />
                    {/* <Activities /> */}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default HomePage;