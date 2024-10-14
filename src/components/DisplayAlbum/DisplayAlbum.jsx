import { useContext } from 'react';
import { albumsData, assets, songsData } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../../context/PlayerContext';
import DisplayNav from '../DisplayNav/DisplayNav';

const DisplayAlbum = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);
  const albumData = albumsData[id];

  return (
    <>
      <DisplayNav />

      {/* Album Cover Section */}
      <div className="m-7 w-full max-w-[800px] h-[450px] mx-auto sm:ml-[189px] relative top-[140px] custom-xsm:bottom-[40px] custom-md:w-[30em] custom-md:h-[25em] custom-mdx:w-[50em] ">
        <div
          className=" h-[29px] left-[-160px]  custom-md:h-[250px]
          bg-green-600 rounded-[40px]  custom-smx:left-[0] custom-smx:h-[200px] 
          custom-smx:h-[10em] custom-smx:mt-[-25px] relative bg-cover 
          bg-center custom-xsm:left-[-170px] custom-sm:top-[10px] custom-mdx:h-[20em]"
          style={{
            backgroundImage: `url(${assets.jacksonBackground})`
          }}
        >
        <div className="absolute top-[100px] left-[80px] text-white 
        custom-smx:top-[50px] custom-smx:left-[20px]  custom-xsm:top-[70px]">

    <h2 className="text-2xl font-bold">Michael Jackson</h2>
    <p className="text-lg">27.852.501 monthliy listeners</p>
  </div>
          <img
            src={assets.michel}
            alt="Michel"
            className="absolute top-[-150px] left-[50%] transform translate-x-[-20%] w-[90%] sm:w-[635px] 
            sm:left-[286px] custom-smx:top-[-120px] custom-smx:h-[20em] custom-smx:left-[100px] custom-md:top-[-100px] custom-md:left-[38%]
            custom-xsm:top-[-120px] custom-xsm:left-[160px] custom-xsm:w-[30em]  custom-sm:w-[23em] custom-xsm:p-0 "
          />
        </div>
      </div>

      {/* Song List */}
      <div className="mt-4 mx-5 custom-smx:mt-[-6em]">
        {songsData.map((item, index) => (
          
          <div
            onClick={() => playWithId(item.id)}
            className="grid grid-cols-3 sm:grid-cols-4 p-2 text-[#a7a7a7] hover:bg-line-red cursor-pointer items-center custom-smx:flex gap-6"
            key={index}
          >
            {/* Song Information */}
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
              <img className="inline w-[54px] mr-5 " src={item.image} alt={item.name} />
           
            </p>

            {/* Album Name */}
            <p className="text-[15px]">{albumData.name}</p>

            {/* Date Hidden on Small Screens */}
            <p className="text-[15px] hidden sm:block">5 days ago</p>

            {/* Song Duration */}
            <p className="text-[15px] text-center">{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
