import { useState } from "react";
import FormPage1 from "./components/FormPage1";
import HeroPattern from "./assets/images/bg-sidebar-mobile.svg";
import "./App.css";

function App() {
	const [pageNumber, setPageNumber] = useState(1);

	return (
		<div className="bg-Magnolia min-h-screen max-h-fit font-Ubuntu flex flex-col justify-start items-center">
			<div>
				<div className=" h-[10rem] flex items-start justify-center pt-6 ">
					<img src={HeroPattern} className="absolute w-full z-0" alt="" />
					<div className="flex gap-3 translate-y-3  z-10">
						<div className="py-1.5 text-lg px-4 border-2 border-white rounded-full  text-white">
							1
						</div>
						<div className="py-1.5 text-lg px-4 border-2 border-white rounded-full  text-white">
							2
						</div>
						<div className="py-1.5 text-lg px-4 border-2 border-white rounded-full  text-white">
							3
						</div>
						<div className="py-1.5 text-lg px-4 border-2 border-white rounded-full  text-white">
							4
						</div>
					</div>
				</div>
				<div className="-translate-y-[2.3rem]  max-w-sm">
					<FormPage1 setPage={setPageNumber} />
				</div>
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
