
import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FriendsContext } from './CustomsContext/FriendsContextData';
import Friend from './Friend';

const Banner = () => {
    const { friendsData, loading } = useContext(FriendsContext);
    console.log(friendsData); // undefine . why??


    const OnTracks = friendsData.filter(friend => friend.status === "on-track")
    if (loading || !OnTracks) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <section className=' my-20 border-b border-b-gray-300  pb-10 '>
            <div className='text-center my-4 space-y-4  bg-base-100 '>
                <h1 className=' text-4xl md:text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    <br /> relationships that matter most.</p>
                <div className='flex justify-center items-center pt-4'><button className='btn bg-[#244D3F] text-white flex gap-2 justify-center items-center'><FaPlus />  Add a Friends</button></div>
            </div>
            <div className='flex gap-4 justify-center items-center flex-col md:flex-row md:justify-between pt-10'>
                <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center space-y-2 rounded-xl bg-base-100 shadow-sm'>
                    <p className='text-[#244D3F] font-bold text-3xl'>{friendsData.length} </p>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                    <p className='text-[#244D3F] font-bold text-3xl'>{OnTracks.length} </p>
                    <p className='text-gray-500'>On Track</p>
                </div>
                <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center  space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                    <p className='text-[#244D3F] font-bold text-3xl'>6</p>
                    <p className='text-gray-500'>Need Attention</p>
                </div>
                <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                    <p className='text-[#244D3F] font-bold text-3xl'>12</p>
                    <p className='text-gray-500'>Interactions This Month</p>
                </div>
            </div>

           
        </section>
    );
};

export default Banner;