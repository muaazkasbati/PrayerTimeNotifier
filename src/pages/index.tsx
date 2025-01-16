import Image from "next/image";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins: any = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Prayer Time Notifier - Stay on Top of Your Prayers</title>
        <meta
          name="description"
          content="Prayer Time Notifier helps you never miss a prayer. Get timely notifications 15, 10, 5 minutes before, and at the exact time of prayer. Download now."
        />
        <meta
          name="keywords"
          content="prayer time, prayer time notifier, islamic app, prayer reminders, app for muslims, islamic prayer times, prayer time notifications, download prayer app"
        />
        <meta name="author" content="Muaaz Kasbati" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prayer Time Notifier - Stay on Top of Your Prayers"
        />
        <meta
          property="og:description"
          content="Prayer Time Notifier helps you never miss a prayer. Get timely notifications 15, 10, 5 minutes before, and at the exact time of prayer. Download now."
        />
        <meta property="og:url" content="https://www.prayertime.muaazkasbati.com" />
        {/* <meta property="og:image" content="https://yourwebsite.com/og-image.png" /> */}
      </Head>
      <div className={`${poppins.className} flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500`}>
        <div className="text-center text-white p-6 bg-white bg-opacity-60 rounded-lg shadow-xl">
          <img
            src="/logo.png"
            alt="App Logo"
            className="mx-auto mb-6 w-32 h-32 object-contain"
          />
          <h1 className="text-4xl text-black font-semibold mb-4">Prayer Time Notifier</h1>
          <p className="text-xl text-black mb-6 max-w-lg mx-auto">
            Prayer Time Notifier helps you stay on top of your prayers with accurate
            prayer times for your location. The app sends you timely notifications
            15 minutes before, 10 minutes before, 5 minutes before, and at the time of each prayer.
            Stay alert and never miss a prayer again with our easy-to-read prayer schedule.
            The app also displays all prayer times for the day, including the time remaining
            for the next prayer, so you always know when it’s time to prepare.
          </p>
          <a
            href="/PrayerTimeNotifierSetup.exe"
            className="inline-block px-8 py-3 bg-black text-white text-lg rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
            download
          >
            Download Now
          </a>

        </div>
      </div>
    </>
  );
}
