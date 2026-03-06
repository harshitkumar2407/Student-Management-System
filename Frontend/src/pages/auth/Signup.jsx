import React from 'react'
import {useState} from 'react'


const Signup = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        role:"student"
    })
    const handleChange =(e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/register",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // const data = await response.json();
            const text = await response.text();
            console.log("RESPONSE:", text);
            
            

            if (response.ok) {
                alert("User registered successfully")
            }else{
                alert(text.message)
            }
            

        } catch (error) {
            console.error("Error: ",error);
        }

    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder= 'Username' />
                    <br />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                     />
                    <br />

                <input 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                    />
                    <br />
                
                <select name="role" onChange={handleChange}>
                    <option value="">Select role</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                <button type='submit'>Register</button>
            </form>
        </div>
  )
}

export default Signup