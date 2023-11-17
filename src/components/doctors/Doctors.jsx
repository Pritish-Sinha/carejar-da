import React from 'react';
import './doctors.css';
import { faker } from '@faker-js/faker';

const Doctors = ({ categories }) => {
  const doctorData = [
    { name: faker.person.fullName(), experience: '10 years', location: faker.location.city(), fees: `Rs. ${faker.number.int({ min: 100, max: 900 })}`, image: faker.image.avatar() },
    { name: faker.person.fullName(), experience: '5 years', location: faker.location.city(), fees: `Rs. ${faker.number.int({ min: 100, max: 800 })}`, image: faker.image.avatar() },
    { name: faker.person.fullName(), experience: '8 years', location: faker.location.city(), fees: `Rs. ${faker.number.int({ min: 100, max: 800 })}`, image: faker.image.avatar() },
  ];

  return (
    <div className="doctors-container">
      {doctorData.map((item, index) => (
        <div key={index} className="doctor-card">
          <div className="doctor-image-container">
            <img src={item.image} alt={item.name} className="doctor-image" />
          </div>
          <div className="doctor-info">
            <h3 className="doctor-name">{item.name}</h3>
            <p className="doctor-category">{categories}</p>
            <p className="doctor-description-exp">Experience: {item.experience}</p>
            <p className="doctor-description-l">Location: {item.location}</p>
            <p className="doctor-description"> {item.fees} Consultation fees at the clinic</p>
            <div className="abc">
              <span className="assuranced">
                <div><img src="https://res.cloudinary.com/vaibhavi/image/upload/v1695971439/icons8-thumbs-up-32_enzv8p.png" alt="" /></div>
                <div className="assur_t"><p>{faker.number.int({ min: 30, max: 100 })}%</p></div>
              </span>
              <span className="stories"><u>{faker.number.int({ min: 5, max: 70 })} Patient Stories</u></span>
            </div>
          </div>
          <div className="appointment-button-container">
            <div className="avail"><h5><h4>Available Today</h4></h5></div>
            <button className="appointment-button">Book Appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
