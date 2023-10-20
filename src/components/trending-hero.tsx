import { MdPlayCircleOutline } from 'react-icons/md';
import {Film} from '../interfaces';
import {Image} from './images';

interface Props{
    film: Film;
}


export const TrendingHero = (props: Props) => {
  return (
    <div className="h-[300px] relative flex justify-center">
        <div className="absolute left-0 top-0 right-0 bottom-0">
            <Image src=""></Image>
        </div>
        {/* text */}
        <div className="flex flex-col items-start">
            <p className='text-xl max-w-[50%] truncate'>{props.film.title}</p>
            <p className='text-sm line-clamp-3'>{props.film.description}</p>
            <button className='px-3 py-1.5 flex items-center gap-3'>
                <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                <span>Play trailers</span>
            </button>
        </div>
    </div>
  )
}
