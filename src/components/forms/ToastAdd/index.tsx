import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';



function ToastAdd() {

  return (

    <>
      <Alert className="alert-danger m-3">
        This is an alert—
        Data sending error
      </Alert>

    </>

  );
}

export { ToastAdd }