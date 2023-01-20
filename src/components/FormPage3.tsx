import useUserStore from "../stores/user";

interface Props {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FormPage3: React.FC<Props> = ({ setPage }) => {
	const {
		isYearly,
		hasOnlineService,
		hasLargerStorage,
		hasCustomizableProfile,
		setHasOnlineService,
		setHasLargerStorage,
		setHasCustomizableProfile,
	} = useUserStore((state) => state);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPage((prev) => prev + 1);
	};

	return (
		<div className="-translate-y-[2.3rem] md:pr-10 md:pl-12 md:-translate-x-16 max-w-sm md:max-w-md ">
			<div className="bg-white rounded-xl p-4 md:px-0 md:mx-0 pb-8 mx-4 z-20">
				<h1 className="text-MarineBlue text-2xl font-bold">Pick add-ons</h1>
				<p className="text-CoolGray py-4 pr-6 md:text-sm md:pr-16">
					Add-ons help enhance your gaming experience
				</p>
				<form id="page3" onSubmit={(e) => submitForm(e)}>
					<ul className={`flex flex-col items-center w-full md:w-[106%] gap-4 bg-white`}>
						<li
							className={`w-full border rounded-lg  text-sm border-LightGray ${
								hasOnlineService ? "border-PurplishBlue bg-Magnolia" : ""
							}`}>
							<div className="flex items-center pl-3 ">
								<input
									id="onlineService"
									type="checkbox"
									checked={hasOnlineService}
									className="w-5 h-5 rounded"
									onChange={() => setHasOnlineService(!hasOnlineService)}
								/>
								<label
									htmlFor="onlineService"
									className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									<div className="flex items-center justify-around">
										<div>
											<p className="text-MarineBlue font-bold">Online service</p>
											<p className="text-CoolGray font-light">Access to multiplayer games</p>
										</div>
										<p className="text-PurplishBlue">{isYearly ? "+$10/mo" : "+$1/mo"}</p>
									</div>
								</label>
							</div>
						</li>
						<li
							className={`w-full border rounded-lg  text-sm border-LightGray ${
								hasLargerStorage ? "border-PurplishBlue bg-Magnolia" : ""
							}`}>
							<div className="flex items-center pl-3 ">
								<input
									id="largerStorage"
									type="checkbox"
									checked={hasLargerStorage}
									className="w-5 h-5 rounded"
									onChange={() => setHasLargerStorage(!hasLargerStorage)}
								/>
								<label
									htmlFor="largerStorage"
									className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									<div className="flex items-center justify-around">
										<div>
											<p className="text-MarineBlue font-bold">Larger Storage</p>
											<p className="text-CoolGray font-light">Extra 1TB of cloud save</p>
										</div>
										<p className="text-PurplishBlue">{isYearly ? "+$20/mo" : "+$2/mo"}</p>
									</div>
								</label>
							</div>
						</li>
						<li
							className={`w-full border rounded-lg  text-sm border-LightGray ${
								hasCustomizableProfile ? "border-PurplishBlue bg-Magnolia" : ""
							}`}>
							<div className="flex items-center pl-3 ">
								<input
									id="customizableProfile"
									type="checkbox"
									checked={hasCustomizableProfile}
									className="w-5 h-5 rounded"
									onChange={() => setHasCustomizableProfile(!hasCustomizableProfile)}
								/>
								<label
									htmlFor="customizableProfile"
									className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
									<div className="flex items-center justify-around">
										<div>
											<p className="text-MarineBlue font-bold">Customizable profile</p>
											<p className="text-CoolGray font-light">Custom theme on your profile</p>
										</div>
										<p className="text-PurplishBlue">{isYearly ? "+$20/mo" : "+$2/mo"}</p>
									</div>
								</label>
							</div>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default FormPage3;
