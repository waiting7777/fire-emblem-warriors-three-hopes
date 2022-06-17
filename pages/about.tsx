import Seperator from "../components/Seperator"
import Image from "next/image"

const about = () => {
  return (
    <>
      <div className="container py-10 w-[640px]">
        <div className="pl-4">
          <Image width="250" height="250" src="/images/me.jpeg" alt='me' />
        </div>
        <div className="mt-4">
          I&apos;m Waiting7777，我是個工程師，擅長<b className="text-red-main">資料視覺化</b>、<b className="text-red-main">前端開發</b>、<b className="text-red-main">Crypto</b>，可以在 <a href="https://github.com/waiting7777" target="_blank" rel="noreferrer" className="text-red-main">我的 Github</a> 上看到我的開源項目，閒言閒語大部分用 <a href="https://twitter.com/waiting7777" target="_blank" rel="noreferrer" className="text-red-main">Twitter</a>，偶爾寫寫 Blog 整理心得。或是剪剪遊戲精華放<a href="https://www.youtube.com/channel/UCOlwT9QX7G5cGKB1JM5qI6A" target="_blank" rel="noreferrer" className="text-red-main">Youtube</a>。
          <br/><br/>
          很喜歡鑽研一些最新的趨勢，常常在拓荒中探索自己的興趣，並且把自己的經驗分享給大家。前陣子也接觸了不少 Crypto 的相關技術，例如前端如何跟鏈上智能合約互動，如何做出 Dex, Swap 等等網站。
          <br/><br/>
          除了寫程式外，最大的興趣在於玩遊戲，唸書時曾經拿過魔獸世界競技場台服 #1。目前喜歡各類&quot;自走棋&quot;遊戲，爐石戰場、聯盟戰棋等等。還是個 MTG 的骨灰玩家，雖然因為疫情很少出國打牌，但還是喜歡那句<br /><br/><b className="text-red-main text-xl"><i>Play the game, see the world!</i></b>
        </div>
        <Seperator />
        <div className="font-medium text-2xl">
          Website
        </div>
        <div className="mt-4">
          因為本身是工程師，喜歡整理資料，資料視覺化，對於遊戲又有興趣，就基於此建立了這個網站。
          <br/><br/>
          基本上都以自己愛玩的遊戲為主，大家想交流的話也非常歡迎。
        </div>
        <Seperator />
        <div className="font-medium text-2xl">
          Contact 
        </div>
        <div className="mt-4">
          E-mail: <a href="mailto:waiting0819@msn.com" className="text-red-main">waiting0819@msn.com</a>
          <br/><br/>
          Twitter: <a href="https://twitter.com/waiting7777" target="_blank" rel="noreferrer" className="text-red-main">@waiting7777</a>
        </div>
        <Seperator />
        <div className="font-medium text-2xl">
          Support 
        </div>
        <div className="mt-4">
          搜集資料需要咖啡提神，整理資料開發網頁需要時間及心力。
          <br/><br/>
          如果覺得本站資料對遊戲有幫助，歡迎請本站喝杯咖啡。
          <br/><br/>
          BTC: 3AKMsgUVU4r9EfntLeMhH2GcbGC3345P8H
          <br/>
          ETH: 0x714d7F319f54cF3087A0a90bed2704cc0d134715
        </div>
      </div>
    </>
  )
}

export default about