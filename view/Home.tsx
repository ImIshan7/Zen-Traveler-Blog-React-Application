import {Component} from "react";
import './custom.css';
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
                                <div className="flex mt-8">
                                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                        Get started
                                    </a>
                                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                        Read more
                                    </a>
                                </div>
                            </div>
                            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
{/*
                                <img src="" className="max-w-xs md:max-w-sm m-auto"/>
*/}
                            </div>
                        </div>
                    </div>
                </main>




            </div>


        );
    }
}