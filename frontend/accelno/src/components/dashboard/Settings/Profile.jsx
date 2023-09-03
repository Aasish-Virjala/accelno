import uploadIcon from '../../..//assets/dashboard/icons/upload-cloud-icon.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import axios from 'axios';

const Profile = () => {
	const [previewImg, setPreviewImg] = useState({});
	const [imgFile, setImgFile] = useState();
	const [imgUrl, setImgUrl] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const schema = yup.object().shape({
		companyName: yup.string().required(),
		website: yup.string(),
		logo: yup.string(),
		branding: yup.boolean(),
	});

	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const onDrop = useCallback((acceptedFile) => {
		console.log(acceptedFile);
		setImgFile(acceptedFile[0]);
		setPreviewImg(
			Object.assign(acceptedFile, {
				preview: URL.createObjectURL(acceptedFile[0]),
			})
		);
	}, []);
	const { getRootProps, getInputProps, isDragAccept, acceptedFiles, rejectedFiles } = useDropzone({
		accept: {
			'image/*': ['.jpeg', '.png'],
		},
		maxFiles: 1,
		onDrop: onDrop,
	});

	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append('file', imgFile);
		formData.append('upload_preset', 'rm3fkp0y');
		try {
			const response = await axios.post('https://api.cloudinary.com/v1_1/dpw1bckje/image/upload', formData);
			if (response) {
				const imageUrl = response.data.secure_url;
				setImgUrl(imageUrl);
				setValue('logo', imgUrl);
				console.log(getValues());
				console.log(imgUrl);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col">
				{' '}
				<div className="border-y border-[#A7A8AB] py-4 flex justify-start space-x-16 items-start">
					<div className="">
						<h4 className="text-sm font-medium ">Profile</h4>
						<span className="text-xs text-[#989898]">This will be displayed on your profile</span>
					</div>
					<div className="space-y-5">
						<input
							type="text"
							{...register('companyName')}
							placeholder="Name"
							className="w-[400px] border border-[#A4A5AC] rounded-md py-1 px-3 text-sm"
						/>
						<div className="flex w-[400px] ">
							<input
								type="text"
								{...register('website')}
								placeholder="Example.com/profile/"
								className="w-[160px] border-y border-l border-[#A4A5AC] rounded-tl-md rounded-bl-md py-1 px-3 text-sm"
							/>
							<input
								type="text"
								placeholder="untitled"
								className="w-full border border-[#A4A5AC] rounded-tr-md rounded-br-md py-1 px-3 text-sm"
							/>
						</div>
					</div>
				</div>
				<div className="border-b border-[#A7A8AB] py-6 flex justify-start space-x-16 items-start">
					<div className="">
						<h4 className="text-sm font-medium ">Company Logo</h4>
						<p className="text-xs text-[#989898]">
							Update your company log and then <br /> choose where you want it to display
						</p>
					</div>
					<div className="flex items-center space-x-6">
						<div className={`${acceptedFiles.length !== 0 ? '' : 'bg-lightGrey'} h-24 w-24 rounded-full flex justify-center items-center`}>
							<img src={previewImg.preview} alt="" className="w-full object-contain" />
						</div>
						<div
							{...getRootProps()}
							className={` border-2 ${acceptedFiles.length !== 0 && 'border-green-700'} ${rejectedFiles && 'border-red-600'}  ${
								isDragAccept && 'border-green-700'
							}   border-[#A4A5AC]  rounded-lg py-5 px-16`}
						>
							<input {...getInputProps} className="hidden" />
							{acceptedFiles.length !== 0 ? (
								<span className="text-secondaryGrey italic text-sm font-medium">{previewImg[0].path}</span>
							) : (
								<div className=" flex flex-col items-center space-y-2">
									<img src={uploadIcon} alt="" className="w-7" />
									<span className="text-sm">Click to upload or drag and drop</span>
									<span className="text-xs">SVG,PNG,JPG (max. 800px 400px)</span>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="py-6 flex justify-start space-x-16 items-start">
					<div>
						<h5 className="text-sm font-medium ">Branding</h5>
						<p className="text-xs font-normal  text-[#989898]">Add your logo to reports</p>
					</div>
					<div className="flex items-center">
						<input type="checkbox" name="branding" id="" {...register('branding')} />
						<label htmlFor="" className="text-xs ml-2 font-medium">
							Reports
						</label>
					</div>
				</div>
			</div>
			<div className="absolute bottom-6 right-8 flex gap-3 text-sm font-normal">
				<button className="border border-[#A7A8AB] py-2 px-4 rounded-md">Cancel</button>
				<input type="submit" value="Save" className="bg-[#381EDA] text-white py-2 px-4 rounded-md" />
			</div>
		</form>
	);
};

export default Profile;
