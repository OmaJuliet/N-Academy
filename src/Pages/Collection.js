import React, {useState} from 'react';
import { collectionData } from '../collection';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const notify = () => {
  toast("Item has been added to your purchase collection")
}


const Collection = () => {

  const [category, setCategory] = useState(collectionData);
  
  
  const handleBtns = (e) => {
    let word=e.target.value;
     
    if(word === "All"){
      setCategory(collectionData)
    }
    else if(word === "Metaverse") {
      const filtered = collectionData.filter(item=>item.kind === "Metaverse");
      setCategory(filtered)
    }
    else if(word === "Music") {
      const filtered = collectionData.filter(item=>item.kind === "Music");
      setCategory(filtered)
    }
    else if(word === "Sports") {
      const filtered = collectionData.filter(item=>item.kind === "Sports");
      setCategory(filtered)
    }
  }


  return (
    <>
      <motion.section
          initial={{
            opacity:0,
        }}
        transition={{
            duration: 2.0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once:true }}
        className="">
        <div className="container px-5 lg:py-12 py-8 mx-auto">
          <h2 className="lg:mt-2 mt-4 mb-12 text-center text-2xl font-semibold">NFT Collections</h2>
          <div className="flex flex-wrap mt-4 justify-center lg:mb-4 mb-8">
          {/* py-2 px-6  */}
            <button value="All" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 lg:p-0 py-2 px-6 md:w-24 h-12 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">All</button>
            <button value="Metaverse" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 lg:p-0 py-2 px-6 md:w-24 h-12 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Games</button>
            <button value="Sports" onClick={handleBtns} className="mr-2 text-indigo-500 bg-white border-0 lg:p-0 py-2 px-6 md:w-24 h-12 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Sports</button>
            <button value="Music" onClick={handleBtns} className="lg:mt-0 md:mt-0 mt-4 text-indigo-500 lg:p-0 py-2 px-6 bg-white lg:mt-0 border-0 md:w-24 h-12 hover:bg-indigo-500 hover:text-white focus:bg-indigo-600 focus:text-white rounded-full text-lg">Music</button>
          </div>

          <div className="flex flex-wrap -m-2 lg:-m-0">
            {category.map((item) => (
              <motion.div
                animate="visible"
                exit="hidden"
                drag
                dragConstraints={{ top: 0, bottom: 0, left:0, right:0 }}
                className="lg:p-8 p-5 md:w-1/2 lg:w-1/4 w-full" key={item.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-[#220761]">
                  <img className="lg:h-64 md:h-36 w-full object-cover object-center" src={item.linkImg} alt={item.name} />
                  <div className="py-6 px-2">
                    <div className="flex items-center flex-wrap justify-between">
                      <h1 className="text-xl font-bold">{item.name}</h1>
                      <button className="inline-flex items-center px-2 py-1 border-2 border-indigo-400 rounded-lg hover:bg-white hover:text-indigo-500 hover:border-none" onClick={notify}>Buy Now</button>
                    </div>
                    <p className="tracking-widest text-xs font-medium mb-4">{item.kind}</p>
                    
                    <div className="flex items-center flex-wrap">
                      <p className="leading-relaxed inline-flex items-center mb-1 font-bold text-xl">{item.eth}</p>
                      <h3 className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto font-bold text-xl">{item.price}</h3>
                    </div>
                    
                    <div className="flex items-center flex-wrap">
                      <p className="inline-flex items-center md:mb-2 lg:mb-0">Floor Price
                      </p>
                      <span className="text-red-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto">
                        {item.percent}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}


          </div>
        </div>
      </motion.section>
      <ToastContainer />
    </>
  )
}

export default Collection