import { faLaravel, faPhp, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faCamera, faCameraRetro, faCode, faPaintBrush, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skill() {
    return (
        <div className="relative mt-24">
            <div className="flex relative">
                <h1 className="text-5xl font-serif tracking-widest -left-32 relative">
                    My Skills
                </h1>
                <FontAwesomeIcon
                    className="absolute left-32 -top-2 text-lg transform rotate-12"
                    icon={faCode}
                />
                <FontAwesomeIcon
                    className="absolute left-40 top-4 text-lg transform rotate-12"
                    icon={faCamera}
                />
                <FontAwesomeIcon
                    className="absolute left-32 top-6 text-lg transform -rotate-180"
                    icon={faPaintBrush}
                />
            </div>

            <div className="flex items-center relative mt-12">
                <div className="relative w-52">
                    <div className="bg-purple-500 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                    <div className="flex flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <FontAwesomeIcon
                            className="absolute top-0 left-4 text-7xl"
                            icon={faPhp}
                        />
                        <FontAwesomeIcon
                            className="absolute top-16 left-24 text-6xl transform rotate-12"
                            icon={faLaravel}
                        />
                        <FontAwesomeIcon
                            className="absolute top-20 left-6 text-6xl transform -rotate-12"
                            icon={faVuejs}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        Programming
                    </h4>
                    <p className="italic text-sm">
                        Native PHP, Laravel, VueJS, Flutter, and Tailwind CSS &lt;3
                    </p>
                    <p className="mt-4">
                        I code a lot using PHP, I can already hear everyone
                        is hating me because I'm not a "proper programmer"
                        who code in C or Java or any low level language,
                        but yea I'm a full-stack web developer. The only
                        programming sub-field I'm interested and passionated
                        with. In the next section I'll show you my portfolio.
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-row-reverse relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-green-500 w-48 h-48 rounded-lg transform -rotate-1 shadow"></div>
                    <div className="flex items-center justify-center absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform rotate-3 shadow-lg">
                        <FontAwesomeIcon
                            className="text-7xl transform -rotate-6"
                            icon={faCameraRetro}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        Photography
                    </h4>
                    <p className="italic text-sm">
                        Just, photograph
                    </p>
                    <p className="mt-4">
                        My photograph skill, I think is an average. Not that
                        good but I learnt some techniques to make my photos
                        looks better than others, even if I'm using a phone
                        camera. It's just a hobby and I love it. Nothing better
                        than a stamp of memory into a piece of paper.
                    </p>
                </div>
            </div>

            <div className="flex items-center relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-blue-500 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                    <div className="flex items-center justify-center absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <FontAwesomeIcon
                            className="text-7xl transform rotate-6"
                            icon={faPaintBrush}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        UI/UX
                    </h4>
                    <p className="italic text-sm">
                        Not a programming, but still programming related
                    </p>
                    <p className="mt-4">
                        I'm a UI/UX designer, I can design a lot of things
                        from a simple button to a complex web application.
                        I would spend a lot of my time designing what I want
                        besides my main work to code. Fun fact, Sometimes designer
                        tends to make overcomplicated design and programmer
                        might be angry with that (as I said this most of
                        the back end programmer might be triggered 👀).
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-row-reverse relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-gray-500 w-48 h-48 rounded-lg transform -rotate-1 shadow"></div>
                    <div className="flex items-center justify-center absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform rotate-3 shadow-lg">
                        <FontAwesomeIcon
                            className="text-7xl transform -rotate-6"
                            icon={faPen}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        Writing
                    </h4>
                    <p className="italic text-sm">
                        Story telling, blog, and more
                    </p>
                    <p className="mt-4">
                        Not a good story teller, but I can tell you
                        stories from my writing. Even though most of the time
                        I'm pretty lazy with the writing stuff lol 👀. But yeah,
                        hobby is a hobby.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;