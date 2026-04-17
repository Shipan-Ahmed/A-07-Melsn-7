import React, { useContext, useState } from 'react';

import { FriendsContext } from '../../Components/CustomsContext/FriendsContextData';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { ImFilesEmpty } from 'react-icons/im';


const States = () => {
    const { timeline, loading } = useContext(FriendsContext);
    const ok = timeline.length > 0;
    // console.log("okkk: ", ok);


    if (loading ) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

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
            {
                (ok ) && <div className="w-full h-[500px] bg-base-100 shadow-sm ">
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
                            <Legend verticalAlign="bottom" align="center"></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>
                    </ResponsiveContainer>

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

export default States;