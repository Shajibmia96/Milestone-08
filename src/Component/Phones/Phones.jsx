import axios from "axios";
import { useEffect, useState } from "react";
import { Audio , DNA } from 'react-loader-spinner';
const Phones = () => {

    const [phones, setPhones]= useState([])

    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        //  fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        //  .then( res => res.json())
        //  .then(data => setPhones(data.data))
        
        axios("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data => setPhones(data.data.data))
        setLoading(false)

    },[])
    return (
        <div>
            {
                loading &&    <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            }

<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
            <h1 className="text-2xl">Phones : {phones.length}</h1>
        </div>
    );
};

export default Phones;