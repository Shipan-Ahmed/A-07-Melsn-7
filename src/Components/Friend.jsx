import React from 'react';
import { Link } from 'react-router';

const Friend = ({ friend }) => {
    const { id, name, picture, days_since_contact, tags, status } = friend;
    // console.log(name, status, "friend information!");
    return (
        <Link to={`/${id}`} className="card bg-base-100  shadow-sm text-center p-2 ">
            <figure >
                <img
                    className='mx-auto w-20 rounded-full '
                    src={picture}
                    alt="Shoes" />
            </figure>
            <div className="card-body gap-4 ">
                <h2 className='text-xl font-bold'>{name} </h2>
                <p className='text-gray-500'>{days_since_contact} days ago </p>
                <div className='px-2'>
                    <div className='flex justify-center items-center gap-2  '>
                        {
                            tags.map((tag, index) => <p key={index} className="badge bg-green-100 ">{tag} </p>)
                        }
                    </div>
                </div>
                <div className=' px-20 md:px-5 lg:px-6 xl: px-15'>
                    <p className={` text-white badge  ${status === "overdue" ? "bg-red-500" : status === "on-track" ? "bg-green-900" : "bg-orange-500"}`}>{status} </p>
               </div>
            </div>
        </Link>
    );
};

export default Friend;