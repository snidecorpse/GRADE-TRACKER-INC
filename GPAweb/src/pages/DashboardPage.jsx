import { useState } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

const DashboardPage = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const calculateGPA = () => {
    const totalPoints = courses.reduce((sum, c) => sum + c.grade * c.credits, 0);
    const totalCredits = courses.reduce((sum, c) => sum + parseFloat(c.credits), 0);
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <CourseForm onAddCourse={addCourse} />
      <CourseList courses={courses} />
      <div className="mt-4">
        <h2 className="text-xl">Current GPA: {calculateGPA()}</h2>
      </div>
    </div>
  );
};

export default DashboardPage;