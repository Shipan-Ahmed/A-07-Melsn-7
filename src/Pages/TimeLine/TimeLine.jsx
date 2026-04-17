import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../Components/CustomsContext/FriendsContextData';
import { IoCall } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';
import { ImFilesEmpty } from 'react-icons/im';

const TimeLine = () => {
    const { timeline, loading } = useContext(FriendsContext);
    const ok = timeline.length > 0;

    // if (loading) {
    //     return <p className="text-center">Loading...</p>;
    // }

    const [filter, setFilter] = useState("all");
    const filterTimeline = filter === "all" ? timeline : timeline.filter(filterData => filterData.type === filter);
    
    if (loading || !filterTimeline) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <section className='max-w-9/12 mx-auto my-20  space-y-4' >
            <h2 className="font-bold text-4xl">Timeline</h2>
            {
                (ok) && <div>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="select select-bordered mb-4 bg-base-100 shadow-sm"
                        aria-placeholder='Filter timeline '
                    >
                        <option value="" disabled>
                            Select Type
                        </option>
                        <option value="all" className='font-bold'>All</option>
                        <option value="call" className='font-bold'>Call</option>
                        <option value="text" className='font-bold'>Text</option>
                        <option value="video" className='font-bold'>Video</option>
                    </select>

                    {/* <select defaultValue={filter} onChange={(e) => setFilter(e.target.value)} className="select select-accent">
                <option disabled={true}>Filter Timeline</option>
                <option value="" disabled>Select Type</option>
                <option value="all">All</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
            </select> */}

                    <div className="mt-6 space-y-4">

                        {filterTimeline.map((item, index) => (
                            <div key={index} className="p-2  bg-base-100 shadow-sm flex gap-4 items-center">
                                <span className='font-bold'>{item.type === "call" ? <IoCall /> : item.type === "text" ? <IoMdText /> : <FaVideo />}</span>
                                <div>
                                    <p> <span className='font-bold'>{item.type === "call" ? "Meetup" : item.type === "text" ? "Text " : "Video "}</span> with  {item.name}</p>
                                    <p className="text-sm text-gray-500">{item.time}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            }

            {
                 (!ok) && <div className='w-full p-20 bg-base-100 shadow-sm space-y-2 text-center'>
                                    <p className='text-4xl text-gray-400 flex justify-center items-center'><ImFilesEmpty /></p>
                                    <p className='text-xl text-gray-400'>Please, communicate with your few friends.</p>
                                </div>
            }
        </section>
    );
};

export default TimeLine;