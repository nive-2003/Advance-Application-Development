import React from "react";
import ReactDOM from "react-dom";

// import "../../src/index.css"
import "../Admin/Admin.css"
import AdminSidebar,{AdminSidebarItem} from "./AdminSidebar";
// import Sidebar, { SidebarItem } from "../Components/Sidebar"
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";


function Admin() {
  return (
    <div className="mx-auto bg-grey-400">
     
      <div className="min-h-screen flex flex-col">
        
        <header className="bg-nav">
          <div className="flex justify-between">
            <div className="p-1 mx-3 inline-flex">
              <h1 className="text-white">Logo</h1>
              <i className="fas fa-bars p-3 text-white" onclick="sidebarToggle()" />
            </div>
            <div className="p-1 flex flex-row">
              <a href="" className="text-white p-2 mr-2 no-underline hidden md:block lg:block">Github</a>
              <img onclick="profileToggle()" className="inline-block h-8 w-8 rounded-full" src="data:image/jpeg;base64,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" alt />
              <a href="#" onclick="profileToggle()" className="text-white p-2 no-underline hidden md:block lg:block">Admin</a>
              <div id="ProfileDropDown" className="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                <ul className="list-reset">
                  <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
                  <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
                  <li><hr className="border-t mx-2 border-grey-ligght" /></li>
                  <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
       
        <div className="flex flex-1 ">
        
        <div className="flex">
        <AdminSidebar>
          <AdminSidebarItem icon={<Home size={20} />} text="Home" alert />
          <AdminSidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <AdminSidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
          <AdminSidebarItem icon={<Calendar size={20} />} text="Calendar" />
          <AdminSidebarItem icon={<Layers size={20} />} text="Tasks" />
          <AdminSidebarItem icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <AdminSidebarItem icon={<Settings size={20} />} text="Settings" />
          <AdminSidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </AdminSidebar>
        </div>
         
          <main className="bg-white-300 flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
             
              <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                <div className="shadow-lg bg-pink-400 border-l-8  border-pink-700 mb-2 p-2 md:w-1/4 mx-2">
                  <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-black text-2xl">
                      $244
                </a>
                    <a href="#" className="no-underline text-black text-lg">
                      Total Sales
                </a>
                  </div>
                </div>
                <div className="shadow-lg bg-cyan-400 border-l-8  border-blue-800 mb-2 p-2 md:w-1/4 mx-2">
                  <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-black text-2xl">
                      $199.4
                </a>
                    <a href="#" className="no-underline text-black text-lg">
                      Total Cost
                </a>
                  </div>
                </div>
                <div className="shadow-lg bg-amber-500 border-l-8  border-amber-700 mb-2 p-2 md:w-1/4 mx-2">
                  <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-white text-2xl">
                      $900
                </a>
                    <a href="#" className="no-underline text-white text-lg">
                      Total Users
                </a>
                  </div>
                </div>
                <div className="shadow-lg bg-lime-500 border-l-8  border-lime-700 mb-2 p-2 md:w-1/4 mx-2">
                  <div className="p-4 flex flex-col">
                    <a href="#" className="no-underline text-white text-2xl">
                      $500
                </a>
                    <a href="#" className="no-underline text-white text-lg">
                      Total Products
                </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
             
                
                <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
  <div className="px-6 py-2 border-b border-light-grey">
    <div className="font-bold text-xl">Trending Categories</div>
  </div>
  <div className="table-responsive">
  <table className="table text-grey-darkest w-full table-auto">
    <thead className="bg-grey-dark text-black text-normal">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Resorts</th>
          <th scope="col">Current Bookings</th>
          <th scope="col">Remaining Rooms</th>
          <th scope="col">Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
            Greeary Resort
          </button>

          </td>
          <td>4500</td>
          <td>4600</td>
          <td>
            <span className="text-green-500"><i className="fas fa-arrow-up" />5%</span>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>
            <button className="bg-purple-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
              Bluberry Resorts
            </button>
          </td>
          <td>4500</td>
          <td>4600</td>
          <td>
            <span className="text-green-500"><i className="fas fa-arrow-up" />5%</span>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>
            <button className="bg-green-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
              Bairava Resorts
            </button>
          </td>
          <td>4500</td>
          <td>4600</td>
          <td>
            <span className="text-green-500"><i className="fas fa-arrow-up" />5%</span>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>
            <button className="bg-orange-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
              Besyi Resorts
            </button>
          </td>
          <td>4500</td>
          <td>4600</td>
          <td>
            <span className="text-green-500"><i className="fas fa-arrow-up" />5%</span>
          </td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>
            <button className="bg-red-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
              Twitter Resorts
            </button>
          </td>
          <td>4500</td>
          <td>4600</td>
          <td>
            <span className="text-green-500"><i className="fas fa-arrow-up" />5%</span>
          </td>
        </tr>
       
      </tbody>
    </table>
  </div>
</div>

                
              </div>
              
              {/* <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2">
                <div className="rounded overflow-hidden shadow bg-white mx-2 w-full pt-2">
                  <div className="px-6 py-2 border-b border-light-grey">
                    <div className="font-bold text-xl">Progress Among Projects</div>
                  </div>
                  <div className>
                    <div className="w-full">
                      <div className="shadow w-full bg-grey-light">
                        <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: '45%' }}>45%
                    </div>
                      </div>
                      <div className="shadow w-full bg-grey-light mt-2">
                        <div className="bg-teal-500 text-xs leading-none py-1 text-center text-white" style={{ width: '55%' }}>55%
                    </div>
                      </div>
                      <div className="shadow w-full bg-grey-light mt-2">
                        <div className="bg-orange-500 text-xs leading-none py-1 text-center text-white" style={{ width: '65%' }}>65%
                    </div>
                      </div>
                      <div className="shadow w-full bg-grey-300 mt-2">
                        <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '75%' }}>75%
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              
              <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 p-1 mt-2 mx-auto lg:mx-2 md:mx-2 justify-between">
                
                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                  <img src="https://i.imgur.com/w1Bdydo.jpg" className="w-full" />
                  <div className="flex justify-center -mt-8">
                    <img src="data:image/jpeg;base64,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" className="rounded-full border-solid border-white border-2 -mt-3" />
                  </div>
                  <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                    <p className="mt-2 font-sans font-light text-grey-700">Hello, i'm from another the other
                  side!</p>
                  </div>
                  <div className="flex justify-center pb-3 text-grey-dark">
                    <div className="text-center mr-3 border-r pr-3">
                      <h2>34</h2>
                      <span>Bookings</span>
                    </div>
                    <div className="text-center">
                      <h2>42</h2>
                      <span>Available rooms</span>
                    </div>
                  </div>
                </div>
              
                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                  <img src="https://i.imgur.com/w1Bdydo.jpg" className="w-full" />
                  <div className="flex justify-center -mt-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDj1RSpLD7uKAQxOts_L7Y9MO7fEZk8YJzw&usqp=CAU" className="rounded-full border-solid border-white border-2 -mt-3" />
                  </div>
                  <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                    <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other
                  side!</p>
                  </div>
                  <div className="flex justify-center pb-3 text-grey-dark">
                    <div className="text-center mr-3 border-r pr-3">
                      <h2>34</h2>
                      <span>Bookings</span>
                    </div>
                    <div className="text-center">
                      <h2>12</h2>
                      <span>Available rooms</span>
                    </div>
                  </div>
                </div>
               
                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                  <img src="https://i.imgur.com/w1Bdydo.jpg" className="w-full" />
                  <div className="flex justify-center -mt-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ixiXBeAYb_DmDaPSIkRf_0iHE9B0ha5B_A&usqp=CAU" className="rounded-full border-solid border-white border-2 -mt-3" />
                  </div>
                  <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                    <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other
                  side!</p>
                  </div>
                  <div className="flex justify-center pb-3 text-grey-dark">
                    <div className="text-center mr-3 border-r pr-3">
                      <h2>34</h2>
                      <span>Bookings</span>
                    </div>
                    <div className="text-center">
                      <h2>22</h2>
                      <span>Available rooms</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </main>
          
        </div>
        
        <footer className="bg-grey-darkest text-white p-2">
          <div className="flex flex-1 mx-auto">© My Design</div>
        </footer>
        
      </div>
    </div>

  );
}
export default Admin;