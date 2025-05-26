import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const upcomingAppointments = [
  {
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr Cameron Williamson',
    icon: '🦷',
    color: '#3B82F6'
  },
  {
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr Kevin Djores',
    icon: '💪',
    color: 'var(--physio-orange)'
  }
];

const todaySchedule = [
  {
    title: 'Health checkup complete',
    time: '11:00 AM',
    icon: '✅',
    color: 'var(--selected-blue)'
  },
  {
    title: 'Ophthalmologist',
    time: '14:00 PM',
    icon: '👁️',
    color: 'var(--slot-secondary)'
  }
];

const saturdaySchedule = [
  {
    title: 'Cardiologist',
    time: '12:00 AM',
    icon: '❤️',
    color: 'var(--lungs-red)'
  },
  {
    title: 'Neurologist',
    time: '16:00 PM',
    icon: '🧠',
    color: 'var(--dentist-indigo)'
  }
];

const Schedule = () => (
  <>
    {/* Upcoming Appointments */}
    <Row className="g-3 mb-4">
      {upcomingAppointments.map((appointment, index) => (
        <Col md={6} key={index}>
          <Card style={{ background: appointment.color, color: 'black', borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
            <Card.Body style={{ position: 'relative', zIndex: 2 }}>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span style={{ fontSize: 28, opacity: 0.8 }}>{appointment.icon}</span>
                <span style={{ fontSize: 14, opacity: 0.9 }}>{appointment.time}</span>
              </div>
              <h5 className="fw-semibold mb-1">{appointment.type}</h5>
              <div style={{ fontSize: 15, opacity: 0.9 }}>{appointment.doctor}</div>
            </Card.Body>
            <span style={{ position: 'absolute', right: -20, bottom: -20, fontSize: 90, opacity: 0.08 }}>{appointment.icon}</span>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Schedule Sections */}
    <Card className="mb-3" style={{ borderRadius: 16 }}>
      <Card.Body>
        <h5 className="fw-bold mb-4" style={{ color: 'var(--text-primary)' }}>The Upcoming Schedule</h5>
        <Row className="mb-4">
          <Col xs={12}>
            <h6 className="fw-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>On Thursday</h6>
            <Row className="g-3">
              {todaySchedule.map((item, idx) => (
                <Col md={6} key={idx}>
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'var(--slot-default)' }}>
                    <span style={{ fontSize: 22, background: item.color, borderRadius: 8, padding: 8, marginRight: 12 }}>{item.icon}</span>
                    <div>
                      <div className="fw-medium text-dark" style={{ fontSize: 15 }}>{item.title}</div>
                      <div className="text-secondary" style={{ fontSize: 13 }}>{item.time}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h6 className="fw-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>On Saturday</h6>
            <Row className="g-3">
              {saturdaySchedule.map((item, idx) => (
                <Col md={6} key={idx}>
                  <div className="d-flex align-items-center p-3 rounded-3" style={{ background: 'var(--slot-default)' }}>
                    <span style={{ fontSize: 22, background: item.color, borderRadius: 8, padding: 8, marginRight: 12 }}>{item.icon}</span>
                    <div>
                      <div className="fw-medium text-dark" style={{ fontSize: 15 }}>{item.title}</div>
                      <div className="text-secondary" style={{ fontSize: 13 }}>{item.time}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </>
);

export default Schedule; 