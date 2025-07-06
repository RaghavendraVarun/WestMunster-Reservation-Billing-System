import {  Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export const RoomdetailsPage = () => {
    return(
        <div>
            <button
        onClick={() => Navigate(-1)}
        className='btn btn-secondary btn-sm'
        style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}
      >
        ← Back
      </button>
            <Row>
                <Col>
                  <img src="/images/Bellagio-Hotel-Casino-Las-Vegas.webp"  alt="Hotel Frame" className='roomimg'/>
                </Col>
                <Col>
                <Row>
                <Col>
                <h1>Super Deluxe Room</h1>
                <p>It includes  1 Queen size bed,private Kitchen,bathroom and  some living spaces.</p>
                <p>Offers light breakfast coffee or tea and rolls with jam.</p>
                <Row>
                    <Col>
                    <p>SeaView</p>
                    </Col>
                    <Col>
                     <p>Sun light in the mornings</p>      
                    </Col>
                </Row>
                </Col>
                </Row>
                <Row>
                <Col>
                <h1>Bed Type</h1>
                <p>Queen Size Bed Comfy fit for 2 people able to spread out.</p>
                </Col>
                </Row>
              
                <Row>
                      <Col>
                <h1>Room Amenities</h1>
                
                  <Row>
                    <Col>
                    <p>Shower</p>
                    </Col>
                    <Col>
                     <p>Concierge</p>      
                    </Col>
                </Row>
                   <Row>
                    <Col>
                    <p>Safe</p>
                    </Col>
                    <Col>
                     <p>Luggage</p>      
                    </Col>
                </Row>
                <Row>
                    <Col>
                     <p>24/7 Service</p>
                    </Col>
                     <Col>
                     <p>TV</p>
                    </Col>
                </Row>
                </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>CANCELLATION RULES</h1>
                    <p>Free Cancellation until ariving before 2days</p>
                    <p>According to time at destionation  ariving before 2 days % money back</p>
                    <p>Ariving day  No refund</p>
                    </Col>
                </Row>
              
                <button type="submit" style={{margin:"10px 100px"}}>Submit</button>
                </Col>
            </Row>

        </div>
    );
}