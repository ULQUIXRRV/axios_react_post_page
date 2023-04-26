import React from "react";
import classes from "./MyModal.module.css"

const MyModal = ({children, visible, setVisilbe}) => {

	const rootClasses = [classes.MyModal]
	if(visible) {
		rootClasses.push(classes.active);
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisilbe(false)}>
			<div className={classes.MyModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal