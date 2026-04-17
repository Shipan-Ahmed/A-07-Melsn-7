import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../Components/CustomsContext/FriendsContextData';
import { IoCall } from 'react-icons/io5';
import { IoMdText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';

const TimeLine = () => {
    const { timeline, loading } = useContext(FriendsContext);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    const [filter, setFilter] = useState("all");
    const filterTimeline = filter === "all" ? timeline : timeline.filter(filterData => filterData.type === filter);

    return (
        <section className='max-w-9/12 mx-auto my-20  space-y-4' >
            <h2 className="font-bold text-4xl">Timeline</h2>
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
        </section>
    );
};

export default TimeLine;