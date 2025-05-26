import React from "react";
import { Card } from "react-bootstrap";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const activityData = [3, 2, 4, 3, 5, 1, 2];

const Activity = () => (
  <Card>
    <Card.Body>
      <Card.Title>Activity</Card.Title>
      <div className="d-flex align-items-end" style={{ height: 80 }}>
        {activityData.map((val, idx) => (
          <div key={idx} className="text-center mx-2">
            <div style={{ height: val * 15, width: 10, background: "#0d6efd", borderRadius: 4, margin: "0 auto" }}></div>
            <small>{days[idx]}</small>
          </div>
        ))}
      </div>
      <div className="mt-2 text-muted">3 appointments this week</div>
    </Card.Body>
  </Card>
);

export default Activity; 