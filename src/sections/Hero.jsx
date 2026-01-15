import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
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



    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center">Hi, I'm Benjamin <span className="waving-hand">👋</span></p>
                <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black leading-normal text-gray_gradient">
                    Computer Science student
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
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

                    </Suspense>
                </Canvas>

            </div>



        </section>
    )
}
export default Hero
