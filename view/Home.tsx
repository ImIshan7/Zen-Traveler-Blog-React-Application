import {Component} from "react";
import './custom.css';
import about from '../images/location/SIGIRIYA.jpg';
import polon from '../images/location/Polonnaruwa .jpg';
import Anu from '../images/location/Anuradhapura.jpg';
import Kandy from '../images/location/Kandy.jpg';
import Galle from '../images/location/Galle.jpg';
import Dambulla from '../images/location/dambulla.jpeg';
import Sri from '../images/location/sripadaya.jpg';
import Yala from '../images/location/yala.jpg';
import Hot from '../images/location/hotainplace.jpg';
import unawatuna from '../images/beach/unawatuna.jpg';
import mirissa from '../images/beach/mirissa.jpg';
import benthota from '../images/beach/benthota.jpg';
import arugambay from '../images/beach/ArugamBay.jpg';
import trinco from '../images/beach/trinco.jpg';
import hikkaduwa from '../images/beach/hikkaduwa.jpg';
import pasikudah from '../images/beach/Pasikudah.jpg';
import tangalle from '../images/beach/tangalle.jpg';
import negambo from '../images/beach/negambo.jpg';
import ambuluwawa from '../images/location/ambuluwawala.jpg';
import diyaluma from '../images/location/diyaluma.jpg';
import meemure from '../images/location/meemure.jpg';
import ella from '../images/location/ella.jpg';
import forest from '../images/location/waterfall1.jpg';
import hotain from '../images/location/hotain.png';
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
                                    <div className="relative w-full aspect-video ">
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


                    <div className="max-w-screen bg-gray-800">

                        <div className="flex justify-center text-4xl md:text-4xl font-bold text-white pt-3">
                           Best Beach Side In Sri Lanka
                        </div>

                        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/writey-ai">
                                    <img className="rounded relative w-full object-cover aspect-video" src={unawatuna}/>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/writey-ai"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-400 two-lines text-ellipsis">
                                        <span>Unawatuna Beach</span>

                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Located near Galle, Unawatuna is a picturesque crescent-shaped beach known
                                        for its clear waters and coral reefs. It's a popular spot for swimming and snorkeling.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/writemeai">
                                    <img className="rounded relative w-full object-cover aspect-video" src={mirissa}/>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/writemeai"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Mirissa Beach</span>

                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Mirissa, situated on the southern coast, is renowned for its laid-back
                                        atmosphere and beautiful sunsets. It's a great place for whale watching and
                                        has a vibrant nightlife scene.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/publer">
                                    <img className="rounded relative w-full object-cover aspect-video" src={benthota}/>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/publer"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Bentota Beach</span>


                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Bentota is a coastal town with a long stretch of golden beach. It's a popular
                                        destination for water sports such as jet-skiing, windsurfing,
                                        and boat rides along the Bentota River.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/anyword">
                                    <img className="rounded relative w-full object-cover aspect-video" src={arugambay}/>

                                </a>


                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/anyword"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Arugam Bay</span>

                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Located on the east coast, Arugam Bay is a haven for surfers. It has a relaxed
                                        atmosphere, and the waves are ideal for both beginners and experienced surfers.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/blogseo-ai">

                                    <img className="rounded relative w-full object-cover aspect-video" src={trinco}/>
                                </a>


                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/blogseo-ai"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Trincomalee Beach</span>

                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Trincomalee, on the northeast coast, boasts pristine beaches like Uppuveli and Nilaveli.
                                        These areas are known for their white sandy beaches and crystal-clear waters.
                                    </p>


                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/typewise">

                                    <img className="rounded relative w-full object-cover aspect-video" src={hikkaduwa}/>
                                </a>

                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/typewise"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Hikkaduwa Beach</span>


                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Hikkaduwa, on the southwest coast, is famous for its coral sanctuary and vibrant marine life.
                                        It's a popular spot for snorkeling and diving.
                                    </p>

                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/typewise">

                                    <img className="rounded relative w-full object-cover aspect-video" src={pasikudah}/>
                                </a>

                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/typewise"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Pasikudah Beach</span>


                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Pasikudah, on the east coast, is renowned for its shallow waters and is considered one of the
                                        safest beaches in the world. It's perfect for swimming and relaxing.
                                    </p>

                                </div>

                            </li>
                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/typewise">
                                    <img className="rounded relative w-full object-cover aspect-video" src={tangalle}/>
                                </a>

                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/typewise"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Tangalle Beach</span>


                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Tangalle offers a series of beautiful beaches with golden sands and coconut palm-fringed shores.
                                        Medaketiya and Goyambokka are particularly scenic.
                                    </p>

                                </div>

                            </li>

                            <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400">

                                <a className="relative" href="/tool/typewise">
                                    <img className="rounded relative w-full object-cover aspect-video " src={negambo}/>


                                </a>

                                <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                                    <a href="/tool/typewise"
                                       className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis">
                                        <span>Negombo Beach</span>


                                    </a>

                                    <p className="flex flex-col justify-beetween gap-3 pt-4 px-7 py-24 text-black font-semibold">
                                        Close to the Bandaranaike International Airport, Negombo Beach is a convenient
                                        spot for those arriving or departing. It has a lively atmosphere with seafood markets
                                        and vibrant nightlife.
                                    </p>

                                </div>

                            </li>

                        </ul>

                    </div>

                    <div className="bg-white dark:bg-gray-800 max-w-screen">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                                <div className="flex items-center gap-12">
                                    <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl dark:text-white">Famous Location</h2>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={ambuluwawa}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ambuluwawa Tower </span>
                                </a>



                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={diyaluma}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Diyaluma Falls</span>
                                </a>



                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={meemure}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Meemure Village</span>
                                </a>



                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={ella}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Ella Rock</span>
                                </a>

                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={forest}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Sinharaja Forest Reserve</span>
                                </a>
                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" src={hotain}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Horton Plains</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center bg-white dark:bg-gray-800 max-w-screen pt-20">
                        <div className="rounded-lg shadow-lg bg-white max-w-screen">

                            <a href="https://www.youtube.com/watch?v=lFK5CVPHx6Y&ab_channel=BeforeYouGo" target="_blank" rel="noopener noreferrer">
                                <div className="video-container">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/lFK5CVPHx6Y"
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </a>



                            <div className="p-6 bg-gray-800">
                                <h5 className="text-yellow-400 text-3xl font-extrabold mb-2">#Visit Sri Lanka</h5>
                                <p className="text-white text-xl font-medium mb-4">
                                    Embark on an enchanting journey to Sri Lanka, where captivating landscapes, rich
                                    cultural heritage, and warm hospitality await. From the golden beaches along the
                                    pristine coastline to the lush tea plantations nestled in the central highlands,
                                    Sri Lanka offers a diverse tapestry of experiences. Explore ancient temples and
                                    historical sites that narrate tales of a glorious past, witness wildlife in their
                                    natural habitat, and savor the exotic flavors of local cuisine. Immerse yourself
                                    in the vibrant markets, vibrant festivals, and the welcoming smiles of the locals.
                                    A visit to Sri Lanka is a harmonious blend of serenity, adventure,
                                    and cultural discovery.
                                </p>
                            </div>
                        </div>
                    </div>

                </main>

            </div>


        );
    }
}