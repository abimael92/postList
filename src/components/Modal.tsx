import React, { ReactNode, MouseEventHandler } from 'react';
import classes from './Modal.module.css';

interface ModalProps {
	children: ReactNode;
	onClose: MouseEventHandler<HTMLDivElement>;
}

function Modal({ children, onClose }: ModalProps): JSX.Element {
	return (
		<>
			<div className={classes.backdrop} onClick={onClose} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
}

export default Modal;
