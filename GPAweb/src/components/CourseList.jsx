const CourseList = ({ courses }) => (
    <div className="mt-4">
      {courses.map((course, index) => (
        <div key={index} className="p-2 border-b">
          <p><strong>{course.name}</strong></p>
          <p>Grade: {course.grade}, Credits: {course.credits}</p>
        </div>
      ))}
    </div>
  );
  
  export default CourseList;