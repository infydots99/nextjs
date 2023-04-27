import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-[#4B25AE]">
      <div className='w-[396px]'>
        <div>
          <span className='absolute'>
            <Image
              src="/back.png"
              alt="Picture of the author"
              width={50}
              height={25}
            />
          </span>
          <p className='text-center text-[58px] text-white font-extrabold drop-shadow-md [text-shadow:_2px_2px_2px_rgb(137_61_216_/_100%)] mb-3'>
            Quizerr</p>
        </div>
      </div>
      <div className='bg-white w-[396px] rounded-[35px] p-7 z-10'>
        <p className='text-center text-2xl font-extrabold text-[#5D5A63]'>Questions</p>
        <p className='text-center text-[#7441FA] font-extrabold'>14/20</p>
        <div className='flex items-center content-center px-5'>
          <div className="w-full rounded-full h-2 bg-[#EAE1FA] mt-4 flex items-center">
            <div className="h-2.5 rounded-full bg-[#21F14F] w-[65%]"></div>
          </div>
        </div>
        <p className='text-center text-[#27262A] font-extrabold  mt-12 text-xl'>
          "Which one is the first search engine on the internet?"
        </p>
        {/* <div className="w-full h-0.5 mt-6 bg-gradient-to-r from-[white] via-[#4c25ae79] to-[white] mb-10"></div> */}
        <div className="w-full mb-10 mt-6 text-center">
          <Image
            src="/divider.png"
            alt="Picture of the author"
            width={300}
            height={20}
          />
        </div>

        <div className='bg-[#EEFFF2] pl-10 pr-3 py-3 w-full rounded-xl mb-3 font-semibold border-[#23C446] border-[2px] text-[#23C446]'>
          <p className='flex justify-between'>
            <span>Archie</span>
            <Image
              src="/check.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </p>
        </div>

        <div className='bg-[#F7F7F8] px-10 py-4 w-full rounded-xl mb-3 font-semibold'>
          <p>Google</p>
        </div>

        <div className='bg-[#F7F7F8] px-10 py-4 w-full rounded-xl mb-3 font-semibold'>
          <p>Altavista</p>
        </div>

        <div className='bg-[#F7F7F8] px-10 py-4 w-full rounded-xl font-semibold'>
          <p>WAIS</p>
        </div>

        <div className='text-center mb-6 mt-6'>
          <button className='px-4 py-2 h-14 w-full font-semibold text-xl  text-white rounded-[15px] bg-gradient-to-b from-[#8558FF] to-[#7341FA] shadow-[0px_4px_0px_0px_#642AFE] flex items-center justify-center'>NEXT
            <span>
              <Image
                src="/next.png"
                alt="Picture of the author"
                width={40}
                height={40} />
            </span>
          </button>
        </div>

        <div className='text-center'>
          <button className='px-4 py-2 font-bold text-base text-[#5D5A63] rounded-[30px] bg-[#FEF0FF]'>
            <span className='flex items-center'>
              <Image
                src="/light-bulb.png"
                alt="Picture of the author"
                width={16}
                height={16}
              />&nbsp;Hint
            </span>
          </button>
        </div>
      </div>
      <span className='mt-[-11px]'>
        <Image
          src="/shadow.png"
          alt="Picture of the author"
          width={372}
          height={60} />
      </span>
    </main>
  )
}
