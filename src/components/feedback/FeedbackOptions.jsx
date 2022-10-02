import { Component } from "react";
import PropTypes from 'prop-types';

const buttonStyle = {display:'flex',
alignItems:'center',
justifyContent:'center',
borderRadius: '5px',
border:'0',
color: 'teal',
backgroundColor:'white',
width:'75px',
padding:'5px'}


export default class FeedbackOptions extends Component{
state=this.props.options
buttonsName=Object.keys(this.state)


render(){
return(<>
    <ul style={{display:'flex', justifyContent:'center',}}>
        {this.buttonsName.map(name=>(
            <li style={{marginRight:'20px'}} key={name}><button type="button" style={buttonStyle}
             name={name} onClick={this.props.onLeaveFeedback}>{name}
             </button>
             </li>
        ))}
    </ul>
</>
)
      }
    }

FeedbackOptions.propTypes={
    option:PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback:PropTypes.func
}