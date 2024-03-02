
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
     const {name, price, features} = option
    return (
       
            <div className='bg-blue-500 m-4 p-4 rounded-2xl text-white flex flex-col'>
            <h1 className='text-center '>
                 <span className='text-7xl font-extrabold '>{price}</span>
                 <span className='text-3xl'>/mon</span>
            </h1>
            <h1 className='text-4xl my-8 text-center '>{name}</h1>
            <div className='ml-12 flex-grow'>
             {
                features.map ((feature , idx) => <Feature key={idx} feature={feature}></Feature> )
             }
         </div>

         <button className='bg-green-500 w-full py-2 mt-8 rounded-xl hover:bg-green-800 font-bold'>Buy Now</button>
             
        </div>
         
       
    
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;