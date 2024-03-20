export default function Footer() {
  return (
    <section className="w-full py-32 text-white bg-blue-600">
      <div className="flex flex-col justify-between w-3/4 m-auto space-y-10 text-center">
        {/* to wrap cards */}
        <div className="flex flex-col justify-between gap-10 text-base md:flex-row">
          {/* Card 1 */}
          <div className="flex flex-col">
            <h1 className="mb-5 font-bold">Navigation Links</h1>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col">
            <h1 className="mb-5 font-bold">Contact Information</h1>
            <p>Email: info@cyborgeacademy.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Taft Avenue, Malate, </p>
            <p>Manila, 1004</p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col">
            <h1 className="mb-5 font-bold">Social Media Links</h1>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Github</a>
            <a href="#">Reddit</a>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col">
            <h1 className="mb-5 font-bold">Useful Links</h1>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
            <a href="#">FAQs</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-xl font-bold">Stay Connected!</h1>
          <p>
            Sign up for our newsletter to receive updates on new courses,
            promotions, and industry news.
          </p>
          <button className="p-2 font-bold text-white bg-blue-900 rounded-lg">
            Subscribe
          </button>
        </div>
        <div className="text-center">
          <p>Copyright © 2024 CyBorge Academy. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
