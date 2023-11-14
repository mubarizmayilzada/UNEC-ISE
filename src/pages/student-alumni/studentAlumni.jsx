import React from 'react'
import Search from '../../assets/img/searchicon.svg'
import DropdownOi from '../../components/dropdown/dropdown';

const year = [
    {
      key: "1",
      label: <p>2020</p>,
      text: "year"
    }
  ];
  const speciality = [
    {
      key: "2",
      label: <p>2020</p>,
      text: "speciality"
    }
  ];


const StudentAlumni = () => {
  return (
    <section className='mx-[60px] my-[70px]'>
        <div className='flex justify-between items-center mb-[50px] '>
        <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left ">
        Student Alumni
      </p>

            <div className='flex items-center '>
            <div className='flex items-center mr-[8px] h-fit py-[10px] pl-[8px] pr-[24px] border-b-[2px] border-[#7F7E7E] w-[159px]'>
        <label htmlFor="search">
            <img className='' src={Search} alt="" />
        </label>
        <input id="search" className='w-[100%]  outline-none placeholder:text-[#7F7E7E] pl-[8px] text-[#7F7E7E] text-[14px] font-[600]' placeholder="Search for name" type="text" name=""/>
      </div>
      <DropdownOi items={year}/>
        <DropdownOi items={speciality}/>

            </div>


        </div>

        <div className='flex flex-wrap gap-[30px]'>
        <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>
            <div className='py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]'>
                <div className='flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]'>
                    <h3>Tural</h3>
                    <h3>Salmanov</h3>
                </div>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    Ecenomics
                </p>
                <p className='text-[14px] font-[400] leading-[17px] text-[#575457]'>
                    <span>2020</span>
                    -
                    <span>2024</span>
                </p>
            </div>

        </div>
    </section>
  )
}

export default StudentAlumni