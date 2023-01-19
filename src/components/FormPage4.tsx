import useUserStore from "../stores/user";

interface Props {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FormPage4: React.FC<Props> = ({ setPage }) => {
	const {
		plan,
		isYearly,
		hasOnlineService,
		hasLargerStorage,
		hasCustomizableProfile,
		ArcadePrice,
		AdvancedPrice,
		ProPrice,
	} = useUserStore((state) => state);
	const user = useUserStore((state) => state);

	console.log(user);

	const total = () => {
		let total = 0;
		total =
			plan === "Arcade"
				? total + 9
				: plan === "Advanced"
				? total + 12
				: plan === "Pro"
				? total + 15
				: total;

		total = hasOnlineService ? total + 1 : total;
		total = hasLargerStorage ? total + 2 : total;
		total = hasCustomizableProfile ? total + 2 : total;
		total = isYearly ? total * 10 : total;
		return total;
	};

	return (
		<div className="-translate-y-[2.3rem]  max-w-sm">
			<div className="bg-white rounded-xl p-4 pb-8 mx-4 z-20">
				<h1 className="text-MarineBlue text-2xl font-bold">Finishing up</h1>
				<p className="text-CoolGray py-4 pr-6">
					Double-check everything looks OK before confirming.
				</p>
				<ul className={`flex flex-col items-left w-full gap-2 bg-Magnolia rounded-md p-4`}>
					<li className="flex items-center justify-between border-b border-LightGray pb-4 mb-2">
						<div>
							<p className="font-bold text-MarineBlue">{`${plan} (${
								isYearly ? "Yearly" : "Monthly"
							})`}</p>
							<a className="text-CoolGray underline cursor-pointer" onClick={() => setPage(2)}>
								Change
							</a>
						</div>
						{plan === "Arcade" && (
							<p>{isYearly ? `$${ArcadePrice * 10}/yr` : `$${ArcadePrice}/mo`}</p>
						)}
						{plan === "Advanced" && (
							<p>{isYearly ? `$${AdvancedPrice * 10}/yr` : `$${AdvancedPrice}/mo`}</p>
						)}
						{plan === "Pro" && <p>{isYearly ? `$${ProPrice * 10}/yr` : `$${ProPrice}/mo`}</p>}
					</li>

					{hasOnlineService && (
						<li className="flex items-center justify-between text-CoolGray ">
							<div>
								<p>Online service</p>
							</div>
							<p className="text-PurplishBlue"> {isYearly ? "+$10/yr" : "+$1/mo"}</p>
						</li>
					)}
					{hasLargerStorage && (
						<li className="flex items-center justify-between text-CoolGray">
							<div>
								<p>Larger storage</p>
							</div>
							<p className="text-PurplishBlue"> {isYearly ? "+$20/yr" : "+$2/mo"}</p>
						</li>
					)}
					{hasCustomizableProfile && (
						<li className="flex items-center justify-between text-CoolGray">
							<div>
								<p>Customizable profile</p>
							</div>
							<p className="text-PurplishBlue"> {isYearly ? "+$20/yr" : "+$2/mo"}</p>
						</li>
					)}
				</ul>
				<div className="pt-6 px-4 flex justify-between">
					<p className="text-CoolGray">Total {isYearly ? "(per year)" : "(per month)"}</p>
					<p className="text-PurplishBlue text-lg font-bold">{`$${total()}/${
						isYearly ? "yr" : "mo"
					}`}</p>
				</div>
			</div>
		</div>
	);
};

export default FormPage4;
