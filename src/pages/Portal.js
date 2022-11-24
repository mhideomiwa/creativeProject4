import {Link} from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {Component} from "react";
import {Routes, Route} from 'react-router-dom'
import PortalLogin from './PortalLogin'


function refreshPage() {
    window.location.reload(false);
}

class Portal extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
        }

        this.logout = this.logout.bind(this)

        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    componentDidMount() {
        this.getUser()
    }

    updateUser (userObject) {
        this.setState(userObject)
    }

    getUser() {
        axios.get('/user/').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,
                    username: null
                })
            }
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        if(this.state.loggedIn === false) {
            return <PortalLogin/>
        }


        return (
            <>
            <div class="content">

                <p>Welcome {this.state.username}!</p>
                <p>This Pages is under construction.  Please send any suggestions to mhmiwa@miwa.us </p>
                <div>
                            <section className="navbar-section"><button onClick={refreshPage}>
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">logout</span></Link></button>

                            </section>
                </div>

            </div>
            </>
        );
    }
}

export default Portal;