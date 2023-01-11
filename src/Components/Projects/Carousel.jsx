import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Box} from '@chakra-ui/react';
import { ProjectInfo } from './ProjectInfo';
import { Link } from 'react-router-dom';

const Prev = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <>
            <Box bg={"transparent"} zIndex={"10"} position={"absolute"} top={"45%"} left={{base: "-5px", sm: "0", md: "10px", lg: "10px"}} onClick={onClick}>
                <GrPrevious fontSize={"20px"} color={"#3f4246"} />
            </Box>
        </>
    );
};

const Next = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <>
            <Box bg={"transparent"} zIndex={"10"} position={"absolute"} top={"45%"} right={{base: "-5px", sm: "0", md: "10px", lg: "10px"}} onClick={onClick}>
                <GrNext fontSize={"20px"} color={"#3f4246"} />
            </Box>
        </>
    );
};


export const Carousel = ({projects}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1048,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    return (
        <Box w={"100%"}>

            <Slider {...settings} prevArrow={<Prev />} nextArrow={<Next />} >

                {
                    projects?.map((el) => (
                        <ProjectInfo key={el.id} {...el} />
                    ))
                }

            </Slider>
        </Box>
    );
};