import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa';


function FeedbackItem({item, hadeleDelete}) {

    return(
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => hadeleDelete(item.id)} className= 'close'>
            <FaTimes color='purple'/>
            </button>
            <div className='text-disply'>{item.text}</div>
        </Card>
        
    )
}

Card.defaultProps={
    reverse : false,
}

export default FeedbackItem 
