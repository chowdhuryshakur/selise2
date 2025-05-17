import { Slider } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Dropdown, ProgressBar, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LearningHistory() {
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    useEffect(() => {
        setCourses(JSON.parse(localStorage.getItem('courses')))
        setEnrolledCourses(JSON.parse(localStorage.getItem('enrolledCourses')) || [])
    }, [])

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <h3>Learnings History</h3>
            <Row className='pt-3'>
              {/* <h5>Total Course Hour: {courses?.find(itm => itm.id === item.courseId)?.title}</h5> */}
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>completed At</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    enrolledCourses?.map(item =>  <tr>
                      <td>{courses?.find(itm => itm.id === item.courseId)?.title}</td>
                      <td>{courses?.find(itm => itm.id === item.courseId)?.category}</td>
                      <td>{item.completedAt}</td>
                    </tr>)
                  }
                </tbody>
              </Table>
            </Row>
        </div>
      );
}

export default LearningHistory


