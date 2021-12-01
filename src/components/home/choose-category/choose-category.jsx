import styles from './choose-category.module.css';

const ChooseCategory = (props) => {
  return (
    <div className={styles.container}>
      <button>Job Category</button>
      <h1>Choose Your Desire Category</h1>
      <hr/>
      <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, magnam?</h4>
      <div className={styles.box}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </div>
  )
}

export default ChooseCategory;