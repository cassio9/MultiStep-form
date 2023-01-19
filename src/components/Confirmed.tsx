import ConfirmIcon from "../assets/images/icon-thank-you.svg";
const Confirmed = () => {
	return (
		<div className="-translate-y-[2.3rem] md:translate-y-1 md:-translate-x-8  max-w-sm md:max-w-md  h-full">
			<div className="bg-white rounded-xl p-6 py-16  mx-4 z-20 flex flex-col items-center justify-center">
				<img src={ConfirmIcon} alt="" />
				<h1 className="text-2xl text-MarineBlue font-bold py-4">Thank you!</h1>
				<p className="text-CoolGray text-center ">
					Thanks for confirming your subscription! We hope you have fun using our platform. If you
					ever need support, please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};

export default Confirmed;
