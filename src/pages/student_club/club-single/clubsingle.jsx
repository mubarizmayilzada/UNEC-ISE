import React from 'react'
import Club from "../../../assets/img/Homepageimg.png";
import ClubImg from "../../../assets/img/clubdetails.png";

const Clubsingle = () => {
  return (
    <section className='mb-[80px]'>
        <div className='mb-[48px] relative'>
            <img className='w-[100%] h-[320px]' src={Club} alt="" />      
            <div className='w-[100%] h-[320px] bg-[#000] opacity-60 absolute top-[0] left-[0]'></div> 
            <span className='text-[48px] font-[700] leading-[60px] text-[#FFFDFE] absolute left-[60px] bottom-[37px] font-lato'>
            Data Science Community
            </span>
        </div>
        <section className='mx-[60px]'>
        <div className='flex justify-between gap-[50px]'>
            <p className='w-[50%] text-[16px] font-[400] leading-[24px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus arcu, mollis vel magna pharetra, volutpat imperdiet odio. Curabitur ornare mattis elit, hendrerit rutrum nisi sodales eu. Nunc iaculis, arcu non condimentum vulputate, nunc nibh aliquet ligula, vitae eleifend mauris lacus non ex. Donec sed augue ullamcorper, tincidunt tellus a, commodo arcu. Praesent dui felis, lacinia venenatis laoreet sed, imperdiet ut massa. Sed vitae elit vitae mi cursus ultricies at ut quam. Nunc volutpat metus a ex finibus, quis pellentesque lorem vestibulum. <br /><br /> Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id sollicitudin arcu. Proin in placerat lacus. Nunc tempor nibh at ligula maximus hendrerit. Vestibulum gravida nisi nec orci fermentum aliquam. Etiam vitae arcu tellus. Praesent auctor tempor vehicula. Nunc vitae libero at diam convallis sollicitudin. Cras interdum aliquet sem nec dignissim. Donec condimentum lobortis laoreet. Proin ornare condimentum vehicula.
            </p>
            <img className='w-[50%]' src={ClubImg} alt="" />
        </div>
        <br />
        <p className=' text-[16px] font-[400] leading-[24px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus arcu, mollis vel magna pharetra, volutpat imperdiet odio. Curabitur ornare mattis elit, hendrerit rutrum nisi sodales eu. Nunc iaculis, arcu non condimentum vulputate, nunc nibh aliquet ligula, vitae eleifend mauris lacus non ex. Donec sed augue ullamcorper, tincidunt tellus a, commodo arcu. Praesent dui felis, lacinia venenatis laoreet sed, imperdiet ut massa. Sed vitae elit vitae mi cursus ultricies at ut quam. Nunc volutpat metus a ex finibus, quis pellentesque lorem vestibulum. <br /><br /> Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi id sollicitudin arcu. Proin in placerat lacus. Nunc tempor nibh at ligula maximus hendrerit. Vestibulum gravida nisi nec orci fermentum aliquam. Etiam vitae arcu tellus. Praesent auctor tempor vehicula. Nunc vitae libero at diam convallis sollicitudin. Cras interdum aliquet sem nec dignissim. Donec condimentum lobortis laoreet. Proin ornare condimentum vehicula.
            </p>
        </section>
    </section>
    )
}

export default Clubsingle