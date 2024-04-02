import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";

export const NAV_ITEMS = [
  { name: "Home", icon: IoMdHome, redirect: '/home' },
  { name: "Search", icon: IoSearch, redirect: '/search' },
  { name: "Explore", icon: MdOutlineExplore, redirect: '/explore' },
  { name: "Reels", icon: BiMoviePlay, redirect: '/reels' },
  { name: "Messages", icon: RiMessengerFill, redirect: '/messages' },
  { name: "Notification", icon: FaRegHeart, redirect: '/notification' },
  { name: "Create", icon: FaRegSquarePlus, redirect: '/create' },
]