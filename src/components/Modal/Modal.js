import { Fragment } from 'react';
import classes from './Modal.module.css';

const Modal = ({show, handleModalDismiss, children}) => {


  return (
      <Fragment>
          {show ? <div className={classes.Backdrop} onClick={handleModalDismiss}></div> : null}
          <div
              className={classes.Modal}
              style={{
                  transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: show ? '1' : '0'
              }}>
              {children}
          </div>
      </Fragment>
  )
}

export default Modal;