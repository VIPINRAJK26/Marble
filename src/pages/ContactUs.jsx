import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="bg-no-repeat w-full  bg-cover  backdrop-blur-2xl bg-[url('https://img.freepik.com/free-photo/young-asia-girl-wear-medical-face-mask-use-mobile-phone-with-dressed-casual-cloth-self-isolation-social-distancing-quarantine-corona-virus-panoramic-banner-blue-background-with-copy-space_7861-2703.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid')] p-10 md:pt-28">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mt-22 relative md:left-22 shadow-md hover:shadow-lg hover:scale-105 duration-300 p-3 md:p-7 rounded-xl "
      >
        <div className="pb-10">
          <h1 className="text-4xl pb-5 font-semibold text-white">Contact Us</h1>
          <p className="text-xl font-semibold text-white">
            we'd love to hear from you
          </p>
        </div>
        <div>
          <div className="mb-4">
            <label className="block  text-white font-bold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white font-bold mb-2">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              placeholder="Enter your message"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 min-w-[100px] hover:min-w-[150px] transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs