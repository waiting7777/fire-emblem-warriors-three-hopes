import Image from "next/image"

const Hero = () => {
  return (
    <div>
      <Image src="/images/hero.jpeg" alt="hero.jpeg" layout="intrinsic" width="1250" height="375" />
    </div>
  )
}

export default Hero