import styles from "./Feedback.module.css";
import { useForm } from "react-hook-form";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.feedback}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p className={styles.formTitle}>Leave your feedback here!</p>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Joseph Tan Ah Kow"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            placeholder="josepthtaw@gmail.com"
            type="text"
            id="email"
            {...register("email", { pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="telegram">Telegram</label>
          <input
            placeholder="@josepthtaw"
            type="text"
            id="telegram"
            {...register("telegram")}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="feedback">Feedback</label>
          <textarea
            placeholder="Can you please update the menu from ABC Chicken Rice to show the latest price?"
            id="feedback"
            rows={4}
            {...register("feedback", { required: true })}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
