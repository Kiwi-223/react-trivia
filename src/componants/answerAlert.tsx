import Alert from "react-bootstrap/Alert";

interface Props {
  choice: boolean;
  answer: string;
}

const AnswerAlert = ({ choice, answer }: Props) => {
  if (choice === true) {
    return (
      <Alert variant="success">
        <Alert.Heading>Correct!</Alert.Heading>
      </Alert>
    );
  } else {
    return (
      <Alert variant="danger">
        <Alert.Heading>Incorrect.</Alert.Heading>
        <p> The correct answer is {answer}</p>
      </Alert>
    );
  }
};

export default AnswerAlert;
