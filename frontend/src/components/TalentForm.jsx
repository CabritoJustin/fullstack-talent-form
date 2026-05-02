import "./TalentForm.css";
import { useState } from "react";

function TalentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [talent, setTalent] = useState("Singing");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      age,
      email,
      talent
    };

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log("Response from backend:", result);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="page">
      <img src="/pup-logo.png" alt="PUP Logo" className="pup-logo" />

      <div className="form-card">
        <h1>Talent Form for PUP Binan</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Age</label>
          <input
            type="number"
            placeholder="enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Talent</label>
          <select
            value={talent}
            onChange={(e) => setTalent(e.target.value)}
          >
            <option>Singing</option>
            <option>Dancing</option>
            <option>Drawing</option>
            <option>Acting</option>
            <option>Playing Instrument</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TalentForm;