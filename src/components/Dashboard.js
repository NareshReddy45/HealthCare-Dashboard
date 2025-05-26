import React, { useState } from "react";
import { Card, ProgressBar, Button, Row, Col } from "react-bootstrap";
import Activity from "./Activity";

const healthData = [
  { name: "Lungs", status: 60, color: "lungs-red", date: "26 Oct 2021" },
  { name: "Teeth", status: 90, color: "teeth-orange", date: "26 Oct 2021" },
  { name: "Bone", status: 40, color: "bone-gray", date: "26 Oct 2021" },
];

const colorMap = {
  "lungs-red": "#EF4444",
  "teeth-orange": "#F97316",
  "bone-gray": "#6B7280"
};

const Dashboard = () => {
  const [selected, setSelected] = useState("Heart");

  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
              <div style={{ position: 'relative', width: 220, height: 500, background: 'var(--body-gradient)', borderRadius: 16 }}>
                <img src="https://img.freepik.com/free-photo/human-body-frontal_1048-5345.jpg?semt=ais_hybrid&w=740" alt="body" style={{ width: 220, height: 500, objectFit: 'contain', filter: 'brightness(1.08) saturate(0.85)' }} />
                {/* Heart Button - right of heart */}
                <Button
                  variant="outline-primary"
                  size="sm"
                  style={{ position: 'absolute', top: '34%', left: '90%', transform: 'translate(-50%, -50%)', zIndex: 2, fontWeight: 500, background: 'rgba(255,255,255,0.85)' }}
                  onClick={() => setSelected("Heart")}
                >
                  Healthy Heart
                </Button>
                {/* Leg Button - left of left knee */}
                <Button
                  variant="outline-info"
                  size="sm"
                  style={{ position: 'absolute', top: '78%', left: '10%', transform: 'translate(-50%, -50%)', zIndex: 2, fontWeight: 500, background: 'rgba(255,255,255,0.85)' }}
                  onClick={() => setSelected("Leg")}
                >
                  Healthy Leg
                </Button>
              </div>
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center">
              {healthData.map((item) => (
                <Card key={item.name} className="mb-3" style={{ borderLeft: `6px solid ${colorMap[item.color]}` }}>
                  <Card.Body>
                    <Card.Title style={{ color: colorMap[item.color], fontWeight: 600 }}>{item.name}</Card.Title>
                    <Card.Text className="text-secondary">Date: {item.date}</Card.Text>
                    <ProgressBar now={item.status} variant="custom" label={`${item.status}%`} animated style={{ height: 12, background: '#F3F4F6' }} />
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Activity />
    </div>
  );
};

export default Dashboard; 