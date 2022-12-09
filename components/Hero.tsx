
const Hero = () => {
  return (
    <div className="h-[420px] bg-center" style={{ backgroundImage: 'url(/images/hero.jpeg)'}}>
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-black bg-opacity-40">
        <div className="text-5xl md:text-8xl text-white font-bold">Import Data</div>
        <div className="text-md md:text-2xl text-white">The Gaming Data resource</div>
      </div>
    </div>
  )
}

export default Hero