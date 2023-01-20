import HeroPattern from "../assets/images/bg-sidebar-mobile.svg";
import HeroPattern1 from "../assets/images/bg-sidebar-desktop.svg";

interface Props {
	pageNumber: number;
}

const Header: React.FC<Props> = ({ pageNumber }) => {
	return (
		<div className=" h-[8.5rem] md:h-full md:p-3 md:block w-full">
			<picture className="">
				<source media="(min-width: 768px)" srcSet={HeroPattern1} />
				<img
					src={HeroPattern}
					className="absolute inset-0  md:max-h-full w-full z-100 max-h-[30%] object-cover object-top
					md:p-2 md:translate-y-1 md:h-[98%] md:w-1/3 md:rounded-3xl "
					alt="Pattern"
				/>
			</picture>
			<div className="flex gap-3 md:gap-4 md:p-4 translate-y-3 justify-center mx-auto md:flex-col md:items-start">
				<div className="flex flex-row-reverse items-start gap-4">
					<div className="hidden md:block">
						<p className="text-CoolGray text-sm">STEP 1</p>
						<p className="text-white w-[100px] text-sm">YOUR INFO</p>
					</div>
					<div
						className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 1 && "bg-PastelBlue text-MarineBlue"}`}>
						1
					</div>
				</div>
				<div className="flex flex-row-reverse items-start gap-4">
					<div className="hidden md:block">
						<p className="text-CoolGray text-sm">STEP 2</p>
						<p className="text-white w-[100px] text-sm">SELECT PLAN</p>
					</div>
					<div
						className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 2 && "bg-PastelBlue text-MarineBlue"}`}>
						2
					</div>
				</div>
				<div className="flex flex-row-reverse items-start gap-4">
					<div className="hidden md:block">
						<p className="text-CoolGray text-sm">STEP 3</p>
						<p className="text-white w-[100px] text-sm">ADD-ONS</p>
					</div>
					<div
						className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 3 && "bg-PastelBlue text-MarineBlue"}`}>
						3
					</div>
				</div>
				<div className="flex flex-row-reverse items-start gap-4">
					<div className="hidden md:block">
						<p className="text-CoolGray text-sm">STEP 4</p>
						<p className="text-white w-[100px] text-sm">SUMMARY</p>
					</div>
					<div
						className={`py-1.5 text-lg px-4 border-2 border-PastelBlue font-bold rounded-full  text-white 
                    ${pageNumber === 4 && "bg-PastelBlue text-MarineBlue"}`}>
						4
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
