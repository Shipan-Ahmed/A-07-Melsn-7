import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { FriendsContext } from './CustomsContext/FriendsContextData';
import { MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { IoIosNotifications, IoMdText } from 'react-icons/io';
import { FaArchive } from 'react-icons/fa';
import { IoCall, IoCallOutline } from 'react-icons/io5';
import { CiVideoOn } from 'react-icons/ci';



const FriendsDetails = () => {
    const Id = useParams();
    console.log(Id);
    const FriendsInfo = useContext(FriendsContext);
    // const [FriendsInfo] = FriendsData;
    // console.log(FriendsInfo);

    const FriendInfo = FriendsInfo.find(Friend => Friend.id === Number(Id.userId));
    console.log("Friend info: ", FriendInfo);
    const { name, picture, status, email, tags, bio, days_since_contact, goal, next_due_date } = FriendInfo;
    return (
        <section className='max-w-9/12 mx-auto bg-base-100 my-20 '>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-4 space-x-4'>
                <div className='space-y-4  p-2 text-center '>
                    <div className='space-y-4 bg-base-100 shadow-sm p-2'>
                        <img className='mx-auto rounded-full w-20' src={picture} alt="" />
                        <h2 className='text-xl font-bold'>{name} </h2>
                        <div className=' px-20 md:px-5 lg:px-6 xl: px-15'>
                            <p className={` text-white badge  ${status === "overdue" ? "bg-red-500" : status === "on-track" ? "bg-green-900" : "bg-orange-500"}`}>{status} </p>
                        </div>
                        <div className='px-2'>
                            <div className='flex justify-center items-center gap-2  '>
                                {
                                    tags.map((tag, index) => <p key={index} className="badge bg-green-100 ">{tag} </p>)
                                }
                            </div>
                        </div>
                        <p className='text-gray-500'> {`" ${bio}"`} </p>
                        <p className='text-gray-500'> Preferred:  {email} </p>
                    </div>
                    <div className='space-y-4'>
                        <button className='btn w-full flex justify-center items-center gap-2'> <span><IoIosNotifications /></span><span> Snooze 2 weeks</span></button>
                        <button className='btn w-full flex justify-center items-center gap-2'> <span><FaArchive /></span><span>Archive</span></button>
                        <button className='btn w-full flex justify-center items-center gap-2'><span ><MdDelete className='text-red-400' /></span><span className='text-red-400'>Delete</span></button>
                    </div>
                </div>
                <div className='space-y-4 '>
                    <div className='flex gap-4 text-center justify-center items-center flex-col md:flex-row md:justify-between pt-10'>
                        <div className='h-[150px] w-[250px]   flex flex-col justify-center items-center space-y-2 rounded-xl bg-base-100 shadow-sm'>
                            <p className='text-[#244D3F] font-bold text-2xl md:text-xl'>{days_since_contact} </p>
                            <p className='text-gray-500 md:text-sm'>Days Since Contact</p>
                        </div>
                        <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                            <p className='text-[#244D3F] font-bold text-2xl md:text-xl'>{goal} </p>
                            <p className='text-gray-500 md:text-sm'>Goal (Days)</p>
                        </div>
                        <div className='h-[150px] w-[250px]  flex flex-col justify-center items-center   space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                            <p className='text-[#244D3F] font-bold text-2xl md:text-sm lg:text-xl'>{next_due_date} </p>
                            <p className='text-gray-500 md:text-sm'>Next Due</p>
                        </div>
                       
                    </div>
                    <div className=' p-2  space-y-2 rounded-xl  bg-base-100 shadow-sm'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#244D3F] font-bold'>Relationship Goal </p>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-gray-500'> Connect every <span className='text-[#244D3F] font-bold'>{goal} days</span>  </p>
                    </div>
                    <div className='space-y-2 rounded-xl  bg-base-100 shadow-sm p-2'>
                        <p className='text-[#244D3F] font-bold '>Quick Check-In </p>
                        <div className='flex justify-between items-center gap-2'>
                            <button className='btn flex flex-col md:p-4 lg:p-10'><span><IoCallOutline className='text-[#244D3F]' /></span><span>Call</span></button >
                            <button className='btn flex flex-col md:p-4 lg:p-10'><span><MdOutlineTextsms className='text-[#244D3F]' /></span><span>Text</span></button>
                            <button className='btn flex flex-col md:p-4 lg:p-10'><span><CiVideoOn className='text-[#244D3F]' /></span><span>Video</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FriendsDetails;