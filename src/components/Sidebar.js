import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-white sidebar">
    <div className="sidebar-sticky">
      <h4 className="text-primary mt-3 ms-3">Health<span className="fw-bold">care.</span></h4>
      <ListGroup variant="flush" className="mt-4">
        <ListGroup.Item action active>Dashboard</ListGroup.Item>
        <ListGroup.Item action>History</ListGroup.Item>
        <ListGroup.Item action>Calendar</ListGroup.Item>
        <ListGroup.Item action>Appointments</ListGroup.Item>
        <ListGroup.Item action>Statistics</ListGroup.Item>
        <ListGroup.Item action>Chat</ListGroup.Item>
        <ListGroup.Item action>Support</ListGroup.Item>
        <ListGroup.Item action>Setting</ListGroup.Item>
      </ListGroup>
    </div>
  </nav>
);

export default Sidebar; 