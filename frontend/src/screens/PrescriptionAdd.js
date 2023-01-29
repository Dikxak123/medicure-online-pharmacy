import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const userData = JSON.parse(localStorage.getItem("userInfo"));

const PrescriptionAdd = () => {
  const history = useHistory();

  const [issuedDate, setIssuedDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [dob, setDob] = useState("");
  const [clinicianName, setClinicianName] = useState("");
  const [clinicianAddress, setClinicianAddress] = useState("");
  const [drugName, setDrugName] = useState("");
  const [prescribedQuantity, setPrescribedQuantity] = useState("");

  const submitHandler = async e => {
    e.preventDefault();

    const data = {
      issuedDate,
      patientName,
      patientAddress,
      dob,
      clinicianName,
      clinicianAddress,
      drugName,
      prescribedQuantity: +prescribedQuantity,
    };

    const res = await axios.post("/api/prescription", data, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });

    history.push("/prescription");
  };

  return (
    <FormContainer>
      <h1>Add Prescription</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="issuedDate" className="mb-3">
          <Form.Label>Issued Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter issued date"
            value={issuedDate}
            onChange={e => setIssuedDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="patientName" className="mb-3">
          <Form.Label>Patient name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient name"
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="patientAddress" className="mb-3">
          <Form.Label>Patient address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient address"
            value={patientAddress}
            onChange={e => setPatientAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="dob" className="mb-3">
          <Form.Label>Patient date of birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter patient date of birth"
            value={dob}
            onChange={e => setDob(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="clinicianName" className="mb-3">
          <Form.Label>Clinician name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter clinician name"
            value={clinicianName}
            onChange={e => setClinicianName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="clinicianAddress" className="mb-3">
          <Form.Label>Clinician address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter clinician address"
            value={clinicianAddress}
            onChange={e => setClinicianAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="drugName" className="mb-3">
          <Form.Label>Drug name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter drug name"
            value={drugName}
            onChange={e => setDrugName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="prescribedQuantity" className="mb-3">
          <Form.Label>Prescribed quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter prescribed quantity"
            value={prescribedQuantity}
            onChange={e => setPrescribedQuantity(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Add Prescription
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PrescriptionAdd;
