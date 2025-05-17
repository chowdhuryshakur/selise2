import { computeShrinkWidth } from '@fullcalendar/core/internal';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, CardBody, Col, Dropdown, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function CourseDetails() {
    const {id} = useParams()
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)
    const [user, setUser] = useState()
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [course, setCourse] = useState(null)

    useEffect(() => {
        setCourses(JSON.parse(localStorage.getItem('courses')))
        setEnrolledCourses(JSON.parse(localStorage.getItem('enrolledCourses')) || [])
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    useEffect(() => {
        if (id) {
          setCourse(courses?.find(item => item.id === parseInt(id)))
        }
    }, [courses, id])

    const enroll = () => {
        const enrolledIds = enrolledCourses?.map(itm => itm?.courseId)
        if (enrolledIds?.includes(parseInt(id))) {
            toast.error('Already Enrolled!')
            return 0
        }
        if (enrolledIds?.includes(course?.prerequisites)) {
            toast.error('Prerequisites are not met!')
            return 0
        }
        const now = new Date()
        const newEnrolment = {
            userId: user?.id,
            courseId: course?.id,
            status: 'enrolled',
            progress: 0,
            enrolledAt: now.toISOString(),
            completedAt: '',
        }
        localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses, newEnrolment]))
        setEnrolledCourses([...enrolledCourses, newEnrolment])
        toast.success('Successfully Enrolled!')
    }

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <div className='d-flex justify-content-between'>
              <h3>Course Details</h3>
              <Button onClick={() => navigate('/')}>Back</Button>
            </div>
            <Row className='pt-3'>
              <Col sm='12' md="12">
                  <Card className='h-100'>
                    <CardBody>
                      <h4 className='mb-4'>{course?.title}</h4>
                      <p className='mb-1'>{course?.description}</p>
                      <p className='mb-1'>Category: {course?.category}</p>
                      <p className='mb-1'>Duration: {course?.duration} Months</p>
                      <p className='mb-1'>Status: {course?.duration}</p>
                      <p className='mb-1'>Duration: {course?.duration} Months</p>
                      {course?.isFree ? <h6 className='mb-1 text-primary'>Free</h6> : <h6 className='mb-1 text-warning'>Premium</h6>}
                      <span>Prerequisites: {
                        course?.prerequisites?.length > 0 ? course?.prerequisites?.map(itm => <Badge className='me-1'>
                          {courses?.find(itm2 => itm2.id === itm)?.title}
                        </Badge>)
                        : 'No prerequisites'}</span>
                      <Button className='mt-4 d-block' onClick={() => enroll()}>Enroll</Button>
                    </CardBody>
                  </Card>
                </Col>
            </Row>
        </div>
      );
}

export default CourseDetails


