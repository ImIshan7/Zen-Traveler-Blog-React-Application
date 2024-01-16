import {Component} from "react";
import './custom.css';
import about from '../images/SIGIRIYA.jpg';
import polon from '../images/Polonnaruwa .jpg';
import Anu from '../images/Anuradhapura.jpg';
import Kandy from '../images/Kandy.jpg';
import Galle from '../images/Galle.jpg';
import Dambulla from '../images/dambulla.jpeg';
import Sri from '../images/sripadaya.jpg';
import Yala from '../images/yala.jpg';
import Hot from '../images/hotainplace.jpg';
export class Home extends Component {
    render() {
        return (
            <div>
                <main className="dark:bg-gray-800 bg-white h-screen">
                    <header className="h-20 sm:h-32 flex items-center z-30 ">
                        <div className="container mx-auto px-6 flex items-center justify-between">
                            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                                Zen Traveller
                            </div>
                            <div className="flex items-center">
                                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                    <a href="#" className="py-2 px-6 flex">
                                        Home
                                    </a>
                                    <a href="#" className="py-2 px-6 flex">
                                        About
                                    </a>
                                    <a href="#" className="py-2 px-6 flex">
                                        Destination
                                    </a>
                                    <a href="#" className="py-2 px-6 flex">
                                        Contact
                                    </a>

                                </nav>
                                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                                </button>
                            </div>
                        </div>
                    </header>
                    <div id="Background" className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" >
                        <div className="container mx-auto px-6 flex relative py-16">
                            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                    VISIT
                                    <span className="text-5xl sm:text-7xl">
                        Sri Lanka
                    </span>
                                </h1>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-white font-bold">
                                    I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
                                </p>

                            </div>
                            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">

                            </div>
                        </div>
                    </div>

                    <div className="sm:flex items-center max-w-screen bg-gray-800">
                        <div className="sm:w-1/2 p-10">
                            <div className="image object-center text-center">
                                <img className="rounded-md" src={about}/>
                            </div>
                        </div>
                        <div className="sm:w-1/2  pb-48">
                            <div className=" text">
                                <span className="text-white text-5xl font-bold">About us</span>
                                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Zen Traveller</span>
                                </h2>
                                <p className="text-white font-medium text-lg">
                                    Welcome to Zen Traveler, your sanctuary for exploration and enlightenment in the heart of Sri Lanka.
                                    At Zen Traveler, we embark on a journey to unveil the unparalleled beauty and
                                    cultural richness of this island paradise. Our mission is to guide you through
                                    an immersive experience, connecting you with the essence of
                                    Sri Lanka's most captivating destinations.
                                </p>

                                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Our <span className="text-indigo-600">Vision</span>
                                    </h2>
                                    <p className="text-white font-medium text-lg">
                                        In a world where every journey is a story waiting to be told, Zen Traveler is your
                                        storyteller, weaving tales of serenity and adventure. We believe in the
                                        transformative power of travel, where every step unveils a new chapter
                                        of self-discovery and connection.
                                    </p>
                            </div>
                        </div>
                    </div>


                    <div className=" max-w-screen  px-2 bg-gray-800">

                        <div className="flex justify-center text-5xl md:text-4xl font-bold mb-4 text-white">
                            Destinations
                        </div>

                        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/writey-ai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={about}/>

                                            <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Sigiriya Rock</h2>
                                                <p className="font-medium text-sm">Sri lanka</p>
                                            </div>
                                    </div>
                                </a>

                                <div className="flex flex-col justify-beetween pt-4 px-7 py-24">

                                    <p className="text-black two-lines font-bold text-xl">
                                        Also known as the Lion Rock, Sigiriya is an ancient rock fortress with a palace on its summit.
                                        It's a UNESCO World Heritage Site and one of the most iconic landmarks in Sri Lanka.
                                    </p>

                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                                <a className="relative" href="/tool/writemeai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={polon}/>

                                            <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Polonnaruwa</h2>
                                                <p className="font-medium text-sm">Polonnaruwa,Sri Lanka</p>
                                            </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">

                                    <p className="text-black two-lines font-bold text-xl">
                                        Another UNESCO World Heritage Site, Polonnaruwa is an ancient city with well-preserved ruins,
                                        including impressive stone sculptures and the Quadrangle with its ancient
                                        temples and royal palace.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                                <a className="relative" href="/tool/publer">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Anu}/>

                                            <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Anuradhapura</h2>
                                                <p className="font-medium text-sm">Anuradhapura, Sri Lanka</p>
                                            </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">

                                    <p className="text-black two-lines font-bold text-xl">
                                        One of the oldest continuously inhabited cities in the world,
                                        Anuradhapura was the capital of ancient Sri Lanka.
                                        It boasts ancient stupas, monasteries, and reservoirs,
                                        making it a sacred pilgrimage site.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                                <a className="relative" href="/tool/anyword">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Kandy}/>

