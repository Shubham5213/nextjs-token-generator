import tickBox from "../public/tickBox.svg"
import mobile from "../public/mobile.svg"
import roundBg from "../public/roundBg.svg"
import icons2 from "../public/icons2.png"
import Image from 'next/image'

export default function Home() {

  return (
    <main className="">
        <div className="relative">
              <div className="flex flex-col items-center text-white space-y-2 py-2">
                <div className="text-center text-6xl pt-10 pb-4 font-bold">Check your financial health</div>
                <p className="text-center text-lg font-light">Use WealthMeter to get a free report <br/>card for your finances- within minutes! </p>
                  <button className="w-40 bg-orange-500 hover:shadow-2xl text-white text-xl font-bold py-2 px-4 rounded-full translate-y-[2vh]">
                    Get Started
                  </button>
              </div>
              <div className="flex items-center justify-around w-full mt-2">
                <div className="flex flex-col">
                  <div className="flex space-x-2 h-10 text-white translate-x-[10vw] translate-y-[-10vh]">
                    <Image className="h-auto max-w-full" src={tickBox} alt="image description"/>
                    <div>
                      <p className="mt-1 text-xl">Expected Retirement Age</p>
                      <hr className="min-w-[14vw] h-0.5 mt-1 bg-gray-100 border-0 rounded"></hr>
                    </div>
                  </div>
                  <div className="flex space-x-2 h-10 text-white translate-x-[10vw] translate-y-[-8vh]">
                    <Image className="h-auto max-w-full" src={tickBox} alt="image description"/>
                    <div>
                      <p className="mt-1 text-xl">Identify Mistakes</p>
                      <hr className="min-w-[14vw] h-0.5 mt-1 bg-gray-100 border-0 rounded"></hr>
                    </div>
                  </div>
                </div>
                <Image className="translate-x-[15%] self-start" src={mobile} alt="image description"/>
                <div className="flex flex-col">
                  <div className="flex space-x-2 h-10 text-white translate-x-[-10vw] translate-y-[-10vh]">
                    <Image className="h-auto max-w-full" src={tickBox} alt="image description"/>
                    <div>
                      <p className="mt-1 text-xl">Personalised Roadmap</p>
                      <hr className="w-50 h-0.5 mt-1 bg-gray-100 border-0 rounded"></hr>
                    </div>
                  </div>
                  <div className="flex space-x-2 h-10 text-white translate-x-[-10vw] translate-y-[-8vh]">
                    <Image className="h-auto max-w-full" src={tickBox} alt="image description"/>
                    <div>
                      <p className="mt-1 text-xl">Tips To Improve</p>
                      <hr className="w-50 h-0.5 mt-1 bg-gray-100 border-0 rounded"></hr>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col text-white items-center w-full pt-10"> 
                <Image className="w-full absolute top-[570px]" src={roundBg} alt=""/>
                <p className="text-6xl font-bold translate-y-[-2vh]">How it Works?</p>
                <Image src={icons2} alt="icons" className="z-40 img pt-8"></Image>
                <div className="z-50 w-full flex flex-col items-center bg-[#0A5783]">
                  <div className="flex w-[50vw] justify-around pb-[10vh]">
                    <p className="text-2xl w-[12vw]">Answer few questions</p>
                    <p className="text-2xl w-[12vw]">Register using phone and OTP</p>
                    <p className="text-2xl w-[12vw]">Get Report and personal Roadmap</p>
                  </div>
                  <button className="z-50 w-40 bg-orange-500 hover:shadow-2xl text-white text-xl font-bold py-2 px-4 rounded-full">
                      Get Started
                  </button>
                </div>
              </div>
          </div>
    </main>
  )}