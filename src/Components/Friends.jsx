import React, { useContext } from 'react';
import Friend from './Friend';
import { FriendsContext } from './CustomsContext/FriendsContextData';

// const FriendsPromise = fetch("/friends.json").then(res => res.json());

const Friends = () => {
    const {friendsData , loading} = useContext(FriendsContext);
    // console.log(FriendsData);
    
    return (
        <section className='space-y-4 '>
            <h1 className='text-2xl font-bold'>Your Friends</h1>
            {loading ? (
                <div className="flex justify-center items-center h-[100px]">
                    <span className="loading loading-bars loading-xl"></span>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {friendsData.map((friend, id) => (
                        <Friend key={id} friend={friend} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Friends;