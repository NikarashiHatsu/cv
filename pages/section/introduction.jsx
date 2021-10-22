import Image from 'next/image';
import ProfilePicture from './../../images/profile_picture.jpg';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Introduction() {
    return (
        <div className="relative">
            <div className="flex flex-col items-center">
                <Image
                    src={ProfilePicture}
                    alt="Aghits Nidallah"
                    className="rounded-full shadow"
                    width={200}
                    height={200}
                />
                <div className="mt-4 max-w-sm">
                    <a
                        href="https://www.linkedin.com/in/aghits-nidallah-9b6728221/"
                        className="transition-colors ease-in-out duration-300 text-blue-600 hover:text-blue-700 text-xl"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="http://facebook.com/irlnidallah"
                        className="transition-colors ease-in-out duration-300 text-blue-600 hover:text-blue-700 text-xl ml-2"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://github.com/NikarashiHatsu"
                        className="transition-colors ease-in-out duration-300 text-gray-700 hover:text-gray-800 text-xl ml-2"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <h4 className="font-serif text-2xl mt-4">
                    Aghits Nidallah
                </h4>
                <p className="mt-2 max-w-sm text-center">
                    📷 Photographer, 🧑‍🎓 student, 💻 software engineer,
                    ✍️ lazy-writer, 🚢 Azur Lane enthusiast.
                </p>
                <p className="mt-4 max-w-lg text-center">
                    Hi, just a brief introduction about myself. I lived in
                    Cirebon, Indonesia for my whole life. I love to
                    experimenting new technologies for the sake of
                    simplicity and problem solving. I am a big fan of
                    Laravel, and some JavaScript. Let me guide you to the
                    story of my life, sort of.
                </p>
            </div>
        </div>
    );
}

export default Introduction;