import { useState } from "react";
import "./App.css";
import Confirmed from "./components/Confirmed";

import FormPage1 from "./components/FormPage1";
import FormPage2 from "./components/FormPage2";
import FormPage3 from "./components/FormPage3";
import FormPage4 from "./components/FormPage4";
import Header from "./components/Header";

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	const [confirmContract, setConfirmContract] = useState(false);

	const goBackBtn = () => {
		if (pageNumber > 1) {
			setPageNumber((prev) => prev - 1);
		}
		return;
	};

	return (
		<div className="relative bg-Magnolia min-h-screen  font-Ubuntu flex flex-col justify-start md:justify-center items-center md:p-4">
			<div
				className={`md:relative md:grid md:grid-cols-[.7fr,1fr]   md:grid-rows-[32rem]  md:bg-white  md:rounded-xl ${
					pageNumber === 4 && confirmContract && "md:-translate-y-6"
				}`}>
				<Header pageNumber={pageNumber} />
				<div className="md:translate-y-[4rem] mb-16">
					{pageNumber === 1 && <FormPage1 setPage={setPageNumber} />}
					{pageNumber === 2 && <FormPage2 setPage={setPageNumber} />}
					{pageNumber === 3 && <FormPage3 setPage={setPageNumber} />}
					{pageNumber === 4 && !confirmContract && <FormPage4 setPage={setPageNumber} />}
					{pageNumber === 4 && confirmContract && <Confirmed />}
				</div>
			</div>
			{!confirmContract && (
				<div className="bg-white -inset-x-0 bottom-0 p-4 absolute md:relative flex justify-between md:justify-between md:max-w-sm md:w-full md:-translate-y-[6rem] md:translate-x-[7rem] md:p-0 ">
					<button
						className={` text-CoolGray rounded-md hover:text-MarineBlue ${
							pageNumber === 1 && "hidden"
						}`}
						onClick={goBackBtn}>
						Go Back
					</button>
					<button
						className={`bg-MarineBlue p-3 ml-auto text-white rounded-md ${
							pageNumber === 4 ? "hidden" : "block"
						}`}
						form={`page${pageNumber}`}
						type="submit">
						Next Step
					</button>
					<button
						className={` p-3 text-white rounded-md bg-PurplishBlue ${
							pageNumber !== 4 ? "hidden" : "block"
						}`}
						onClick={() => setConfirmContract(true)}>
						Confirm
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
