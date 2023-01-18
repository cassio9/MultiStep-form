import useUserStore from "../stores/user";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import { SetStateAction, useState } from "react";

interface Props {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FormPage2: React.FC<Props> = ({ setPage }) => {
	const user = useUserStore((state) => state);
	const setName = useUserStore((state) => state.setName);
	const setEmail = useUserStore((state) => state.setEmail);
	const setPhone = useUserStore((state) => state.setPhone);
	const [selectedPlan, setSelectedPlan] = useState("Arcade");

	const onOptionChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSelectedPlan(e.target.value);
	};

	console.log(selectedPlan);

	return (
		<div className="bg-white rounded-xl p-4 pb-8 mx-4 z-20">
			<h1 className="text-MarineBlue text-2xl font-bold">Select your plan</h1>
			<p className="text-CoolGray py-4 pr-6">You have the option of monthly or yearly billing</p>
			<ul className="flex flex-col gap-3">
				<li className="">
					<input
						type="radio"
						id="arcade"
						name="plan"
						value="Arcade"
						checked={selectedPlan === "Arcade"}
						onChange={onOptionChange}
						className="hidden peer"
					/>
					<label
						htmlFor="arcade"
						className="p-4 text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex
					  peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ">
						<div className="flex gap-4 items-center">
							<img src={ArcadeIcon} alt="" />
							<div className="">
								<div className="w-full text-lg font-semibold text-MarineBlue">Arcade</div>
								<div className="w-full text-CoolGray text-sm">$9/mo</div>
							</div>
						</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="advanced"
						checked={selectedPlan === "Advanced"}
						onChange={onOptionChange}
						name="plan"
						value="Advanced"
						className="hidden peer"
					/>
					<label
						htmlFor="advanced"
						className="p-4 text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex
					peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
						<div className="flex gap-4 items-center">
							<img src={AdvancedIcon} alt="" />
							<div className="">
								<div className="w-full text-lg font-semibold text-MarineBlue">Advanced</div>
								<div className="w-full text-CoolGray text-sm">$12/mo</div>
							</div>
						</div>
					</label>
				</li>
				<li>
					<input
						type="radio"
						id="pro"
						checked={selectedPlan === "Pro"}
						name="plan"
						value="Pro"
						onChange={onOptionChange}
						className="hidden peer"
					/>
					<label
						htmlFor="pro"
						className="p-4 text-gray-500 bg-white border border-gray-200 
					rounded-lg cursor-pointer dark:hover:text-gray-300 flex
					  peer-checked:border-MarineBlue peer-checked:bg-Magnolia peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 ">
						<div className="flex gap-4 items-center">
							<img src={ProIcon} alt="" />
							<div className="">
								<div className="w-full text-lg font-semibold text-MarineBlue">Pro</div>
								<div className="w-full text-CoolGray text-sm">$15/mo</div>
							</div>
						</div>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default FormPage2;
