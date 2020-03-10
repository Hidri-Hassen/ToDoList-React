import React from 'react';
import ListItems from './components/ListItems.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)





class App extends React.Component {
 render(){
  return (
    <div className="App">
<ListItems />
    </div>
  );
 
}
}


export default App;
