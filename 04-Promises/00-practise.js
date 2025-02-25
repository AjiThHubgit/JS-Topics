// const promise = fetch('https://jsonplaceholder.typicode.com/sdsdsd');
// console.log(promise);

// When you call fetch() with an incorrect URL (like https://jsonplaceholder.typicode.com/sdsdsd), the fetch() function still returns a Promise that gets fulfilled, not rejected. Here’s why:

// 1. fetch() Always Resolves on HTTP Response
// Unlike other Promise-based functions, fetch() only rejects on network errors (e.g., no internet connection, DNS failure, CORS issues).
// If the request reaches the server but the response is an error (like 404 Not Found), fetch() does not reject.
// Instead, it resolves to a Response object with ok: false and the HTTP status code (like 404).

// const promise = fetch('https://jsonplaceholder.typicode.com/userssdsd');
// promise.then(res => res.json())
// .then(data => console.log('inside the data',data))
// .catch(err => console.log(err))


// const promise = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => {
//     if (!res.ok) {
//       throw new Error(`HTTP Error! Status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then(data => console.log('Inside the data:', data))
//   .catch(err => console.log('Fetch error:', err));


//   Promise Chaining

// Simulating a student list API with a Promise
function getStudents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Ajith", courseId: 101 },
          { id: 2, name: "Rahul", courseId: 102 },
          { id: 3, name: "Sneha", courseId: 103 }
        ]);
      }, 1000);
    });
  }
  
  // Simulating fetching student details
  function getStudentDetails(studentId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const students = {
          1: { id: 1, name: "Ajith", age: 22, courseId: 101 },
          2: { id: 2, name: "Rahul", age: 21, courseId: 102 },
          3: { id: 3, name: "Sneha", age: 23, courseId: 103 }
        };
        students[studentId] ? resolve(students[studentId]) : reject("Student not found!");
      }, 1000);
    });
  }
  
  // Simulating fetching course details
  function getCourseDetails(courseId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const courses = {
          101: "React Development",
          102: "Angular Mastery",
          103: "Node.js Backend"
        };
        resolve({ courseId, courseName: courses[courseId] });
      }, 1000);
    });
  }
  
  // Using promise chaining
  getStudents()
    .then((students) => {
      console.log("Student List:", students);
      return getStudentDetails(students[0].id); // Fetching details of the first student
    })
    .then((studentDetails) => {
      console.log("Student Details:", studentDetails);
      return getCourseDetails(studentDetails.courseId); // Fetching course details
    })
    .then((course) => {
      console.log("Course Details:", course);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
