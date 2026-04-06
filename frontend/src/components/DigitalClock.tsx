import React, { useEffect, useState } from 'react';

const DigitalClock = ({ timezone }) => {
    const [time, setTime] = useState(new Date().toLocaleString('en-US', { timeZone: timezone }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleString('en-US', { timeZone: timezone }));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timezone]);

    return (
        <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <h2 className="text-lg font-bold">Current Time ({timezone})</h2>
            <p className="text-2xl font-mono dark:text-white">{time}</p>
        </div>
    );
};

export default DigitalClock;
