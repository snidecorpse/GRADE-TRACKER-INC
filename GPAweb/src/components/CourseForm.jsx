import { useState } from 'react';

const CourseForm = ({ onAddCourse }) => {
  const [course, setCourse] = useState({ name: '', grade: '', credits: '' });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCourse(course);
    setCourse({ name: '', grade: '', credits: '' }); // clearing
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded shadow-md">
      <div className="mb-2">
        <label>Course Name</label>
        <input
          name="name"
          value={course.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label>Grade</label>
        <input
          name="grade"
          type="number"
          value={course.grade}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label>Credits</label>
        <input
          name="credits"
          type="number"
          value={course.credits}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Course
      </button>
    </form>
  );
};

export default CourseForm;
