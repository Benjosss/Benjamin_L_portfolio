import React from 'react'


const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Benjamin
                    </a>

                    <nav className="sm:flex hidden">
                        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
                            <li className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                                <a className="text-lg md:text-base hover:text-white transition-colors" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                                <a className="text-lg md:text-base hover:text-white transition-colors" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                                <a className="text-lg md:text-base hover:text-white transition-colors" href="#work">
                                    Work
                                </a>
                            </li>
                            <li className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                                <a className="text-lg md:text-base hover:text-white transition-colors" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>



        </header>
    )
}
export default Navbar
