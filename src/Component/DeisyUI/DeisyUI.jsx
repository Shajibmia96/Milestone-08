import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFoldFill  } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PriceOptions from "../PriceOptions/PriceOptions";
const DeisyUI = () => {

      const [open , setOpen]  = useState(false)
       
    const routes = [{ id: 1, path: '/', name: 'Home' },
                    { id: 2, path: '/about', name: 'About' },
                    { id: 3, path: '/services', name: 'Services'},
                    { id: 4, path: '/services/web-development', name: 'Web development '},
                    {id:5 , path : "/services/Graphic-design" , name : "Graphic design "}
                 ];

    return (
        <div>
              <nav>
                  <div onClick={() => setOpen(!open) } className="text-2xl md:hidden">
                    
                    {
                        open === true ? 
                        <IoMdCloseCircleOutline ></IoMdCloseCircleOutline> : 
                        <RiMenuFoldFill ></RiMenuFoldFill>
                    }

                  
                  </div>
                <ul className={`md:flex rounded-lg justify-between bg-black text-white m-4 duration-1000 p-4 absolute md:static shadow-2xl hover:bg-gradient-to-r from-black to-orange-300
                                ${open ? "top-1" : "-top-96"}
                 `}>
                     {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                     }
                </ul>
              </nav>

              {/* Show price tag  */}
               <PriceOptions></PriceOptions>
        </div>
    );
};

export default DeisyUI;