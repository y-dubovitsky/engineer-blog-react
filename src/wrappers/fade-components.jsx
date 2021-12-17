import Fade from 'react-reveal/Fade';

const FadeComponents = ({ children }) => {
  const fadedComponents = children.map(child => (
    <Fade>
      {child}
    </Fade>
  ));

  return fadedComponents;
}

export default FadeComponents;