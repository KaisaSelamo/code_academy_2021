import React from 'react';
import PropTypes from "prop-types";
import { Button, Col } from "reactstrap";
import { FaTimes } from "react-icons/fa";

export default function Car(props) {
    const {make, model, onDelete} =props;
    return (
        <Col>
            <div make={make} className="car rounded-circle text-center">
                {model}
            </div>
            <Button 
                outline color="danger" 
                className="car-button-delete"
                onClick={() => onDelete()}
            >
                <FaTimes />
            </Button>
        </Col>
    );
}

// proptypesien määrittäminen
Car.propTypes = {
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
};

//default propseja käytetään silloin, kun arvoa ei ole annettu
