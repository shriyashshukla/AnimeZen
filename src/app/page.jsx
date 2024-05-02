"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightNavBarOpen, setIsRightNavBarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRightNavBarToggle = () => {
    setIsRightNavBarOpen(!isRightNavBarOpen);
  };

  const handleCloseRightNavBar = () => {
    setIsRightNavBarOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-black">
        <nav className="bg-black p-6 flex items-center justify-between">
          <button className="buton" data-text="Awesome" onClick={handleToggle}>
            <span className="actual-text">&nbsp;ANIMEZEN&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;ANIMEZEN&nbsp;
            </span>
          </button>

          <ul className={isOpen ? "flex" : "hidden md:flex"}>
            <li className="mx-4">
              <a href="/" className="text-white">SHOP</a>
            </li>
            <li className="mx-4">
              <a href="/about" className="text-white">MEN</a>
            </li>
            <li className="mx-4">
              <a href="/contact" className="text-white">WOMEN</a>
            </li>
            <li className="mx-4">
              <a href="/contact" className="text-white">CHARACTERS</a>
            </li>
            <li className="mx-4">
              <a href="/contact" className="text-white">SAMURAI MERCH</a>
            </li>
          </ul>

          <div className="hidden md:flex items-center">
            
            <button className="text-white mx-4"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M21 12h-13l3 -3" />
  <path d="M11 15l-3 -3" />
</svg></button>

            <button className="text-white mx-4">Tracking</button>
          </div>

          <div className="md:hidden">
            <button className="toggle" onClick={handleRightNavBarToggle}>
              <div className="bars" id="bar1" />
              <div className="bars" id="bar2" />
              <div className="bars" id="bar3" />
            </button>
          </div>
        </nav>


        <div className="hidden md:flex justify-center">
          <img src="banner.jpg" alt="" className="w-5/7 h-auto" />
        </div>

        <div className='md:hidden flex  justify-center'>
          <img src="banner2.jpg" alt="" className="w-5/7 h-auto" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-8">Welcome to Animezen</h1>
          <p className="text-lg mt-4">The best place to find anime merchandise</p>
          <button className="buton mt-8" data-text="Shop Now">
            <span className="actual-text">&nbsp;OPEN&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;OPEN&nbsp;
            </span>
          </button>
        </div>

        <header className="bg-black text-white hidden md:flex">
          <ul className="flex p-6">
            <li>
              <a href="/" className="text-white mx-24">ACCESSORIES</a>
            </li>
            <li>
              <a href="/about" className="text-white mx-24">APPAREL</a>
            </li>
            <li>
              <a href="/about" className="text-white mx-24">DRINKWARE</a>
            </li>
            <li>
              <a href="/about" className="text-white mx-24">VIEW ALL</a>
            </li>
           
          </ul>
        </header>

        <div className="md:hidden flex items-center">
          <input type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2" className="toggle">
            <div className="bars" id="bar1" />
            <div className="bars" id="bar2" />
            <div className="bars" id="bar3" />
          </label>
          <div className="flex ml-11 justify-center items-center">
            <img src="main.webp" alt="" />
          </div>
        </div>

        <section className="bg-white py-8 px-4 ">
          <div className="flex">
            <div className='card'>
              {/* Card content */}
            </div>
          </div>
        </section>

         {/* Right side nav bar */}
        <nav className={isRightNavBarOpen ? "bg-black text-white fixed right-0 top-0 h-full w-full" : "hidden"}>
          <div className="flex flex-col p-6">
            
            <button className="text-white my-2 hover:text-gray-300" onClick={handleDropdownToggle}>
              <span className="mr-2">Dropdown</span>
              
              
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col">
                {/* Dropdown content */}
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 1</a>
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 2</a>
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 3</a>
              </div>
            )}
          </div>
          <div className="flex flex-col p-6">
            
            <button className="text-white my-2 hover:text-gray-300" onClick={handleDropdownToggle}>
              <span className="mr-2">Dropdown</span>
              
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col">
                {/* Dropdown content */}
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 1</a>
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 2</a>
                <a href="/" className="text-white my-2 hover:text-gray-300 pl-6">Option 3</a>
              </div>
            )}
          </div>
          
         
          <button class="closebutton" onClick={handleCloseRightNavBar}>
  <span class="X"></span>
  <span class="Y"></span>
  <div class="close">Close</div>
</button>

          
          

        </nav>
      </div>
    </>
  );
}

export default Page;
