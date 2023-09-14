import styles from "./Feedback.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setSubmitMessage("Thank you for your feedback!");
      } else {
        setSubmitMessage("Something has gone wrong, please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.feedback}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <p className={styles.formTitle}>Please leave your feedback here!</p>

        <div className={styles.inputContainer}>
          <label htmlFor="name">Name*</label>
          <input
            placeholder="Joseph Tan Ah Kow"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="feedback">Feedback*</label>
          <textarea
            placeholder="Hi, the menu for ABC Chicken Rice is out of date."
            id="feedback"
            rows={4}
            {...register("feedback", { required: true })}
          />
        </div>
        <p className={styles.formSubtitle}>
          Please leave your email or Telegram handle if you'd like to be
          contacted.
        </p>

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
          <label htmlFor="telegramHandle">Telegram</label>
          <input
            placeholder="@josepthtaw"
            type="text"
            id="telegramHandle"
            {...register("telegramHandle")}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
        <p className={styles.formSubtitle}>{submitMessage}</p>
      </form>
    </div>
  );
};

export default Feedback;
