import React from "react";
import { Table } from "react-bootstrap";

const Mail = () => {
  return (
    <div className="py-4">
      <Table striped hover bg="dark">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jagadish</td>
            <td>Dexter Company</td>
            <td>Chennai</td>
            <td>jagadish3452@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Mail;
