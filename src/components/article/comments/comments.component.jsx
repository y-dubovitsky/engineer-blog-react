import styles from './comments.module.css';

const Comments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <img src="https://secure.gravatar.com/avatar/a1e1fa4e9559f47fe8abcb0f1df4357c?s=140&d=mm&r=g" alt="" srcset="" />
        </div>
        <div className={styles.author}>
          <div className={styles.name}>Matthey Flowers</div>
          <div className={styles.info}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti similique odit dicta, sapiente accusantium enim dolore voluptas reiciendis sequi alias saepe molestias debitis quam laboriosam incidunt vel nisi laudantium voluptatum?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments;

