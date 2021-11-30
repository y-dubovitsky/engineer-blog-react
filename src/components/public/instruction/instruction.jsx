import styles from './instruction.module.css';

const Instruction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.icon}><i class="fas fa-user-circle"></i></div>
        <div className={styles.info}>
          <h3>Register your account</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.icon}><i class="fa fa-file" aria-hidden="true"></i></div>
        <div className={styles.info}>
          <h3>Construct your resume</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.icon}><i class="fas fa-link"></i></div>
        <div className={styles.info}>
          <h3>Send link to hh</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  )
}

export default Instruction;