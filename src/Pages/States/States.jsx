import React, { useContext } from 'react';

import { FriendsContext } from '../../Components/CustomsContext/FriendsContextData';
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';


const States = () => {
    const { timeline } = useContext(FriendsContext);

    const data = [
        {
            name: 'Call',
            value: timeline.filter(i => i.type === "call").length,
            fill: '#0088FE'
        },
        {
            name: 'Text',
            value: timeline.filter(i => i.type === "text").length,
            fill: '#00C49F'
        },
        {
            name: 'Video',
            value: timeline.filter(i => i.type === "video").length,
            fill: '#FFBB28'
        }
    ];
    console.log("chart data: ", "call data: " , data);

    return (
        <section className='max-w-9/12 mx-auto my-20 mb-20 space-y-4'>
            <h2 className='text-4xl font-bold'>Friendship Analytics</h2>
            <div className="w-full h-[500px] bg-base-100 shadow-sm ">
                <p className='pl-4 pt-4 text-green-950'>By Interaction Type</p>
                <ResponsiveContainer width="90%" height="90%">
                    <PieChart className='p-20 '>
                        <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="100%"
                            paddingAngle={5}
                            dataKey="value"
                        />
                        <Legend></Legend>
                    </PieChart>
                </ResponsiveContainer>
               
            </div>
        </section>
    );
};

export default States;