import styles from './search.module.css';

const Search = () => {

  return (
    <div className={styles.container}>
      <input type="text" name="job_title" placeholder="job title" id=""/>
      <input type="text" name="skills" placeholder="skills" id=""/>
      <input type="text" name="city" placeholder="city" id=""/>
      <input type="submit" value="Find Resume"/>
      {/* TODO Добавить популярные тэги */}
    </div>
  )
};

export default Search;