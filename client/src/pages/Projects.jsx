import CallToAction from '../components/CallToAction';

const Projects = () => {
  return (
    <div className='min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>
        Build fun and engaging projects while learning HTML, CSS, and
        Javascript!
      </p>
      <CallToAction
        title={'Browse the menu, add to cart and get them right away '}
        text={'Check out this food del app built using react js'}
        btnText={'Food delivery app'}
        link={'https://spotify-sq5j.onrender.com/'}
        image={
          'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      />
      <CallToAction
        title={'Want to know what a modern app in React framework looks like?'}
        text={'Checkout this spotify clone built using mern-stack'}
        btnText={'Fullstack Spotify Clone'}
        link={'https://spotify-sq5j.onrender.com/'}
        image={
          'https://images.unsplash.com/photo-1504509546545-e000b4a62425?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3RpZnl8ZW58MHx8MHx8fDA%3D'
        }
      />
    </div>
  );
};

export default Projects;
