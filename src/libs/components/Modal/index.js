import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
	& .backdrop {
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	& .back-drop.active {
		overflow: hidden;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: #555;
		opacity: 0.6;
		transition: all 0.3s ease-in-out;
	}

	& .modal {
		opacity: 0;
		top: -100%;
		display: none;
		transition: all 0.3s ease-in-out;
	}

	& .modal.active {
		background: white;
		padding: 30px;
		max-width: 800px;
		border-radius: 5px;
		position: absolute;
		display: block;
		transition: all 0.3s ease-in-out;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		opacity: 1;
	}

	& .display-area {
		overflow-y: scroll;
		overflow-x: hidden;
		word-wrap: break-word;
		height: 500px;
	}

	@media (max-width: 767px) {
		& .modal.active {
			width: 95%;
			padding-left: 0;
			padding-right: 0;
			padding-top: 0;
		}

		& .display-area {
			height: 530px;
		}

		& .cancel-button {
			padding: 0;
		}
	}
`;

function Modal({ width, height, setModalOn, on, backdropZ, modalZ, children }) {
	// modalZ is z index of modal
	//backdropZ is z index of backdrop
	//children is things to display inside the modal
	//width: modal width > 768px;
	//height: modal height
	//setModalOn state variable to pass into this component so that it can set the modal to Off when user click cancel
	//on: state variable to see if the modal if on or off

	const [backdropClasses, setBackdropClasses] = useState(["back-drop"]);
	const [modalClasses, setModalClasses] = useState(["modal"]);

	const onClickHandler = () => {
		setBackdropClasses(["back-drop"]);
		setModalClasses(["modal"]);
		setModalOn(false);
	};

	useEffect(() => {
		if (on && backdropClasses.length < 2) {
			setBackdropClasses(["back-drop", "active"]);
			setModalClasses(["modal", "active"]);
		}
	}, [on]);

	return (
		<Div>
			{/* Backdrop */}
			<div className='absolute'>
				<div
					className={backdropClasses.join(" ")}
					style={{ zIndex: `${backdropZ}` }}></div>
			</div>

			<div
				className={modalClasses.join(" ")}
				style={{ zIndex: `${modalZ}`, width: `${width}`, height: `${height}` }}>
				<div className='display-area'>{children}</div>
				<div
					style={{ positon: "absolute", bottom: "0", left: "0" }}
					className='cancel-button flex w-full justify-center'>
					<button
						onClick={onClickHandler}
						className='border w-3/5 text-white bg-blue-800 rounded px-3 py-2 font-bold m-3'>
						Cancel
					</button>
				</div>
			</div>
		</Div>
	);
}

export default Modal;
