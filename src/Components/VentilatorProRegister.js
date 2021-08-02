import React, { Component } from 'react'
import './CSS/MyCSS.css'

class VentilatorProRegister extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             age: "",
             gender: "",
             ven_avail: "",
             total_ven: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onchangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.age} ${this.state.gender} ${this.state.ven_avail} ${this.state.total_ven} Registered Successfully!`)
        console.log(this.state)
        this.setState({
            age: "",
             gender: "",
             ven_avail: "",
             total_ven: ""
        })
        event.preventDefault()
    }

    render() {
        const  {age, gender, ven_avail, total_ven} = this.state
        return (
            <div className="container">
                <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <h1>Ventilator Provider Register </h1>

                    <label><b>Age  </b></label>
                    <input type = 'text' placeholder='Enter age' name="age" 
                    value={age} onChange={this.onchangeHandler}required/><br/>

                    <label><b>Ventilators Available  </b></label>
                    <input type = 'text' placeholder='Enter ven_avail' name="ven_avail" 
                    value={ven_avail} onChange={this.onchangeHandler}required/><br/>

                    <label><b>Total Ventilators </b></label>
                    <input type = 'text' placeholder='Enter total_ven' name="total_ven"
                     value={total_ven} onChange={this.onchangeHandler}required/><br/>

                    <br/><br/><label><b>Select Gender : </b></label>
                    <div >
                    <input type="radio" value="male" checked={this.state.gender === "male"} onChange={this.genderHandler}/><label htmlFor="male">Male</label>
                    <input type="radio" value="female" checked={this.state.gender === "female"} onChange={this.genderHandler}/><label htmlFor="female">Female</label>
                    <input type="radio" value="other"  checked={this.state.gender === "other"} onChange={this.genderHandler}/><label htmlFor="other">Other</label>
                    <br/>
                    </div>
                    <br/>
                    <input type='submit' className='submitButton' value="Submit" />
                    
                </form>
                </div>
            </div>
        )
    }
}

export default VentilatorProRegister
