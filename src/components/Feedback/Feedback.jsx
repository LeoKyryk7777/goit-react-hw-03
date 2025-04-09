import css from "./Feedback.module.css";

export default function Feedback({ feedback, total, positive }) {
  return (
    <div>
      <p className={css.item}>Good:{feedback.good}</p>
      <p className={css.item}>Neutral:{feedback.neutral}</p>
      <p className={css.item}>Bad:{feedback.bad}</p>
      <p className={css.item}>Total:{total}</p>
      <p className={css.item}>Positive:{positive}%</p>
    </div>
  );
}
