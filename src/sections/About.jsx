import Globe from "react-globe.gl";
import {useEffect, useRef} from "react";

const About = () => {
    const globeRef = useRef();

    useEffect(() => {
        if(!globeRef.current) return;

        const controls = globeRef.current.controls();

        controls.minDistance = 300;
        controls.maxDistance = 400;

        globeRef.current.pointOfView(
            {
                lat: 49.122595,
                lng: 6.171511,
                altitude: 2
            },
            0
        );
    }, []);

    return (
        <section className="c-space my-20">
            <h2 id="about" className="text-neutral-400 text-3xl font-bold mb-10 ml-3">About me</h2>
            <div className="grid h-full xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">I'm Benjamin,</p>
                            <p className="grid-subtext">I'm currently in
                                <span className="font-semibold"> third year of bachelor degree </span>
                                at the <span className="font-semibold">UFR
                                MIM</span>, France</p>
                        </div>
                        <img src="icons/grid_1.png" alt="grid_1"  className="w-full sm:h-[276px] h-fit object-contain" />
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">Tech skills</p>
                            <p className="grid-subtext">
                                During my three years of undergraduate study,
                                I honed my skills in several areas of computer science,
                                learned several <span className="font-semibold">programming languages</span>,
                                and implemented several important <span className="font-semibold">algorithms</span> and
                                <span className="font-semibold"> programming paradigms</span>.
                            </p>
                            <img src="icons/grid_2.png" alt="grid_1"  className="w-full sm:h-[276px] h-fit object-contain" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                atmosphereColor={"#ffffff"}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I'm from France</p>
                            <p className="grid-subtext">
                                I'm currently in Metz at the University of Lorraine,
                                and I can move around, in Luxembourg for exemple!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
