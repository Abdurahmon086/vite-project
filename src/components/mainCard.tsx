import { CiHeart, CiStar } from 'react-icons/ci'

function MainCard() {
	return (
		<div className='rounded-2xl w-[357.33px] h-[315px]' style={{ boxShadow: `0 2px 4px rgba(0, 0, 0, .1)` }}>
			<div className='h-[204.19px] relative'>
				<img
					src='https://cdn.express24.uz/i/701/701/KVVgXLHpIe4bdzsF6Kvk4.jpg'
					alt=''
					className='object-fill h-full w-full rounded-t-2xl'
				/>
				<div className='absolute rounded-[10px] top-2 right-2 w-10 h-10' style={{ boxShadow: '0 0 25px rgba(14, 14, 14, .1)' }}>
					<img src='https://cdn.express24.uz/i/301/301/17a9e813181.jpg' alt='' className='object-fill h-full w-full rounded-[10px]' />
				</div>
			</div>
			<div className='p-3'>
				<div className='relative'>
					<h4 className='font-semibold text-[20px] max-w-[281px]' style={{ lineHeight: '24px' }}>
						Bon!
					</h4>
					<div
						className='w-10 h-10 absolute rounded-full right-0 -top-[50%] -translate-y-1/2 bg-white flex justify-center items-center'
						style={{ boxShadow: '0 -1px 12px rgba(0, 0, 0, .08)' }}
					>
						<CiHeart color='#131314' fontSize={20}/>
					</div>
				</div>
				<p className='max-w-full mt-1 text-[15px] text-[#7b7b7b] text-ellipsis line-clamp-1 ' style={{ lineHeight: '19px' }}>
					Кофейня · Европейская · Десерты · Морожено...
				</p>
				<div className='flex mt-3 mx-[3px] py-[5px] px-[10px] bg-[#f6f6fb] text-[#1a1a18] w-[57.3px] h-[28px] text-[12px] gap-1 justify-center items-center rounded-3xl border-transparent border'>
					<CiStar color='#1a1a18' fontSize={14} />
					<span style={{ lineHeight: '16px' }}>4.7</span>
				</div>
			</div>
		</div>
	)
}

export default MainCard
