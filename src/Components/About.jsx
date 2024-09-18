import React from 'react';

const About = () => {
  return (
    <section className='bg-white py-14'>
      <div className='container mx-auto px-4'>
        {/* Purpose of the App */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>About BookLovers</h1>
          <p className='text-lg'>
            BookLovers is a web application designed for avid readers. <br/>It allows users to search for books, <br/>view details about each book, and explore different genres.<br/> Whether you’re a fan of fiction, non-fiction, or fantasy, BookLovers helps you discover the best reads tailored to your interests.
          </p>
        </div>

        {/* How It Works */}
        <div className='mb-8'>
          <h2 className='text-3xl font-semibold mb-4'>How It Works</h2>
          <p className='text-lg'>
            Navigate through the app by using the menu. You can:
          </p>
          <ul className='list-disc list-inside pl-4 text-lg'>
            <li>Browse the available books in the BookList section.</li>
            <li>Filter books by genre such as fiction, non-fiction, romance, and more.</li>
            <li>View detailed information about each book, including its description and availability.</li>
          </ul>
        </div>

        {/* Developer Info */}
        <div className='mb-8'>
          <h2 className='text-3xl font-semibold mb-4'>Meet the Developer</h2>
          <p className='text-lg'>
            Hi, I’m Nqobile Biyela, a passionate software developer and book lover. BookLovers was inspired by my love for reading and the desire to create a platform where others can explore books easily. Stay tuned for more exciting features coming soon!
          </p>
        </div>

        {/* API Credits */}
        <div className='mb-8'>
          <h2 className='text-3xl font-semibold mb-4'>API Credits</h2>
          <p className='text-lg'>
            This app is powered by the Open Library API, providing a vast collection of book data to help you find your next favorite read. Special thanks to the developers of the Open Library for making this possible.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className='text-3xl font-semibold mb-4'>Contact Information</h2>
          <p className='text-lg'>
            If you have any feedback or would like to reach out, feel free to contact me at:
            <br />
            <strong>Email:</strong> nqobilebiyela3@gmail.com
            <br />
            <strong>GitHub:</strong> <a href="https://github.com/NqobileBuhle" className='text-blue-500'>NqobileBuhle</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
