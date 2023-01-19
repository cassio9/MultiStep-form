import HeroPattern from "../assets/images/bg-sidebar-mobile.svg";

interface Props {
	pageNumber: number;
}

const Header: React.FC<Props> = ({ pageNumber }) => {
	return (
		<div className=" h-[8.5rem] flex items-start justify-center ">
			<img
				src={HeroPattern}
				className="absolute w-full z-0 max-h-[30%] object-cover object-top"
				alt="Pattern"
			/>
			<div className="flex gap-3 translate-y-3  z-10">
				<div
					className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 1 && "bg-PastelBlue text-MarineBlue"}`}>
					1
				</div>
				<div
					className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 2 && "bg-PastelBlue text-MarineBlue"}`}>
					2
				</div>
				<div
					className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 3 && "bg-PastelBlue text-MarineBlue"}`}>
					3
				</div>
				<div
					className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 4 && "bg-PastelBlue text-MarineBlue"}`}>
					4
				</div>
			</div>
		</div>
	);
};

export default Header;
