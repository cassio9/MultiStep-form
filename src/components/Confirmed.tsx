import ConfirmIcon from "../assets/images/icon-thank-you.svg";
const Confirmed = () => {
	return (
		<div className="-translate-y-[2.3rem] px-6 md:px-0 md:-translate-x-8  max-w-sm md:max-w-md">
			<div className="bg-white rounded-xl p-4 py-16  mx-4 z-20 flex flex-col items-center justify-center">
				<img src={ConfirmIcon} alt="Check icon" />
				<h1 className="text-2xl text-MarineBlue font-bold py-4 lg:py-6">Thank you!</h1>
				<p className="text-CoolGray text-center text-[15px] md:text-sm">
					Thanks for confirming your subscription! We hope you have fun using our platform. If you
					ever need support, please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};

export default Confirmed;
