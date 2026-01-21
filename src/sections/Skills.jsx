import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {skills} from "../constants/SkillsConst.js"

const Skills = () => {
    const settings = {
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
                {skills.map(({name, elements}) => (
                    <div className="c-space grid-container gap-5">
                        <div key={name}>
                            <p className="grid-headtext">{name}</p>
                            <div className="grid-subtext">
                                {elements.map((element, idx) => (
                                    <p key={`${idx}-${element}`}>{element}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
export default Skills
