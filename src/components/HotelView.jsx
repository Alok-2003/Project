import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import ImageGrid from './ImageGrid';
import { MdConnectingAirports } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { FaHospital, FaTrain, FaWifi } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdLocalBar } from "react-icons/md";

const slides = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/b9/exterior.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/fb/the-grand-ballroom.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f7/lava-bar.jpg?w=1200&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d7/f0/amenities.jpg?w=1200&h=-1&s=1"
];

const HotelView = () => {
    const [isSmallDisplay, setIsSmallDisplay] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDisplay(window.innerWidth < 768);
        };

        handleResize(); // Call it initially to set isSmallDisplay correctly

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const locations = [
        { icon: <FaHospital />, name: 'Fortis Escorts Heart Institute', distance: '3 min drive' },
        { icon: <FaTrain />, name: 'New Delhi Hazrat Nizamuddin Station', distance: '10 min drive' },
        { icon: <FaTrain />, name: 'Delhi Aero City Station', distance: '18 min drive' },
        { icon: <FaTrain />, name: 'IGI Airport Station', distance: '21 min drive' }
    ];

    return (
        <div>
            <main className="  flex justify-center bg-[url('src/assets/building-night.jpg')] bg-cover ">
                <div className="md:w-10/12 backdrop-blur-sm bg-white/50 rounded-3xl my-16">
                    {/* Image */}
                    <div className="rounded-full container mx-auto   ">
                        {isSmallDisplay ? (
                            <Carousel className="" >
                                {slides.map((s) => (
                                    <img key={s} src={s} alt="" />
                                ))}
                            </Carousel>
                        ) : (
                            <ImageGrid className="md:h-48" />
                        )}
                    </div>

                    {/* Description */}
                    <div className="max-w-xl mx-auto bg-white p-4 rounded-3xl shadow-lg md:max-w-full md:m-2 md:flex md:justify-between">
                        <div className='md:'>
                            <h2 className="text-xl font-bold md:text-4xl">Taj Chandigarh</h2>
                            <p className="text-gray-700 mb-4 md:text-xl font-semibold">Luxury hotel with restaurant, connected to a shopping center</p>

                            <div className="flex items-center mb-3">
                                <span className="bg-green-500 text-white p-1 rounded mr-2">9.0</span>
                                <span className='font-bold' >Wonderful</span>
                            </div>

                            <a href="#" className="text-blue-500  mb-4 inline-block ">See all 101 reviews &gt;</a>

                            <div className="flex justify-center md:justify-normal ">
                                <ul className="mb-4 grid grid-cols-2 gap-8 md:gap-28 ">
                                    <div>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-2xl"><MdConnectingAirports /></span>Airport transfer</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><TbAirConditioning /></span>Air conditioning</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><LuParkingCircle /></span>Free parking</li>
                                    </div>
                                    <div>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><FaWifi /></span>Free WiFi</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><MdRestaurant /></span>Restaurant</li>
                                        <li className='flex items-center text- my-1'><span className="mr-2 text-xl"><MdLocalBar /></span>Bar</li>
                                    </div>
                                </ul>
                            </div>

                            <a href="#" className="text-blue-500  inline-block mb-2">See all property amenities &gt;</a>
                        </div>

                        <div className='rounded-full'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.043813144539!2d76.78222047466204!3d30.745270785028293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a09098a47aa89%3A0xc0ef30e113006e91!2sTaj%20Chandigarh!5e0!3m2!1sen!2sin!4v1710182425959!5m2!1sen!2sin" width="330" height="250" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <p className="text-gray-700 my-2 text-xl font-bold"> Check out the area </p>
                            <ul className="mb-2">
                                {locations.map((location, index) => (
                                    <li key={index} className="flex items-center mb-1">
                                        {location.icon}
                                        <div className="ml-2">
                                            <p className="text-sm">{location.name}</p>
                                            <p className="text-xs text-gray-500">{location.distance}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-500 ">See more &gt;</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HotelView;
