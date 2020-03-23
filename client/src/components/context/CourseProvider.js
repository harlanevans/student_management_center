// import React, { useState, useEffect, useContext} from "react";
// import axios from 'axios';



// // ! THIS NEEDS TO BE CHANGED TO FUNCTIONAL/HOOKS
// // Set Up The Initial Context
// const CourseContext = React.createContext();

// // Create an exportable consumer that can be injected into components
// export const CourseConsumer = CourseContext.Consumer;

// // Create the provider using a traditional React.Component class
// class CourseProvider extends React.Component {
// //  const [courses, setCourses ] = useState([])

//   state = { courses: []}

//   componentDidMount = () => {
//     axios.get('/api/courses')
//     .then(res => {
//       this.setState({courses: res.data})
//     })
//   }
// //  useEffect(() => {
// //    axios.get('/api/courses')
// //    .then(res => {
// //      setCourses(res.data)
// //    })
// //  }, [])
//  render() {

//    return (
//      <CourseContext.Provider value={this.state.courses}>
//         {this.props.children}
//       </CourseContext.Provider>
//     )
//   }
// }

// export default CourseProvider;
