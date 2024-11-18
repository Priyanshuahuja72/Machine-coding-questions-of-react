import './App.css';
import commentData from "./data/comments.json";
import NestedComment from './components/nested-comments';
function App() {

  return (
    <div>
     <h1>Nested Comment System</h1>
     <NestedComment 
       comments={commentData}
       onSubmit={() => {}}
       onEdit={() => {}}
       onDelete={() => {}}
     />
    </div>
  )
}

export default App
