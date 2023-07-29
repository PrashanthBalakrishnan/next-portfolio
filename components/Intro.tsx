import Image from 'next/image'

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="/profilePic.jpg"
            alt="Prashanth's profile portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="border-[.35rem] h-24 w-24 object-cover rounded-tl-extraLarge rounded-br-extraLarge"
          />
          <span className="text-4xl absolute bottom-0 right-0">👋</span>
        </div>
      </div>
    </section>
  )
}

export default Intro
