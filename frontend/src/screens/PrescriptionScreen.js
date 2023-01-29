import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "react-bootstrap";

const PrescriptionScreen = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getPrescription = async () => {
      const res = await axios.get("/api/prescription/myprescriptions");
      setPrescriptions(res.data);
      console.log(res.data);
    };

    getPrescription();
  }, []);
  return (
    <>
      <h1>Prescriptions</h1>
      <div className="row row-cols-3">
        {prescriptions.length &&
          prescriptions.map(prescription => {
            return (
              <div className="col">
                <Card className="p-3 rounded">
                  <p>
                    <strong>Date of issue:</strong> {prescription.issueDate}
                  </p>
                  <p>
                    <strong>Patient Name:</strong> {prescription.patientName}
                  </p>
                  <p>
                    <strong>Patient Address:</strong>{" "}
                    {prescription.patientAddress}
                  </p>
                  <p>
                    <strong>Date of birth:</strong> {prescription.dateOfBirth}
                  </p>
                  <p>
                    <strong>Clinician Name:</strong>{" "}
                    {prescription.clinicianName}
                  </p>
                  <p>
                    <strong>Clinician Address:</strong>{" "}
                    {prescription.clinicianAddress}
                  </p>
                  <p>
                    <strong>Drug Name:</strong> {prescription.drugName}
                  </p>
                  <p>
                    <strong>Quantity</strong> {prescription.prescribedQuantity}{" "}
                    tablets/day
                  </p>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PrescriptionScreen;
