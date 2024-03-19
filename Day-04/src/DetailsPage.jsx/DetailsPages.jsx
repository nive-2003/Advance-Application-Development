import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import { FaMapLocationDot, FaMapPin,FaStar } from "react-icons/fa6";
import { IoPersonSharp,IoBed } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function DetailsPages() {
    useEffect(() => {
        const map = L.map('map').setView([8.725, 76.713], 15); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:
             '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMaps</a>'
        }).addTo(map);

        L.marker([8.724, 76.713]).addTo(map)
            .bindPopup('Oriental Hotel')
            .openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return (
        <>
            <Navbar/>
            <div className="bg-white flex absolute top-[20%] left-[8%]">

            {/* Component 1 */}

                <div className="">
                    <div className="flex justify-between albsolute top-[20%] left-[10%]">
                        <section className="pl-[1px]">
                            <p className='flex text-[#fdba00]'><FaStar /><FaStar /><FaStar /><FaStar /></p>
                            <p className="text-2xl font-poppins font-semibold pt-[6px]">Oriental Hotel - Varkala</p>
                            <span className="flex text-[0.9rem] font-poppins pt-[5px]"> 
                                <span className="pr-[10px] pt-[1px]"><FaMapLocationDot /> </span> 
                                    North Middle Cliff Near Cultural Center, Varkala, Kerala</span>
                            <span className="flex text-1xl font-poppins pt-[5px] text-[#6b3434] font-semibold">
                                <span className="pr-[10px] pt-[3px]"><FaMapPin/></span> 0.9 Kms from Varkala Beach</span>
                        </section>

                        <section className="flex flex-col justify-center items-center bg-[#1ca54f] h-[80px] w-[100px] rounded-[10px]">
                            <span className="text-white font-semibold text-2xl font-poppins">4.5 / 5</span>
                            <span className="text-white font-semibold text-[0.9rem] font-poppins">536 ratings</span>
                        </section>
                    </div>

                    <div className="hover:transform hover:scale-[102%] transition-transform duration-300 ease-in-out">
                        <img className="h-[400px] w-[685px] rounded-[15px] mt-[18px]"
                        alt="hotels" src="https://www.nichepursuits.com/wp-content/uploads/2023/06/Deluxe-Names-for-Resort-Hotels.jpg"></img>
                    </div>
                </div>

                {/* Component 2 */}
                <div className='ml-[55px]'>


                    <div className='border-2 border-[#9f9f9f] rounded-[10px] w-[500px] pr-[20px] 
                    pt-[15px] pl-[20px] pb-[15px]'>
                        <section className='flex'>
                            <section>
                                <span>Wintergreen Room</span>
                                <p className='flex'>
                                <span className="flex text-1xl text-[#4c4c4c] font-poppins pt-[5px]">
                                    <span className="pr-[10px] pt-[3px]"><IoPersonSharp /></span> 2 Guests</span>
                                <span className="flex text-1xl text-[#4c4c4c] font-poppins pt-[5px] pl-[20px]">
                                    <span className="pr-[8px] pt-[5px]"><IoBed /></span>1 Room</span>
                                </p>
                                <span className="flex text-[0.9rem] w-[250px] text-[#1ca54f] font-poppins pt-[5px] font-medium">
                                    <span className="pr-[4px] pt-[3.5px]">< MdVerified/></span>Free Cancellation till 12 - May - 2024 13:59</span>
                            </section>
                            <section className='pr-[10px] flex flex-col justify-center items-end w-[250px]'>
                                <span className="font-semibold text-2xl font-poppins">₹ 10,436</span>
                                <span className="font-medium text-[#4c4c4c] text-[0.8rem] font-poppins">+ ₹ 2,110 taxes & fees</span>
                                <span className="font-medium text-[#4c4c4c] text-[0.8rem] font-poppins">1 room per night</span>
                            </section>
                        </section>
                        
                        <section className='mt-[15px]'>
                            <button className='bg-[#364653] text-white h-[40px] w-full font-semibold text-center
                            rounded-[5px]'>View 6 other options </button>
                        </section>
                    </div>

                    <div className=" mt-[30px]">
                        <div id="map" className="w-[500px] h-[310px] rounded-[20px]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DetailsPages;