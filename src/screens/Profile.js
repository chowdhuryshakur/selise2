import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Col, Button, Label, Row, Modal, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Profile() {
    
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleChange = e => {
      setUser({...user, [e.target.name]:e.target.value})
    }
    const onSubmit = e => {
      e.preventDefault()
      localStorage.setItem('user', JSON.stringify(user))
      toggleModal()
      toast.success('Successfully Updated!')
    }
    
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
            <Modal show={modal}>
              <Modal.Header closeButton onHide={toggleModal}>
                <Modal.Title>Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Row>
                      <Col sm='12'>
                          <label for="name">
                              Name
                              <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                              type="text"
                              name="name"
                              id="name"
                              value={user?.name}
                              onChange={handleChange}
                              required
                              placeholder="name..."
                              className='d-block my-2 w-100'
                          />
                      </Col> 
                      <Col sm='12'>
                          <label for="email">
                              Email
                              <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              value={user?.email}
                              onChange={handleChange}
                              required
                              placeholder="email..."
                              className='d-block my-2 w-100'
                          />
                      </Col> 
                      <Col sm='12'>
                          <label for="notification">
                              Notifications
                              <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input type="checkbox" onChange={e => setUser({...user, notifications: e.target.checked})} 
                              className='d-block my-2'/>
                      </Col> 
                      <Col sm='12' className='text-center'>
                        <Button type='submit'>Submit</Button>
                      </Col>
                    </Row>
                </Form>
              </Modal.Body>
          </Modal>
        </div>
      );
}

export default Profile