                                            <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Temple of the Tooth</h2>
                                                <p className="font-medium text-sm">Kandy, Sri Lanka</p>
                                            </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        Kandy is known for the Temple of the Tooth Relic (Sri Dalada Maligawa),
                                        which houses the sacred tooth relic of the Buddha.
                                        The city is a cultural hub and a UNESCO World Heritage Site.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/blogseo-ai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Galle}/>
                                        <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Galle Fort</h2>
                                                <p className="font-medium text-sm">Galle,Sri Lanka</p>
                                            </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        A well-preserved colonial-era fort, Galle Fort is a UNESCO World Heritage Site
                                        located in the coastal city of Galle. It features charming cobblestone streets,
                                        Dutch-colonial architecture, and a historic lighthouse.
                                    </p>


                                </div>
                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/typewise">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Dambulla}/>

                                            <div
                                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                                <h2 className="text-xl font-semibold">Dambulla Cave Temple</h2>
                                                <p className="font-medium text-sm">Dambulla, Sri Lanka</p>
                                            </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        Also known as the Golden Temple of Dambulla, this cave complex is a UNESCO World
                                        Heritage Site and houses a vast collection of Buddha statues and murals.
                                    </p>

                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/blogseo-ai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Sri}/>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                            <h2 className="text-xl font-semibold">Adam's Peak (Sri Pada)</h2>
                                            <p className="font-medium text-sm">Ratnapura ,Sri Lanka</p>
                                        </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        A sacred mountain, Adam's Peak is known for the "Sri Pada" or "Sacred Footprint,"
                                        believed by different religious groups to be the footprint of Buddha, Shiva, or Adam,
                                        depending on the faith.
                                    </p>


                                </div>
                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/blogseo-ai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Yala}/>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                            <h2 className="text-xl font-semibold">Yala National Park</h2>
                                            <p className="font-medium text-sm">Hambantota,Sri Lanka</p>
                                        </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        While not a historic site, Yala National Park is famous for its rich biodiversity
                                        and is one of the best places in Sri Lanka for wildlife enthusiasts.
                                        It's home to a variety of animals, including leopards, elephants,
                                        and numerous bird species.
                                    </p>


                                </div>
                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                                <a className="relative" href="/tool/blogseo-ai">
                                    <div className="relative w-full aspect-video">
                                        <img className="rounded w-full h-full object-cover" src={Hot}/>
                                        <div
                                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                            <h2 className="text-xl font-semibold">Horton Plains National Park</h2>
                                            <p className="font-medium text-sm">Nuwara Eliya,Sri Lanka</p>
                                        </div>
                                    </div>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24">
                                    <p className="text-black two-lines font-bold text-xl">
                                        Home to the famous World's End, a sheer cliff with a breathtaking drop,
                                        Horton Plains is a picturesque destination with a diverse
                                        ecosystem and stunning landscapes.
                                    </p>


                                </div>
                            </li>

                        </ul>

                    </div>




                </main>

            </div>


        );
    }
}