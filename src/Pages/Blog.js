import React from 'react';
import { FaThumbsUp, FaComment } from "react-icons/fa";
import { blogData } from '../blogdata';



const Blog = () => {
  return (
    <>
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {blogData.map((item) => (
            <div className="p-4 md:w-1/3" key={item.id}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.linkImg} alt={item.name} />
                <div className="p-4">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p className="mb-3 text-xs">{item.date}</p>
                  <p className="leading-relaxed mb-3">{item.info}...</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="inline-flex items-center md:mb-2 lg:mb-0">Read More
                    </a>
                    <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FaThumbsUp className="w-4 h-4 mr-1" />{item.likes}
                    </span>
                    <span className="inline-flex items-center leading-none text-sm">
                      <FaComment className="w-4 h-4 mr-1" />{item.comment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
           ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default Blog