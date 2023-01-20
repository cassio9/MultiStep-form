import useUserStore from "../stores/user";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

interface Props {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FormPage2: React.FC<Props> = ({ setPage }) => {
	const { plan, setPlan, isYearly, setIsYearly } = useUserStore((state) => state);

	const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPlan(e.target.value);
	};

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPage((prev) => prev + 1);
	};

	return (
		<div className="-translate-y-[2.3rem] md:translate-x-10  [@media(min-width:789px)]:translate-x-12   max-w-sm md:max-w-lg  h-full">
			<div className="bg-white rounded-xl p-4 pb-8 mx-[17px] z-20">
				<h1 className="text-MarineBlue text-2xl font-bold">Select your plan</h1>
				<p className="text-CoolGray py-4 pr-6">You have the option of monthly or yearly billing</p>
				<form id="page2" onSubmit={(e) => submitForm(e)}>
					<ul className="flex flex-col gap-3 md:flex-row">
						<li className="">
							<input
								type="radio"
								id="arcade"
								name="plan"
								value="Arcade"
								checked={plan === "Arcade"}
								onChange={onOptionChange}
								className="hidden peer"
								required
							/>
							<label
								htmlFor="arcade"
								className=" py-2 px-4  text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex 
					  peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ">
								<div className="flex md:flex-col md:w-[85px] md:pt-2   gap-4 items-start">
									<img src={ArcadeIcon} alt="" />
									<div className="">
										<p className="w-full text-md font-semibold text-MarineBlue">Arcade</p>
										<p className="w-full text-CoolGray text-sm">{isYearly ? "$90/yr" : "$9/mo"}</p>
										{isYearly && (
											<p className="text-PurplishBlue text-[12px] mt-1">2 months free</p>
										)}
									</div>
								</div>
							</label>
						</li>
						<li>
							<input
								type="radio"
								id="advanced"
								checked={plan === "Advanced"}
								onChange={onOptionChange}
								name="plan"
								value="Advanced"
								className="hidden peer"
								required
							/>
							<label
								htmlFor="advanced"
								className="py-2 px-4 text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex
					peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
								<div className="flex md:flex-col md:w-[85px] md:pt-2  gap-4 items-start">
									<img src={AdvancedIcon} alt="" />
									<div className="">
										<p className="w-full text-md font-semibold text-MarineBlue">Advanced</p>
										<p className="w-full text-CoolGray text-sm">
											{isYearly ? "$120/yr" : "$12/mo"}
										</p>
										{isYearly && (
											<p className="text-PurplishBlue text-[12px] mt-1">2 months free</p>
										)}
									</div>
								</div>
							</label>
						</li>
						<li>
							<input
								type="radio"
								id="pro"
								checked={plan === "Pro"}
								name="plan"
								value="Pro"
								onChange={onOptionChange}
								className="hidden peer"
								required
							/>
							<label
								htmlFor="pro"
								className="py-2 px-4 text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex
					  peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 ">
								<div className="flex md:flex-col md:w-[85px] md:pt-2  gap-4 items-start">
									<img src={ProIcon} alt="" />
									<div className="">
										<p className="w-full text-md font-semibold text-MarineBlue">Pro</p>
										<p className="w-full text-CoolGray text-sm">
											{isYearly ? "$150/yr" : "$15/mo"}
										</p>
										{isYearly && (
											<p className="text-PurplishBlue text-[12px] mt-1">2 months free</p>
										)}
									</div>
								</div>
							</label>
						</li>
					</ul>
				</form>
				<div className="flex justify-center bg-Magnolia mt-8  p-3 w-full   rounded-xl">
					<label className="relative inline-flex items-center cursor-pointer">
						<span
							className={`mr-4 text-md ${
								!isYearly ? "text-MarineBlue font-bold" : "text-CoolGray"
							}`}>
							Monthly
						</span>
						<input
							type="checkbox"
							checked={isYearly}
							onChange={() => setIsYearly(!isYearly)}
							className="sr-only peer"
						/>
						<div className="w-12 h-6  peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[81px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  bg-MarineBlue"></div>
						<span
							className={`ml-4 text-md ${
								isYearly ? "text-MarineBlue font-bold" : "text-CoolGray"
							}`}>
							Yearly
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default FormPage2;
