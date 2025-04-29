import React from 'react'
import styles from '../Styles/Container.module.css'

// Recieving chlidren via props.children or {children} from <Container> HTML Elements/components </Container>
const Container = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  );
}

export default Container