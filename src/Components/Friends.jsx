import React, { useContext } from 'react';
import Friend from './Friend';
import { FriendsContext } from './CustomsContext/FriendsContextData';

// const FriendsPromise = fetch("/friends.json").then(res => res.json());

const Friends = () => {
    const {friendsData , loading} = useContext(FriendsContext);
    // console.log(FriendsData);
    if (loading) {
        return <p className="text-center">Loading...</p>;
    }
    return (
        <section className='space-y-4 '>
            <h1 className='text-2xl font-bold'>Your Friends</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    friendsData.map((friend, id) => <Friend key={id} friend={friend}></Friend>)
                }
            </div>
        </section>
    );
};

export default Friends;