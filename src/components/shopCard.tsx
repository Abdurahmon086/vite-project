function ShopCard() {
	return (
		<div className='rounded-2xl p-[6px] bg-[#f3f3f8] w-[176.7px] '>
			<img
				src='https://media.express24.uz/r/4032/2240/G4dvRuJ-WCtn0yYBwg6fg.jpg'
				alt=''
				className='w-[164.7px] h-[164.7px] object-cover rounded-2xl'
			/>
			<div className=''>
				<div className='mt-2 mb-1 mx-1 h-[68px] '>
					<p style={{ lineHeight: '20px' }}>Бамбл апельсин</p>
				</div>
				<div className='p-1'>
					<button
						className='py-3 px-[14px] w-full rounded-xl text-[14px] text-[#131314] bg-white hover:bg-[#f6f6fb] transition-all'
						style={{ boxShadow: '0 -1px 12px rgba(0, 0, 0, .08)', lineHeight: '16px' }}
					>
						25,000 сум
					</button>
				</div>
			</div>
		</div>
	)
}

export default ShopCard
