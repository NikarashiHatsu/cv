import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import LogoSmkn1Kedawung from './../../images/logo_smkn1_kedawung.jpg';
import LogoUmc from './../../images/logo_umc.png';
import Path from './../../images/path.svg';

function Study() {
    return (
        <div className="relative mt-24">
            <h1 className="text-5xl font-serif tracking-widest -left-32 relative">
                My Study
            </h1>
            <div className="flex mt-12 z-10 relative">
                <div className="relative w-52">
                    <div className="bg-yellow-500 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                        <div className="flex flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <Image
                            className="rounded-lg"
                            src={LogoSmkn1Kedawung}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        SMK Negeri 1 Kedawung
                    </h4>
                    <p className="italic text-sm">
                        2016 - 2019, Multimedia, Graduated with avg 71.5/100
                    </p>
                    <p className="mt-4">
                        I studied in SMK Negeri 1 Kedawung, a Vocational School
                        in Cirebon, West Java, Indonesia. I learnt animation,
                        photography, broadcasting, graphic design and web design.
                        Achieved first place in Web Design Competition
                        throughout the district at 2018, then advanced to the
                        province level. There, I achieve 4th place in the competition.
                    </p>
                </div>
            </div>

            <div className="relative -top-8">
                <FontAwesomeIcon
                    className="text-4xl absolute top-32 left-56 opacity-70 transform rotate-12"
                    icon={faGraduationCap}
                />
                <Image
                    className="opacity-50"
                    width={720}
                    src={Path}
                />
            </div>

            <div className="flex flex-row-reverse -top-12 relative">
                <div className="relative w-52">
                    <div className="bg-red-600 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                        <div className="flex flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <Image
                            className="rounded-lg"
                            src={LogoUmc}
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        Muhammadiyah Cirebon University
                    </h4>
                    <p className="italic text-sm">
                        2020 - present, Computer Science
                    </p>
                    <p className="mt-4">
                        After graduated from SMK Negeri 1 Kedawung, I moved to
                        Muhammadiyah University. I study computer science as
                        a passion. I have a lot of interest in technology,
                        therefore this major is the best for me. I make a lot
                        of friends here, and I also found my working partner
                        here. Big mention to my pal, &nbsp;
                        <a href="https://github.com/MuhamadAhmadin/" className="text-red-500 hover:text-red-600">Muhamad Ahmadin</a>!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Study;