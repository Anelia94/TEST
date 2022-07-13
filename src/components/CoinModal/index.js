import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import useApiCoin from '../../hooks/useApiCoin';

function CoinModal({ show, id, handleClose }) {
    const [coin] = useApiCoin(id);

    const coinInfo = (
        <>
            {coin?.hashing_algorithm &&
                <p>
                    <strong> Hashing algorithm: </strong> {coin.hashing_algorithm}
                </p>}
            {coin?.genesis_date &&
                <p>
                    <strong> Genesis Date: </strong> {coin.genesis_date}
                </p>}
            {coin?.links &&
                <p>
                    <strong> Homepage: </strong> {coin.links.homepage}
                </p>}
            {coin?.market_data &&
                <p>
                    <strong> Market cap in Euro: </strong> {coin.market_data.current_price.eur}
                </p>}
            {coin?.description &&
                <p>
                    <strong> Description: </strong>{coin.description.en}
                </p>}
        </>
    );

    return (
        <Modal show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {coin.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {coinInfo}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>)
        ;
}

export default CoinModal;