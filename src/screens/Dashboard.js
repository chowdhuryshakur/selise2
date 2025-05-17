import { file } from 'googleapis/build/src/apis/file';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Dropdown, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    
    const navigate = useNavigate()
    const [courses, setCourses] = useState(JSON.parse(localStorage.getItem('courses')))
    const [filteredData, setFilteredData] = useState(JSON.parse(localStorage.getItem('courses')))
    const [sort, setSort] = useState()
    const [filter, setFilter] = useState()

    useEffect(() => {
      let result = [...courses]
      
      if (filter) {
        if (filter === 'Free') {
          result = result.filter(item => item?.isFree);
        } else if (filter === 'Premium') {
          result = result.filter(item => !item?.isFree);
        } else {
          result = result.filter(item => item?.category === filter);
        }
      }
    
      if (sort) {
        if (sort === 'title') {
          result.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sort === 'duration') {
          result.sort((a, b) => a.duration - b.duration);
        }
      }
    
      setFilteredData(result);
    }, [sort, filter, courses]);

    // const handleSearch = (searchTerm) => {
    //   setFilteredData(
    //     courses?.filter((course) =>
    //       course?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    //   ))
    // }

    return (
        <div className='p-3' style={{height:'100vh'}}>
            <div className='d-flex justify-content-between'>
              <h3>All Courses</h3>
              <div className='d-flex'>
                {/* <input
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search courses..."
                /> */}
                <Dropdown className='me-2'>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter By
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Design')}>Design</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Programing')}>Programing</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Frontend')}>Frontend</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Devops')}>Devops</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Free')}>Free</Dropdown.Item>
                    <Dropdown.Item onClick={() => setFilter('Premium')}>Premium</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSort('')}>None</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort('title')}>Title</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort('duration')}>Duration</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <Row className='pt-3 match-height'>
              {
                filteredData?.length > 0 ? filteredData?.map(item => <Col sm='12' md="3" style={{cursor:'pointer'}} className='g-3' onClick={() => navigate(`/course/${item.id}`)}>
                <Card className='h-100'>
                  <CardBody>
                    <h4 className='mb-4'>{item?.title}</h4>
                    <p className='mb-1'>Category: {item?.category}</p>
                    <p className='mb-1'>Duration: {item?.duration} Months</p>
                    {item?.isFree ? <h6 className='mb-1 text-primary'>Free</h6> : <h6 className='mb-1 text-warning'>Premium</h6>}
                  </CardBody>
                </Card>
              </Col>) : <div className='d-flex justify-content-center text-danger'>No Course found!</div>
              }
            </Row>
        </div>
      );
}

export default Dashboard


