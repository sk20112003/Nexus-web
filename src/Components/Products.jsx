import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'

const Products = () => {
  return (
    <>
     <h1 className="text-4xl  font-bold text-gray-900 mb-4 lg:pl-[750px] md:pl-[320px] pt-10 pb-10 mt-8 bg-green-300 italic">Products & Services</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image1}/>
            
          
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Start Up Ideas</div>
            <p class="text-gray-500 text-sm">A dynamic and modern thumbnail featuring the theme of innovative startup ideas. The background is a gradient transitioning from dark blue to light blue, symbolizing growth and innovation.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image2}/>
           
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Game Developement</div>
            <p class="text-gray-500 text-sm"> A vibrant and engaging thumbnail that captures the essence of game development, appealing to both gamers and developers. The background is a gradient blend of deep purple and black, giving it a mysterious and high-tech atmosphere</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image3}/>
            
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Programming</div>
            <p class="text-gray-500 text-sm">A sleek and modern thumbnail that visually represents the world of programming, appealing to both beginners and experienced developers. The background should have a dark mode theme with a gradient of deep blue and black, symbolizing the coding environment..</p>
        </div>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image4}/>
            
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Artificial Intelligence</div>
            <p class="text-gray-500 text-sm"> A futuristic and visually striking thumbnail that encapsulates the essence of artificial intelligence. The background should have a gradient of deep blue and black with subtle circuit patterns to evoke a high-tech atmosphere.</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image5}/>
           
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">UI UX</div>
            <p class="text-gray-500 text-sm"> A clean and modern thumbnail that reflects the creative and technical aspects of UI/UX design. The background should be a gradient of light blue and white, symbolizing clarity and creativity..</p>
        </div>
    </div>


    <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <div class="relative">
            <img class="w-full h-48 object-cover" src={image6}/>
            
        </div>
        <div class="p-4">
            <div class="text-lg font-medium text-gray-800 mb-2">Web designing</div>
            <p class="text-gray-500 text-sm"> A clean and modern thumbnail that reflects the creative and technical aspects of UI/UX design. The background should be a gradient of light blue and white, symbolizing clarity and creativity..</p>
        </div>
    </div>


</div>
    
    
    
    
    </>
  )
}

export default Products





