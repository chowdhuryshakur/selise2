import { Fragment, useEffect, useState } from "react"
import { Row, Col, Nav, Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import avatar from "../images/avatars/13.png"
import {userData, coursesData} from '../DB'

const Layout = ({children}) => {

    const [user, setUser] = useState()

    useEffect(() => {
        const retrivedCourses = JSON.parse(localStorage.getItem('courses'))
        if (retrivedCourses) {
            setUser(JSON.parse(localStorage.getItem('user')))
        } else {
          setUser(userData[0])
          localStorage.setItem('courses', JSON.stringify(coursesData))
          localStorage.setItem('user', JSON.stringify(userData[0]))
        }
      }, [])

    return (
        <div style={{height:'100vh', overflow:'hidden'}}>
            <Row>
                <Col md='2' className="d-none d-md-block bg-secondary" style={{height:'100vh'}}>
                    <div className="py-3 ps-4">
                        <h3 className="text-bold text-white">LMS</h3>
                    </div>
                    <Nav>
                        <NavLink to='/' style={{width:'100%', height:'30px'}} className="ps-4 text-white text-decoration-none">All Courses</NavLink>
                        <NavLink to='/myLearning' style={{width:'100%', height:'30px'}}  className="ps-4 text-white text-decoration-none">My Learning</NavLink>
                        <NavLink to='/learningHistory' style={{width:'100%', height:'30px'}}  className="ps-4 text-white text-decoration-none">Learning History</NavLink>
                    </Nav>
                </Col>
                <Col sm='12' md='10' className="overflow-auto" style={{maxHeight:'100vh'}}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-end py-2" id="navbarTogglerDemo01">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center" style={{background:'transparent', border:'none', color: 'black'}}>
                                        <div className="d-flex align-items-center">
                                            <img src={avatar} width={'40px'}/>
                                            <h6 className="mb-0 ms-1">Hi, {user?.name}</h6>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </nav>
                    { children }
                </Col>
            </Row>
        </div>
    )
}

export default Layout