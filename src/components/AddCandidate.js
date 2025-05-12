import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCandidate } from "../redux/candidateSlice";

const AddCandidate = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    appliedFor: "",
    skills: [""],
    photo: null,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...form.skills];
    newSkills[index] = value;
    setForm({ ...form, skills: newSkills });
  };

  const addSkill = () => {
    setForm({ ...form, skills: [...form.skills, ""] });
  };

  const removeSkill = (index) => {
    setForm({ ...form, skills: form.skills.filter((_, i) => i !== index) });
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch("https://api.imgbb.com/1/upload?key=8a8eb84c53dcb18712721f6a23e4c148", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.appliedFor || form.skills.includes("")) {
      alert("Please fill in all fields.");
      return;
    }
    const imageUrl = form.photo ? await uploadImage(form.photo) : "";
    dispatch(addCandidate({ ...form, photo: imageUrl }));
    alert("Candidate added successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl">Add New Candidate</h2>
      <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="border p-2" />
        <select name="appliedFor" value={form.appliedFor} onChange={handleChange} className="border p-2">
          <option value="">Select Position</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Data Scientist</option>
        </select>
        {form.skills.map((skill, index) => (
          <div key={index} className="flex space-x-2">
            <input value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} placeholder="Skill" className="border p-2" />
            <button type="button" onClick={() => removeSkill(index)} className="bg-red-500 text-white px-2">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSkill} className="bg-blue-500 text-white px-2">Add More Skill</button>
        <input type="file" onChange={(e) => setForm({ ...form, photo: e.target.files[0] })} />
        <button type="submit" className="bg-green-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default AddCandidate;
