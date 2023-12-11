import React from "react";
import ReactDOM from "react-dom";
import FeedbackForm from "../components/FeedbackForm";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('feedback-form');
  ReactDOM.render(<FeedbackForm />, container);
});
