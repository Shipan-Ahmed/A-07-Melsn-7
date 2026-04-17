import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendsContext = createContext();

const FriendsContextData = ({ children }) => {

    const [friendsData, setFriendsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [timeline, setTimeline] = useState([]);
    

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriendsData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const timelineHandler = (friend) => {
        setTimeline(prev => {
            const updated = [...prev, friend];
            console.log("timeline info:", updated); //  correct value
            return updated;
        });
        toast.success(`${friend.type === "call"? "Meetup ": friend.type === "text" ? "Text ": "Video "} with  ${friend.name} `)
    };

    return (
        <FriendsContext.Provider
            value={{ friendsData, timeline, timelineHandler, loading }}
        >
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsContextData;