import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };


    return (
        <section className="c-space my-20">
            <h2 id="skills" className="text-neutral-400 text-3xl font-bold mb-10 ml-3">Skills</h2>
            <Slider {...settings} className="w-full h-full font text-amber-50 " >
                <div className="c-space grid-container gap-5">
                    <div>
                        <p className="grid-headtext">Tech skills</p>
                        <p className="grid-subtext">
                            During my three years of undergraduate study,
                            I honed my skills in several areas of computer science,
                            learned several <span className="font-semibold">programming languages</span>,
                            and implemented several important <span className="font-semibold">algorithms</span> and
                            <span className="font-semibold"> programming paradigms</span>.
                        </p>
                    </div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain mt-5"/>
                </div>
                <div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                </div>
                <div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                </div>
                <div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                </div>
                <div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                </div>
                <div>
                    <img src="icons/grid_1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                </div>
            </Slider>
        </section>
    )
}
export default Skills
