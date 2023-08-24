import { useForm, SubmitHandler } from "react-hook-form"
import React from "react";
import styles from './FormStyles.module.scss';

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
  }
  
  interface IFormInput {
    firstName: string
    mailInput: string
    gender: GenderEnum
  }

 function Form() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  
    return (
        <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>Твоё имя, красавец</label>
        <input className={styles.nameInput} {...register("firstName")} />
        <label className={styles.label}>Почта</label>
        <input className={styles.mailInput} {...register("mailInput")} />
        <label>Pretty Poison это?</label>
        <select {...register("gender")}>
          <option value="Сам">Гавно</option>
          <option value="Доставка">Залупа</option>
          <option value="Не знаю">Отстой</option>
        </select>
        <input type="submit" />
      </form>
      </div>
    )
  }

export default Form;