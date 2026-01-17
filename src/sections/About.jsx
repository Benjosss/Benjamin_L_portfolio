const About = () => {
    return (
        <section id="about" className="c-space my-20">
            <div className="grid h-full xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div>
                            <p className="grid-headtext">I'm Benjamin,</p>
                            <p className="grid-subtext">I'm currently in third year of bachelor degree at the UFR MIM, France</p>
                        </div>
                        <img src="assets/grid_1.png" alt="grid_1"  className="w-full sm:h-[276px] h-fit object-contain" />
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
