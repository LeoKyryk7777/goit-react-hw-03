import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    const updatedFeedback = {
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    };
    setFeedback(updatedFeedback);
    localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
  };

  const resetFeedback = () => {
    const deleteFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(deleteFeedback);
    localStorage.setItem("feedback", JSON.stringify(deleteFeedback));
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
