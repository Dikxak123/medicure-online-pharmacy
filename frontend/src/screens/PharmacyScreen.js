import axios from "axios";
import { useState, useEffect } from "react";

import { Table } from "react-bootstrap";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

console.log(userInfo);

const PharmacyScreen = () => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const getPharmacies = async () => {
      const res = await axios.get("/api/pharmacy/getall", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setPharmacies(res.data);
    };

    getPharmacies();
  }, []);

  return (
    <div className="row">
      <h1>Listed Pharmacies</h1>
      <div className="col-12">
        <Table striped hover bordered responsive className="table-sm">
          <thead>
            <tr>
              <th>Pharmacy Name</th>
              <th>Pharmacy Address</th>
              <th>Pharmacy Phone</th>
              <th>Pharmacy Email</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map(pharmacy => (
              <tr>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.address}</td>
                <td>{pharmacy.phoneNo}</td>
                <td>{pharmacy.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PharmacyScreen;
