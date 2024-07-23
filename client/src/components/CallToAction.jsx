import { Button } from 'flowbite-react';
import React from 'react';

const CallToAction = ({
  title = 'Want to learn more about javascript?',
  text = 'Checkout these resources with 100 Javascript Projects',
  btnText = '100 Javascript Projects',
  image = 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
  link = 'https://www.100jsprojects.com',
}) => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 flex flex-col justify-center'>
        <h2 className='text-2xl'>{title}</h2>
        <p className='text-gray-500 my-2'>{text}</p>
        <Button
          gradientDuoTone='purpleToPink'
          className='rounded-tl-xl rounded-bl-none'
        >
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {btnText}
          </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img src={image} />
      </div>
    </div>
  );
};

export default CallToAction;
