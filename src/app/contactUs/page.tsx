'use client'
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import { connect } from '@/dbConfig/dbConfig';
import axios from 'axios';
import { useRouter } from "next/navigation"
connect()

export default function FeedBack() {
  const router=useRouter()

  const [feedBackData, setFeedBackData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/contactUs');
        if (response.status !== 200) {
          throw new Error('No response from Server');
        }

        const data = response.data;
        if (data.data) {
          setUsername(data.data.username);
          setEmail(data.data.email);
        }
      } catch (error: any) {
        console.log(error.message);
        toast(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const onFormSubmitting = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const feedBackData = { username, email, message };
      const response = await axios.post("/api/users/contactUs", feedBackData);
      console.log("feedback submitted", response.data);
      router.push('/home')
      toast.success("Thanks for providing Feedback", { duration: 2000 });
    }
     catch (error: any) {
      console.log("can't submit feedBack  :(", error);
      toast.dismiss();
      toast.error("failed to submit feedback :(", { duration: 2000 });
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message.length > 30) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [message]);

  return (
    <div>
      <Navbar /><br />
      <Toaster position="top-center" reverseOrder={false} />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="w-1/3 p-10 bg-gray-300 rounded-lg overflow-hidden flex flex-wrap">
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
                <div className="px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Outer Ring Rd, AU Block, Ranikhet, Pitampura, New Delhi, Delhi, 110034, India</p>
                </div>
                <div className="px-6 mt-4">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a href="mailto:vipsedu@vips.edu" className="text-blue-500 leading-relaxed">vipsedu@vips.edu</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">9718511562</p>
                </div>
              </div>
            </div>
            <div className="w-2/3 p-10 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1310.6288945248302!2d77.14158598221987!3d28.720778370449935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0170e8096b31%3A0x9a906c658b08a033!2sVivekananda%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sus!4v1721705172941!5m2!1sen!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">{loading ? "Processing..." : "FeedBack for UpBrings Team"}</h1>
            <form onSubmit={onFormSubmitting}>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  value={username}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  value={email}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  placeholder='please enter your message'
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                disabled={!buttonEnabled}
                className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {buttonEnabled ? "Submit" : "Enter your Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
