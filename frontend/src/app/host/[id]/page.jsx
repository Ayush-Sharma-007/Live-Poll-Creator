'use client';
import app_config from '@/config';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import ReactWordcloud from 'react-wordcloud';
import { io } from 'socket.io-client';

const words = [
    {
        text: 'told',
        value: 64,
    },
    {
        text: 'mistake',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
    {
        text: 'correct',
        value: 10,
    },
    {
        text: 'day',
        value: 54,
    },
    {
        text: 'prescription',
        value: 12,
    },


]

const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [40, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 300
};

const host = () => {

    const [socket, setSocket] = useState(io(app_config.api_url, { autoConnect: false }));
    const { id } = useParams();
    const [roomData, setRoomData] = useState(null);

    const inputRef = useRef(null);

    const getRoomData = async () => {
        const res = await axios.get(app_config.api_url + '/room/getbyid/' + id);
        console.log(res.data);

        setRoomData(res.data);
    }

    useEffect(() => {
        socket.connect();
        getRoomData();
    }, [])

    const setRoomQuestion = () => {
        socket.emit('set-question', { room: room.title, question: inputRef.current.value });
    }


    return (
        <div className='max-w-5xl mx-auto mt-6'>
            <div className='border shadow rounded-3xl'>
                <div className='p-4 border-b-2'>
                    <input
                        ref={inputRef}
                        placeholder='Type Your Answer'
                        type="text"
                        className='w-full p-3 bg-gray-300 rounded-xl outline-none' />

                        <button onClick={setRoomQuestion}>Submit</button>
                </div>
                <div className='p-6'>
                    <ReactWordcloud options={options} words={words} />
                </div>
            </div>

        </div>
    )
}

export default host;