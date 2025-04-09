import css from "./Options.module.css";

export default function Options({ updateFeedback, resetFeedback, total }) {
  return (
    <div className={css.buttons}>
      <button className={css.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")}>
        Neatural
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
