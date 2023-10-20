import React, { useEffect, useState } from 'react'
import { Film } from '../interfaces';
import Slider from 'react-slick';
import { Section } from '../components/section';
import { TrendingHero } from '../components/trending-hero';

export const Home = () => {
    const [trendings, setTrendings] = useState<Film[]>([])


    const fetchTrendings = () =>{
        const arrs: Film[] = [];

        for (let i = 0; i < 6; i++) {
            arrs.push({
                id: i,
                title: "Lorem ipsum dolor sit amet consectetur",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt libero tempore accusantium beatae.",
                coverPath: "",
                genreIds: [1,2,3,4,5,6],
                posterPath: "",
                seasons: [],
            })
        }
        setTrendings(arrs)
    }
    useEffect(() =>{
        fetchTrendings()
    },[])

  return (
    <>
        {/* trendings */}
        <Section className='py-0'>
            <Slider autoplay={true} slidesToShow={1} slidesToScroll={1}>
                {trendings.map((film,i) =>(
                    <TrendingHero film={film} key={i}></TrendingHero>
                ))}
            </Slider>
        </Section>
        {/* in theaters */}
        {/* populars */}
        {/* top rated tv */}
        {/* top rated movies */}
    </>
  )
}
