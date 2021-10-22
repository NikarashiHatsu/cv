import Image from "next/image";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoBri from './../../images/logo_bri.svg';
import LogoSdmAceh from './../../images/logo_sdm_aceh.webp';
import LogoPnpsi from './../../images/logo_pnpsi.webp';
import LogoPolri from './../../images/logo_polri.webp';
import Logo4R from './../../images/logo_4r.png';

function Portfolio() {
    return (
        <div className="relative mt-24">
            <div className="flex relative">
                <h1 className="text-5xl font-serif tracking-widest -left-32 relative">
                    My Portfolio
                </h1>
                <FontAwesomeIcon
                    className="absolute left-56 -top-2 text-2xl transform -rotate-12"
                    icon={faBook}
                />
            </div>

            <div className="flex items-center relative mt-12">
                <div className="relative w-52">
                    <div className="bg-blue-600 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                    <div className="flex items-center justify-center flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <Image
                            src={LogoBri}
                            width={75}
                            height={75}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        Stika
                    </h4>
                    <p className="italic text-sm">
                        SisTem Informasi KeuAngan, PT. Bank BRI Syariah - 2019
                    </p>
                    <p className="mt-4">
                        Bad abreviation, I know.
                        My first application I made and used locally to help
                        fund manager and staff in the PT. Bank BRI Syariah. The
                        system was made using Bootstrap 4, and native PHP.
                        It's a system rebuild after the former application Salak.
                        No logo was made, but here's BRI logo.
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-row-reverse relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-red-500 w-48 h-48 rounded-lg transform -rotate-1 shadow"></div>
                    <div className="flex items-center justify-center absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform rotate-3 shadow-lg">
                        <FontAwesomeIcon
                            className="w-16 h-16 transform -rotate-6 text-yellow-500"
                            icon={faBook}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        e-Library
                    </h4>
                    <p className="italic text-sm">
                        SMK Negeri 1 Kedawung, as a graduation prerequisites - 2019
                    </p>
                    <p className="mt-4">
                        My second "big" application I made, intentionally made
                        for the school's library, but somehow it's not being
                        used by the school. So I re-configure the status as a
                        graduation prerequisites. Again, sorry for no screenshots.
                        But here is the <a href="https://github.com/NikarashiHatsu/perpustakaan" className="font-semibold text-blue-500 hover:text-blue-600">repository</a>, feel free to use as I don't
                        maintain it anymore.
                    </p>
                </div>
            </div>

            <div className="flex items-center relative mt-12">
                <div className="relative w-52">
                    <div className="bg-yellow-500 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                    <div className="flex items-center justify-center flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <Image
                            src={LogoSdmAceh}
                            width={75}
                            height={75}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        Personnel Care Polda Aceh
                    </h4>
                    <p className="italic text-sm">
                        a.k.a SDM Polda Aceh, PT. Bengkelweb Indonesia - 2020
                    </p>
                    <p className="mt-4">
                        First app I made in a company I work for. It's a
                        complex human resource management consisting of
                        personnel, their study, family, position, and wage.
                        Pretty complex and my first app using TailwindCSS.
                        The application is not available for public so I'm
                        sorry for inconvenience.
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-row-reverse relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-green-500 w-48 h-48 rounded-lg transform -rotate-1 shadow"></div>
                    <div className="flex items-center justify-center absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform rotate-3 shadow-lg">
                        <Image
                            className="rounded-lg w-20 h-20"
                            src={LogoPnpsi}
                            width={75}
                            height={75}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        PNPSI
                    </h4>
                    <p className="italic text-sm">
                        Hotel Booking and Reservation, PT Bengkel Web indonesia - 2020
                    </p>
                    <p className="mt-4">
                        My second app, now it is made using Flutter mixed with
                        WebView. It's a hotel booking and reservation system,
                        pretty simple in the UI, but complex in the back end.
                        The app is used to book Padepokan Pencak Silat Indonesia,
                        Taman Mini Indonesia. The application is available on&nbsp;
                        <a href="https://play.google.com/store/apps/details?id=com.bengkelweb.pnpsi" className="font-semibold text-blue-500 hover:text-blue-600">Google Play</a>!
                    </p>
                </div>
            </div>

            <div className="flex items-center relative mt-12">
                <div className="relative w-52">
                    <div className="bg-yellow-500 w-48 h-48 rounded-lg transform rotate-1 shadow"></div>
                    <div className="flex items-center justify-center flex-grow absolute top-4 left-4 bg-white w-40 h-40 rounded-lg p-6 transform -rotate-3 shadow-lg">
                        <Image
                            src={LogoPolri}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div className="flex flex-col ml-6">
                    <h4 className="text-2xl font-serif">
                        Dumas Presisi Polri
                    </h4>
                    <p className="italic text-sm">
                        Police's Public Complaint System, PT. Bengkel Web Indonesia - 2021
                    </p>
                    <p className="mt-4">
                        Started in the very beginning of 2021, and 60% done in
                        March. It is a biggest system and the most complex system
                        I've ever made. Working in team with Pusiknas Polri
                        Bareskrim Polri, and Itwasum Polri. Along with the integration
                        to Kompolnas, Pusiknas, Divpropam, and Paques we try to make police
                        service better. The application is available on&nbsp;
                        <a href="https://dumaspresisi.polri.go.id/" className="font-semibold text-blue-500 hover:text-blue-600">Dumas Presisi</a>,
                        but the system is not available for public.
                    </p>
                </div>
            </div>

            <div className="flex items-center flex-row-reverse relative mt-16">
                <div className="relative w-52">
                    <div className="flex bg-gray-300 w-48 h-48 rounded-lg transform -rotate-1 shadow"></div>
                    <div className="absolute top-4 left-4">
                        <Image
                            className="rounded-lg w-40 h-40 absolute"
                            src={Logo4R}
                            width={160}
                            height={160}
                        />
                    </div>
                </div>
                <div className="flex flex-col mr-6">
                    <h4 className="text-2xl font-serif">
                        4 Reality Indonesia
                    </h4>
                    <p className="italic text-sm">
                        Virtual YouTuber team, personal work 2020
                    </p>
                    <p className="mt-4">
                        My best UI/UX work of the year. Every generation
                        consist of 4 people in team. All of them have
                        a unique talent. The website is available here
                        on <a href="https://4reality-reborn.vercel.app/" className="font-semibold text-blue-500 hover:text-blue-500">4reality.id</a>.
                        It is also the 1st winner of&nbsp;
                        <a href="https://github.com/wibucode02/top-5-pemenang-event-front-end-wibucode-2021" className="font-semibold text-blue-500 hover:text-blue-600">WibuCode's Front End Challenge 2021</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;