import Image from "next/image";

import MenuIcon from "@/public/icons/menu.svg";
import LogoMark from "@/public/icons/logomark.svg";
import SearchIcon from "@/public/icons/search.svg";
import GridIcon from "@/public/icons/app-grid.svg";
import ProfileImg from "@/public/images/profile.png";
import FinTrackWordmark from "@/public/icons/fintrack-wordmark.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 md:px-6 lg:px-12 h-16 bg-[#FCFDFD]">
      <div className="flex items-center gap-7">
        <Image src={MenuIcon} alt="Menu" width={24} height={24} priority />

        <div className="flex items-center gap-1">
          <Image
            src={LogoMark}
            alt="Logo Mark"
            width={32}
            height={32}
            priority
          />
          <Image
            src={FinTrackWordmark}
            alt="FinTrack"
            width={76}
            height={18}
            priority
          />
        </div>
      </div>

      <div className="flex items-center gap-7">
        <Image src={SearchIcon} alt="Search" width={24} height={24} priority />
        <Image src={GridIcon} alt="App Grid" width={24} height={24} priority />
        <Image
          src={ProfileImg}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover"
          priority
        />
      </div>
    </header>
  );
}
