import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {skills} from "../constants/SkillsConst.js"

const Skills = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };


    return (
        <section className="c-space my-20">
            <h2 id="skills" className="text-neutral-400 text-3xl font-bold mb-10 ml-3">My Skills</h2>
            <Slider {...settings} className="w-full h-full font text-amber-50 " >
                {skills.map(({id, name, elements, image}) => (
                    <div className="c-space grid-container gap-5">
                        <div key={name}>
                            <p className="grid-headtext">{name}</p>
                            <div className="grid-subtext flex flex-col md:flex-row items-center gap-6">
                                <ul className='md:w-1/2 sm:pl-5 pl-0'>
                                    {elements.map((element, idx) => (
                                        <li key={`${idx}-${element}`} className="sm:list-disc list-none">
                                            {element}
                                            {/*{idx < elements.length - 1 && " - "}*/}
                                        </li>
                                    ))}
                                </ul>
                                <img key={`${id}-${name}`} src={image} alt={name} className="md:w-1/2 w-full sm:h-[276px] h-fit object-contain" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
export default Skills
