// Name : Drasti Parikh
// Student Id : 101419828


import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        agreeTerms: false,
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Data Entry Form</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="email-name-group">
                        <div style={{ flex: 1 }}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="full-width">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="1234 Main St"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="full-width">
                        <label>Address 2</label>
                        <input
                            type="text"
                            name="address2"
                            placeholder="Apartment, studio, or floor"
                            value={formData.address2}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="city-province-group">
                        <div style={{ flex: 1 }}>
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Province</label>
                            <select
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                            >
                                  <option value="">Choose...</option>
                                <option value="Alberta">Alberta</option>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Saskatchewan">Saskatchewan</option>
                            </select>
                        </div>
                        <div style={{ flex: 1 }}>
                            <label>Postal Code</label>
                            <input
                                type="text"
                                name="postalCode"
                                placeholder="Postal Code"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                        />
                        <label> Agree Terms & Condition?</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {submittedData && (
                <div className="submitted-data">

                    <table className="data-table">
                        <tbody>
                            <tr>
                                <td className="green-text">Email:</td>
                                <td>{submittedData.email}</td>
                            </tr>
                            <tr>
                                <td className="green-text">Full Name:</td>
                                <td>{submittedData.fullName}</td>
                            </tr>
                            <tr>
                                <td className="green-text">Address:</td>
                                <td>{submittedData.address}</td>
                            </tr>
                            <tr>
                                <td className="green-text">Address 2:</td>
                                <td>{submittedData.address2}</td>
                            </tr>
                            <tr>
                                <td className="green-text">City:</td>
                                <td>{submittedData.city}</td>
                            </tr>
                            <tr>
                                <td className="green-text">Province:</td>
                                <td>{submittedData.province}</td>
                            </tr>
                            <tr>
                                <td className="green-text">Postal Code:</td>
                                <td>{submittedData.postalCode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default App;
