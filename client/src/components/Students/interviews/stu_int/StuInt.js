import React, { useEffect, useState } from "react";
import { Row, Button, SubTitle, ViewButton } from "../../../../styles/Global";
import { Link } from "react-router-dom";
import axios from "axios";
import Quests from "../qa/Quests";
import { StudentConsumer } from "../../../../providers/StudentProvider";
import { withRouter, Redirect } from "react-router-dom";
import AddAnswer from "../qa/AddAnswer";
import {
  QuestionCont,
  Answer,
  QuestionText,
  QType,
  QCard,
} from "../../../../styles/QStyle";

const StuInt = (props) => {
  const [interview, setInterview] = useState({});
  const [student, setStudent] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  // const [stuInt, setStuInt] = useState();
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [thereIsAnswer, setThereIsAnswer] = useState(false);
  
  useEffect(() => {
    // if (props.location.state.newInt) {
    //   props.student.getStudent(props.location.state.newInt.student_id);

    // }
    //! Need to change this so it doesn't only rely on direct link to this page to get
    //! these objects
    const {
      student,
      interview,
      questions,
      stu_int,
      answers,
    } = props.location.state;
    setStudent(student);
    setInterview(interview);
    setQuestions(questions);
    setAnswers(answers);

    
    // matchAnswers();
  }, [answers]);
  
  const addAnswer = (answer) => {
    setAnswers(answer, ...answers);
    props.student.getStuAnswers(answer.student_id);
    console.log(answers);
  };

  const editAnswer = (id, answer) => {
    debugger
    axios
      .put(`/api/students/${student.id}/answers/${id}`, { answer })
      .then((res) => {
        const newAnswers = answers.map((a) => {
          if (a.id === id) {
            return res.data;
          }
          return a;
        });
        setAnswers(newAnswers);
      });
  };

  const matchAnswers = () => {
    return props.location.state.questions.map((question) => {
      const answered = props.location.state.answers.map((answer) => {
        if (question.id === answer.question_id)
          // setThereIsAnswer(true)
          console.log(
            "q.id ->",
            question.id,
            " = ",
            "answer.quest_id",
            answer.question_id
          );
        return answer;
      });
      setQuestionAnswer(answered);
    });
  };

  const renderQuestions = () => {
    if (!questions) return null;
    return questions.map((question) => {
      return (
        <Quests
          key={question.id}
          question={{ ...question }}
          student={props.student}
          // stu_int={stuInt}
          addAnswer={addAnswer}
          answers={answers}
          editAnswer={editAnswer}
        />
      );
    });
  };

  const renderStudentThings = () => {
    if (!student) return null;
    return (
      <>
        <Row>
          <Link to={{ pathname: `/student/${student.id}` }}>
            <ViewButton>Back to {student.first_name}'s Page</ViewButton>
          </Link>
        </Row>
        <Row style={styles.centerRow}>
          <SubTitle>
            {student.first_name}'s {interview.name}
          </SubTitle>
        </Row>
      </>
    );
  };
  
  
  // if (!props.student.student) return (
    
  //   <Redirect to='/'/>
  
  //   )
  if (!student) return null;
  return (
    <div style={styles.container}>
      {renderStudentThings()}
      <div style={styles.qsCont}>{renderQuestions()}</div>
      <Row>
        <Link to={{pathname: `/student/${student.id}`}}>
        <Button>Finish Interivew</Button>
        </Link>
      </Row>
    </div>
  );
};

// export default StuInt;

export const ConnectedStuInt = (props) => {
  return (
    <StudentConsumer>
      {(student) => <StuInt {...props} student={student} />}
    </StudentConsumer>
  );
};

export default withRouter(ConnectedStuInt);

const styles = {
  container: {
    padding: "2em",
  },
  centerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1em 0em",
  },
  qsCont: {
    display: "flex",
    flexFlow: "row wrap",
    // justifyContent: "space-evenly",
    // width: "100%",
    width: "100%",
  },

  cont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
  },
  paddingLeft: {
    paddingLeft: ".5em",
  },
  rowPadding: {
    paddingBottom: ".5em",
  },
};
