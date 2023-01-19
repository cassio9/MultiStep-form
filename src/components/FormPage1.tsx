import useUserStore from "../stores/user";

interface Props {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

const FormPage1: React.FC<Props> = ({ setPage }) => {
	const { name, setName, email, setEmail, phone, setPhone } = useUserStore((state) => state);

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPage((prev) => prev + 1);
	};

	return (
		<div className="-translate-y-[2.3rem]  max-w-sm h-full">
			<div className="bg-white rounded-xl p-4 pb-8 mx-4 z-20 ">
				<h1 className="text-MarineBlue text-2xl font-bold">Personal info</h1>
				<p className="text-CoolGray py-4 pr-6">
					Please provide your name, email address and phone number.
				</p>
				<form id="page1" onSubmit={(e) => submitForm(e)} className="">
					<label className="block py-2 text-MarineBlue" htmlFor="name">
						Name
					</label>
					<input
						className="p-2 text-MarineBlue font-bold placeholder:font-normal focus:outline-MarineBlue  w-full border-CoolGray border-[1px]"
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="e.g Stephen King"
						required
					/>
					<label className="block py-2 text-MarineBlue" htmlFor="email">
						Email Address
					</label>
					<input
						className="p-2 text-MarineBlue font-bold placeholder:font-normal focus:outline-MarineBlue  w-full border-CoolGray border-[1px]"
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="e.g stephenking@lorem.com"
						required
					/>
					<label className="block py-2 text-MarineBlue" htmlFor="tel">
						Phone Number
					</label>
					<input
						className="p-2 text-MarineBlue font-bold placeholder:font-normal focus:outline-MarineBlue  w-full border-CoolGray border-[1px]"
						type="tel"
						id="tel"
						value={phone}
						required
						onChange={(e) => setPhone(e.target.value)}
						placeholder="e.g. +1 234 567 890"
					/>
				</form>
			</div>
		</div>
	);
};

export default FormPage1;
