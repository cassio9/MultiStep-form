import { useState } from "react";
import FormPage1 from "./components/FormPage1";
import HeroPattern from "./assets/images/bg-sidebar-mobile.svg";
import "./App.css";
import FormPage2 from "./components/FormPage2";

function App() {
	const [pageNumber, setPageNumber] = useState(2);

	return (
		<div className="bg-Magnolia min-h-screen max-h-fit font-Ubuntu flex flex-col justify-start items-center">
			<div>
				<div className=" h-[8.5rem] flex items-start justify-center ">
					<img
						src={HeroPattern}
						className="absolute w-full z-0 max-h-[30%] object-cover object-top"
						alt="Pattern"
					/>
					<div className="flex gap-3 translate-y-3  z-10">
						<div
							className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white ${
								pageNumber === 1 ? "bg-PastelBlue text-MarineBlue" : ""
							}`}>
							1
						</div>
						<div
							className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white ${
								pageNumber === 2 ? "bg-PastelBlue text-MarineBlue" : ""
							}`}>
							2
						</div>
						<div
							className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white ${
								pageNumber === 3 ? "bg-PastelBlue text-MarineBlue" : ""
							}`}>
							3
						</div>
						<div
							className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white ${
								pageNumber === 4 ? "bg-PastelBlue text-MarineBlue" : ""
							}`}>
							4
						</div>
					</div>
				</div>
				{pageNumber === 1 && (
					<div className="-translate-y-[2.3rem]  max-w-sm">
						<FormPage1 setPage={setPageNumber} />
					</div>
				)}
				{pageNumber === 2 && (
					<div className="-translate-y-[2.3rem]  max-w-sm">
						<FormPage2 setPage={setPageNumber} />
					</div>
				)}
				<div className="bg-white fixed -inset-x-0 bottom-0 p-4 flex justify-end">
					<button className="bg-MarineBlue p-4 text-white rounded-lg " type="submit">
						Next Step
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
