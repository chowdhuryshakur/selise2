import { Slider } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, CardBody, Col, Dropdown, ProgressBar, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function MyLearning() {
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(null)
    const [enrolledCourses, setEnrolledCourses] = useState([])
    const [TempP, setTempP] = useState(0)

    useEffect(() => {
        setCourses(JSON.parse(localStorage.getItem('courses')))
        setEnrolledCourses(JSON.parse(localStorage.getItem('enrolledCourses')) || [])
    }, [])

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <h3>My Learnings</h3>
            <Row className='pt-3'>
              {
                enrolledCourses?.length > 0 ? enrolledCourses?.map((item, index) => <Col key={index} sm='12' md="3" className='g-3'>
                <Card className='h-100'>
                  <CardBody>
                    <h4 className='mb-4'>{courses?.find(itm => itm.id === item.courseId)?.title}</h4>
                    <p className='mb-1'>Status: {item?.status}</p>
                    <ProgressBar now={item?.progress} />
                    <div>
                    <input 
                        type="number"
                        value={TempP}
                        className='my-3 w-75 me-2'
                        placeholder='update your progress'
                        onChange={(e) => {
                          const value = parseInt(e.target.value)
                          setTempP(value)               
                        }}  
                      />
                      <Button onClick={() => {
                          if ((TempP > 100 || TempP < 0) || item?.status === "completed") {
                              //do nothing
                              toast.error('Something went wrong')
                          } else {
                              if (TempP === 100) {
                                const now = new Date()
                                const eCourseIndex = enrolledCourses?.map(itm => itm.id)?.indexOf(item.id)
                                enrolledCourses[eCourseIndex] = {...enrolledCourses[eCourseIndex], progress: TempP, status: 'completed', completedAt: now?.toISOString()}
                                setEnrolledCourses([...enrolledCourses])
                                localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses]))
                              } else {
                                const eCourseIndex = enrolledCourses?.map(itm => itm.id)?.indexOf(item.id)
                                enrolledCourses[eCourseIndex] = {...enrolledCourses[eCourseIndex], progress: TempP}
                                setEnrolledCourses([...enrolledCourses])
                                localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses]))
                              }
                              toast.success('Successfully saved!')
                          }
                      }}>Save</Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>) : <div className='d-flex justify-content-center text-danger'>No Course found!</div>
              }
            </Row>
        </div>
      );
}

export default MyLearning


