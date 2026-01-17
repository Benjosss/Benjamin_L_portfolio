import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera, SpotLight} from "@react-three/drei";
import Computer from "../components/Computer.jsx"
import {calculateSizes} from "../constants/HeroComputerSizes.js";
import PointerCamera from "../components/PointerCamera.jsx";



const Hero = () => {
    const isSmallPhone = useMediaQuery({
        maxWidth: 440,
        maxHeight: 700,
    });

    const isLargePhone = useMediaQuery({
        maxWidth: 767,
        minHeight: 701,
    });

    const isTabletPortrait = useMediaQuery({
        minWidth: 768,
        maxWidth: 1023,
        minHeight: 900,
    });

    const isTabletLandscape = useMediaQuery({
        minWidth: 768,
        maxWidth: 1023,
        maxHeight: 899,
    });

    const isDesktop = useMediaQuery({ minWidth: 1024 });


    const sizes = calculateSizes({ isSmallPhone, isLargePhone, isTabletPortrait, isTabletLandscape, isDesktop });


    const handleRocketLaunch = (e) => {
        const rocket = e.currentTarget.querySelector(".rocket");

        if (rocket.classList.contains("rocket-launch")) return;

        rocket.classList.add("rocket-launch");

        setTimeout(() => {
            rocket.classList.remove("rocket-launch");
            rocket.style.opacity = "1";
            rocket.style.transform = "translate(0, 0) rotate(0deg)";
        }, 3000);
    };

    const ScalingFactor = window.innerWidth / 1300;

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hi, I'm Benjamin <span className="waving-hand">👋</span></p>
                <p className=" z-30 text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black leading-normal text-gray_gradient">
                    Computer Science student
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 z-10">
                <Canvas className="w-full h-full">
                    <group>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <PointerCamera isMobile={isSmallPhone || isLargePhone}>
                                <Computer

                                    position={sizes.computerPosition}
                                    rotation={sizes.computerRotation}
                                    scale={sizes.computerScale}

                                />
                            </PointerCamera>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1.5}/>
                            <directionalLight position={[30, 30, 30]} intensity={1.0} />

                        </Suspense>
                    </group>
                </Canvas>

            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#projects" className="w-fit mx-auto block">
                    <button
                        onClick={handleRocketLaunch}
                        className="flex gap-4 items-center justify-center cursor-pointer p-3 rounded-md bg-[#1C1C21] ransition-all active:scale-95 text-white mx-auto sm:w-fit w-full sm:min-w-96 font-medium">
                        <span className="h-6 w-6 relative flex rocket">
                            <img src="icons/rocket.png" alt="rocket"/>
                        </span>
                        Lets see my projects
                    </button>
                </a>
            </div>

        </section>
    )
}
export default Hero
