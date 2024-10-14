import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faGear, faRightFromBracket, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Musice from "../../assets/music.png";
import LoginForm from "../LoginForm/Loginform"; // Import the LoginForm component
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false); // State to manage login form visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const token = localStorage.getItem("access_token");
    const logOut = () => {
      localStorage.removeItem("access_token");
      setIsLoggedIn(false);
      navigate("/");
    };

    // Function to handle login/logout toggle
    const handleAuthClick = () => {
        if (isLoggedIn) {
            logOut(); // Call logout if logged in
        } else {
            setShowLoginForm(true); // Show login form if not logged in
        }
    };

    return (
        <>
            {/* Full Sidebar for Large Screens */}
            <div className='w-[15%] h-full flex-col text-white hidden lg:flex custom-md:w-[24%]'>
                <div className='bg-[#121212] h-full rounded flex flex-col gap-3'>
                    <div className='flex '>
                        <img src={Musice} alt='music-log' className='w-7 m-5' />
                        <span className='flex m-5 text-lg font-bold ml-[-9px]'>
                            <h3 className='text-[#FF5656]'>Dream</h3>Musice
                        </span>
                    </div>
                    <h3 className='pl-8'>Menu</h3>
                    <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                        <FontAwesomeIcon icon={faHouse} className='w-6 text-[#FF5656]' />
                        <p className='font-bold'>Home</p>
                    </div>

                    <div className="absolute top-[30em] left-2 right-0 p-4">
                        <h3 className="text-white my-4">General</h3>
                        <div className="flex items-center gap-3 text-white cursor-pointer">
                            <FontAwesomeIcon icon={faGear} className='text-red-color' />
                            <p className="font-bold">Setting</p>
                        </div>
                        <div
                            className="flex items-center gap-3 text-white cursor-pointer"
                            onClick={handleAuthClick}
                        >
                            {isLoggedIn ? (
                                <>
                                    <FontAwesomeIcon icon={faRightFromBracket} className="text-red-500" />
                                    <p className="font-bold">Logout</p>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faSignInAlt} className="text-green-500" />
                                    <p className="font-bold">Login</p>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className='lg:hidden fixed top-2 left-0 p-5 z-50'>
                <button onClick={toggleMenu} className='text-white '>
                    <FontAwesomeIcon icon={faBars} className='w-4' />
                </button>
            </div>

            {/* Slide-out Menu when Hamburger is Open */}
            {isMenuOpen && (
                <div className='fixed top-0 left-0 h-full w-[50%] bg-[#121212] z-40 text-white flex flex-col p-4'>
                    <button onClick={toggleMenu} className='self-end mb-4'>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <h3 className='pl-4 mt-3'>Menu</h3>
                    <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-4 cursor-pointer'>
                        <FontAwesomeIcon icon={faHouse} className='w-6 text-[#FF5656]' />
                        <p className='font-bold'>Home</p>
                    </div>
                    <div className="absolute top-[30em] left-2 right-0 p-4">
                        <h3 className="text-white my-4">General</h3>
                        <div className="flex items-center gap-3 text-white cursor-pointer">
                            <FontAwesomeIcon icon={faGear} className='text-red-color' />
                            <p className="font-bold">Setting</p>
                        </div>
                        <div className="flex items-center gap-3 text-white cursor-pointer" onClick={handleAuthClick}>
                            {token ? (
                                <button
                                    onClick={logOut}
                                    className="bg-[#ffd700] px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-[#7d0000] text-sm hover:animate-pulse"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <>
                                    <Link
                                        to={"/login"}
                                        className="bg-[#ffd700] px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-[#7d0000] text-sm hover:animate-bounce"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        to={"/register"}
                                        className="bg-[#ffd700] px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-[#7d0000] text-sm hover:animate-bounce"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Render Login Form */}
            {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
        </>
    );
};

export default Sidebar;
