import React from "react";
import { Image } from "react-bootstrap";

const UserProfile = () => (
  <div className="d-flex align-items-center">
    <Image src="https://randomuser.me/api/portraits/men/32.jpg" roundedCircle width={40} />
    <span className="ms-2 fw-bold">User</span>
  </div>
);

export default UserProfile; 