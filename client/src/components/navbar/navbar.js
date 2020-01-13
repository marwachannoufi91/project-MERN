import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import jwt_decode from "jwt-decode"

// import { Button , Nav ,FormControl ,Form} from 'react-bootstrap';
import './navbar.css'

class Navbar extends Component{


    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
    }
    componentDidMount(){
        const token=localStorage.usertoken
        const decoded=jwt_decode(token)
        this.setState({
            firstName:decoded.firstName,
            lastName:decoded.lastName,
            email:decoded.email
        })
    }

    logOut=(e)=>{
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push("/")

    }
    render(){
        const loginRegLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >
                        login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" >
                        register
                    </Link>
                </li>
            </ul>
        )
        
        const userLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link" >
                    {this.state.firstName}{this.state.lastName}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" onClick={this.logOut} className="nav-link">
                        logOut
                    </Link>
                </li>
            </ul>
        )
            return(
                <div >
                        {/* <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar> */}
                        {localStorage.usertoken?userLink:loginRegLink}
                   
                </div>
            )
    }
}
export default withRouter(Navbar)