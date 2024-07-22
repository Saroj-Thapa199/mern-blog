import React from 'react';

const About = () => {
  return (
    <div className='p-6 min-h-screen flex items-center justify-center'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-6'>About Saroj's Blog</h1>
        <div className='text-lg text-gray-500 leading-relaxed flex flex-col gap-6 dark:text-slate-300'>
          <p>
            Hello! I'm Saroj, and welcome to my blog. I'm a passionate
            programmer who loves sharing my thoughts, experiences, and insights
            on coding and web development. Whether it's Blockchain, AI, or the
            latest trends, I enjoy diving into subjects that inspire and
            challenge me. I hold a Bachelor's degree in Bsc. CSIT and have spent
            years exploring various programming languages and frameworks. My
            journey has had its ups and downs, but each experience has
            contributed to my growth.
          </p>
          <p>
            I believe in continuous effort and perseverance, and I strive to
            bring this mindset into my work. Through this blog, I aim to provide
            valuable insights and foster a community of learners and
            enthusiasts. Feel free to reach out to me at{' '}
            <span className='text-blue-600'>saroj@example.com</span> or connect
            with me on{' '}
            <a
              href='https://github.com/Saroj-Thapa199'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600'
            >
              GitHub
            </a>
            . I'd love to hear from you and engage in meaningful conversations!
          </p>
          <p>
            Thank you for visiting, and I hope you find the content both
            enjoyable and informative!
          </p>
          <p>
            Best regards,
            <br />
            Saroj
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
