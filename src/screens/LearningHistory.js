import { Slider } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Dropdown, ProgressBar, Row, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LearningHistory() {
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [totalHour, setTotalHour] = useState([])

    useEffect(() => {
        const rC = JSON.parse(localStorage.getItem('courses'))
        const rE = JSON.parse(localStorage.getItem('enrolledCourses'))
        setCourses(rC)
        setEnrolledCourses(rE || [])
        let th = 0
        rE?.forEach(element => {
          th += rC?.find(item => item?.id === element?.courseId).duration
        })
        setTotalHour(th)
        
    }, [])

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <h3>Learnings History</h3>
            <Row className='pt-3'>
              <h5>Total Course Months: {totalHour}</h5>
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


