import { React, useState } from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import CoinModal from '../CoinModal'
import './CoinCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoinCard({ props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <MDBCard >
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src={props.image} alt='coin_image' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle>{props.name}</MDBCardTitle>
                            <MDBCardText>
                                Current Price: {props.current_price} <br/>
                                High 24 hour Price: {props.high_24h}<br/>
                                Low 24 hour Price: {props.low_24h}<br/>
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>{props.symbol}</small>
                            </MDBCardText>
                            <MDBBtn outline
                            onClick={handleShow}>View Details</MDBBtn>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            {
                show && <CoinModal
                    show={show}
                    id={props.id}
                    handleClose={handleClose}
                />}
        </>
    );

}

export default CoinCard;