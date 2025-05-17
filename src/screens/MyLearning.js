import { Slider } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MyLearning() {
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    useEffect(() => {
        setCourses(JSON.parse(localStorage.getItem('courses')))
        setEnrolledCourses(JSON.parse(localStorage.getItem('enrolledCourses')) || [])
    }, [])

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <h3>My Learnings</h3>
            <Row className='pt-3'>
              {
                enrolledCourses?.length > 0 ? enrolledCourses?.map(item => <Col sm='12' md="3" className='g-3'>
                <Card className='h-100'>
                  <CardBody>
                    <h4 className='mb-4'>{courses?.find(itm => itm.id === item.courseId)?.title}</h4>
                    <p className='mb-1'>Status: {item?.status}</p>
                    <ProgressBar now={item?.progress} />
                  </CardBody>
                </Card>
              </Col>) : <div className='d-flex justify-content-center text-danger'>No Course found!</div>
              }
            </Row>
        </div>
      );
}

export default MyLearning


