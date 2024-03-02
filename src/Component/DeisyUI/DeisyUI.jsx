import { useState } from "react";
import Link from "../Link/Link";
import { RiMenuFoldFill  } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
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
                <ul className="md:flex">
                     {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                     }
                </ul>
              </nav>
        </div>
    );
};

export default DeisyUI;