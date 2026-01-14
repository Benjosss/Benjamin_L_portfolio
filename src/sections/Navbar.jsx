import {useState} from 'react';
import {navBarElements} from "../constants/NavBar.js";

const NavItems = () => {
    return (
        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
            {navBarElements.map(({id, name, href}) => (
                <li key={id} className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
                    <a className="sm:text-xl text-lg md:text-base hover:text-white transition-colors" href={href}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="" className="text-neutral-400 font-bold sm:text-2xl text-xl hover:text-white transition-colors">
                        Benjamin
                    </a>

                    {/*Small devices*/}
                    <button onClick={toggleOpen} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex z-30" aria-label="Toggle navigation">
                        <img src={isOpen ? "icons/menu_opened.png" : "icons/menu_closed.png"} alt="navigation" className="h-6 w-6"/>
                    </button>

                    {/*Small to large devices*/}
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>

                    {/*Small devices*/}
                    <div className={`absolute top-0 left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <nav className="p-5">
                            <NavItems />
                        </nav>
                    </div>
                </div>
            </div>



        </header>
    )
}
export default Navbar
