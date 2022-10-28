

// JSX function
function App() {
  const title = 'Feedback App'
  const body = 'this is my blog post'
  const loading = false;
  const showComments = false;

// Array
  const comments =[
    {id: 1, text:'Comment one'},
    {id: 2, text: 'Comment tow'},
    {id:3, text: 'Comment three'},
    {id: 4, text: 'Comment four'},
  ]
  const comment =[
    {id: 1, text:'Comment five'},
    {id: 2, text: 'Comment six'},
    {id:3, text: 'Comment seven'},
    {id: 4, text: 'Comment aet'},
  ]
  const result =[];
  // retutn stetment can have multibole contaners and inside the containers we can add the elements
  return (
    <div className={'container'}>
      <h1> {title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && (<div className={'comments'}>
          <h3> Comments ({comments.length})</h3>
          <ul>
            {comments.map( (comm, index) =>(
              <li key={index}>{comm.text}</li>,
                <li key={index}>{comm.text}</li>,
                <li key={index}>{comm.text}</li>,
                <li key={index}>{comm.text}</li>
            ))}
          </ul>
        </div>
      )}

      //specifying the class in react we use className rather then class

      <div className={'comment'}>
        // loop into the index of the array we use the name of the array with the (length) keyword, result can be saved in an html element such h2,li
        // we can loop the an array with map() or any high order methods of javascript
        <h4> Comment tow block({comment.length})</h4>
        <ol>
          {comment.map((com, index)=>(
            <li key={index}>{com.text}</li>,
              <li key={index}>{com.text}</li>,
              <li key={index}>{com.text}</li>

          ))}
        </ol>
      </div>

    </div>

  )
}


