import React, { Component } from 'react'
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';



class ListItems extends Component {
    state = {
        arr:[],
        text:"",
       

    }
    
  add=()=>{
      if(this.state.text.length){
        this.setState({
            arr: [...this.state.arr, {title:this.state.text,done:false}],
            text:""
          })
      }

  }


handleChange=(e)=>{
this.setState({
  text:e.target.value
})
}





handleDelete=(i)=>{
this.setState({
    arr:this.state.arr.filter((el,e)=> e!==i)
})
}




handleComplete=(i)=>{

this.setState({
    arr:[...this.state.arr.map((el,e)=> e===i? {...el, done:!el.done}:el)]
})


}


    render() {
        return (
<div>
           <input className="input" type="text" value={this.state.text} placeholder="....Add your List" onChange={this.handleChange} /> 
           <button className="button" type="button" onClick={this.add} >Add</button>  
           
           <div >
           <FlipMove duration={300} easing="ease-in-out">
               {
                   this.state.arr.map((el,i)=>(
                <div key={i}>
                    <p className="list">
                    <FlipMove duration={300} easing="ease-in-out">
                    <FontAwesomeIcon className="faicons" onClick={()=>{this.handleDelete(i)}
                     } icon="trash" />
                  </FlipMove>
                    <input className={el.done? "line-through" : "not-line-through"} type="text" value={el.title} />
                   
                    <button  className="button" onClick={()=>this.handleComplete(i)} >{el.done? "undo" : "complete"}</button>
                  
                    </p>

                </div>
                      
                   ))
               }
               </FlipMove>
           </div>
      </div>

        )
    }

}


  export default ListItems;
