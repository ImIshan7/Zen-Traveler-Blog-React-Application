import {Component} from "react";
import './custom.css';
import about from '../images/SIGIRIYA.jpg';
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

                </main>

            </div>


        );
    }
}