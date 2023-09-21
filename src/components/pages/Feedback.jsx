import styles from "./Feedback.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
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
        <p className={styles.formTitle}>Leave your feedback here!</p>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name*</label>
          <input
            placeholder="Joseph Tan Chee Guan"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>
        {isSubmitted && errors.name && (
          <p className={styles.error}>Name is required.</p>
        )}

        <div className={styles.inputContainer}>
          <label htmlFor="feedback">Feedback*</label>
          <textarea
            placeholder="Can you please update the menu from ABC Chicken Rice to show the latest price?"
            id="feedback"
            rows={4}
            {...register("feedback", { required: true })}
          />
        </div>
        {isSubmitted && errors.feedback && (
          <p className={styles.error}>Feedback is required.</p>
        )}

        <p className={styles.contactText}>
          If you'd like to be contacted regarding your feedback, please leave
          your email and/or Telegram handle below as well.
        </p>

        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            placeholder="josepthtcg@gmail.com"
            type="text"
            id="email"
            {...register("email", { pattern: /^\S+@\S+$/i })}
          />
        </div>
        {isSubmitted && errors.email && (
          <p className={styles.error}>Please provide a valid email.</p>
        )}

        <div className={styles.inputContainer}>
          <label htmlFor="telegramHandle">Telegram</label>
          <input
            placeholder="@josepthtcg"
            type="text"
            id="telegramHandle"
            {...register("telegramHandle")}
          />
        </div>

        <button
          type="submit"
          disabled={!isDirty || (isSubmitted && Object.keys(errors).length)}
          className={styles.submit}
        >
          Submit
        </button>
        <p className={styles.formSubtitle}>{submitMessage}</p>
      </form>
    </div>
  );
};

export default Feedback;
