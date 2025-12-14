import { useState } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
            /><br />
            <label htmlFor="email">Email</label><br />
            <input
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
            /><br />
            <label htmlFor="password">Password</label><br />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            /><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;