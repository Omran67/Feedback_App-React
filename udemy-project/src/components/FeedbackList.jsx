import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, hadeleDelete}) {
    if (!feedback || feedback.length === 0) {
        return <p> No feedback yet</p>
    }
    return(
        <div className='feedback-list'>
            {feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item}hadeleDelete={hadeleDelete}/>
            ))}
        </div>
    )
}

export default FeedbackList
