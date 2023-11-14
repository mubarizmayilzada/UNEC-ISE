import React from 'react'
import { Link } from 'react-router-dom'
import Event from '../../../assets/img/event.png'

const Events = () => {
  return (
    <section className='mx-[60px] mb-[100px]'>
        <h2 className="text-[48px] text-center font-lato font-[600] mt-[36px] leading-[60px] mb-[56px] text-[#551D3B]">
            Events
        </h2>
        <div className='flex justify-between flex-wrap gap-[36px]'>

            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link to={'https://meet.google.com/?pli=1'} className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
            <div className='w-[304px] rounded-[8px]'>
                <div className='relative'>
                <img className='h-[200px] w-[100%] rounded-t-[8px]' src={Event} alt="" />
                <div className='absolute left-[17px] bg-[#551D3B] bottom-[0px] w-[83px] h-[20px] rounded-t-[6px]'></div>
                </div>
                <div className='px-[16px] py-[13px] pt-[0px] rounded-[8px] border-[#7F7E7E] border-[1px] border-t-[0px] rounded-t-[0px]'>
                    <div className='flex justify-between gap-[16px] items-center'>
                        <div className='w-[83px] flex justify-center items-center h-[75px] bg-[#FCFBFC] rounded-b-[6px]'>
                            <p className='w-[60px] text-center text-[24px] font-[500] leading-[23px]'>11 mar</p>
                        </div>
                        <h2 className='w-[170px] text-[24px] font-[700] leading-[30px]'>UNEC Startup CUP Final</h2>
                    </div>
                    <p className='mt-[15px] text-[#7F7E7E] text-[16px] font-[500] leading-[20px] mb-[24px]'>14:00, Baku Business Center</p>
                    <Link className='inline-block text-center text-[#FFFDFD] w-[100%] py-[12px] px-[24px] text-[16px] font-[600] rounded-[8px] bg-[#551D3B]' rel="stylesheet" href="">Join</Link>
                </div>
            </div>
        </div>
    </section>
)
}

export default Events