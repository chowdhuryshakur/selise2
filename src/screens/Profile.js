import { Slider } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Button, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Profile() {
    
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [modal, setModal] = useState(true)

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    
    return (
        <div className='p-3' style={{height:'100vh'}}>
            <div className='d-flex justify-content-between'>
              <h3>Profile</h3>
              <Button onClick={() => setModal(true)}>Edit Profile</Button>
            </div>
            <Row className='pt-3'>
              <Col sm='12' md="12" className='g-3'>
                <Card className='h-100'>
                  <CardBody>
                    <h4 className='mb-4'>Name: {user?.name}</h4>
                    <p className='mb-1'>Email: {user?.email}</p>
                    <p className='mb-1'>Notification: {user?.preferences?.notifications ? 'True' : 'False'}</p>
                    <span>Prerequisites: {
                        user?.preferences?.preferredCategories?.length > 0 ? user?.preferences?.preferredCategories?.map((itm, id) => <Badge key={id} className='me-1'>
                          {itm}
                        </Badge>)
                        : 'No prerequisites'}</span>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </div>
      );
}

export default Profile


