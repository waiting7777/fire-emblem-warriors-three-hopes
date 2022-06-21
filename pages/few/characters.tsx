import Sidebar from "../../components/few/Sidebar"
import Seperator from "../../components/Seperator"
import Image from "next/image"

const Characters = () => {
  return (
    <div className="mx-auto min-h-screen grid grid-cols-[250px_1fr]">
      <Sidebar />
      <div className="py-8 px-12">
        <div className="text-4xl">角色一覽</div>
        <Seperator />
        <Image src="/images/few/shez.webp" alt="shez" width="200" height="200" />
      </div>
    </div>
  )
}

export default Characters