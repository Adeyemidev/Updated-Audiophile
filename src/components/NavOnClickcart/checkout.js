import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Checkout = () => {


  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Link>Go Back</Link> 

      <div className='bg-red-20 border'>
        <h1>CHECKOUT</h1>
        <span>Billing Details</span>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label> <br/>
            <input
              style={{ width: '300px', height: '30px' }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Alexei Ward'
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label> <br/>
            <input
              style={{ width: '300px', height: '30px' }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='alexei@mail.com'
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label> <br/>
            <input
              style={{ width: '300px', height: '30px' }}
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='+1 202-555-0136'
            />
          </div>
          <div>
            <label htmlFor="address">Your Address</label> <br/>
            <input
              style={{ width: '300px', height: '30px' }}
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder='1137 Williams Avenue'
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
