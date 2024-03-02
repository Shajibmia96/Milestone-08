
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    return (
        <div>
            <h1>Price : {option.price}</h1>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;