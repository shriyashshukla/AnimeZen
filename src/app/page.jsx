import React from 'react';

const Page = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-black">
    
      <nav className="bg-black p-6 flex items-center justify-between">
        <button className="buton" data-text="Awesome">
          <span className="actual-text">&nbsp;ANIMEZEN&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;ANIMEZEN&nbsp;
          </span>
        </button>

        <ul className="flex">
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
      </nav>

   
      <div className="flex justify-center">
        <img src="banner.jpg" alt="" className="w-5/7 h-auto" />
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
      
      {/* Added section with white background */}
      
        <header className="bg-black text-white">
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
            <li>
              <a href="/about" className="text-white mx-24">VIEW ALL</a>
            </li>
          </ul>
        </header>
        <section className="bg-white py-8 px-4 ">
        <div className="flex">
          <div className='card'>
            
          </div>
        </div>
      </section>
    </div>
   
    </>
  );
}

export default Page;