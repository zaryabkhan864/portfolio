import React from "react";
import { motion } from "framer-motion";
import ms1 from "../images/ms1.png";
import ms2 from "../images/ms2.png";
import ms3 from "../images/ms3.png";
import ms4 from "../images/ms4.png";

const users = [
  {
    username: "@brook_sim",
    items: 206,
    collections: 12,
    eth: "4.78 ETH",
    avatar: ms1,
    position: "top-[0%] left-[5%]",
    delay: 0,
  },
  {
    username: "@marvinmckin",
    items: 479,
    collections: 24,
    eth: "7.55 ETH",
    avatar: ms2,
    position: "top-[20%] right-[10%]",
    delay: 0.3,
  },
  {
    username: "@esther_howard",
    items: 387,
    collections: 10,
    eth: "5.31 ETH",
    avatar: ms3,
    position: "top-[40%] left-[5%]",
    delay: 0.6,
  },
  {
    username: "@brook_singer",
    items: 24,
    collections: 5,
    eth: "3.12 ETH",
    avatar: ms4,
    position: "top-[60%] right-[10%]",
    delay: 0.9,
  },
  {
    username: "@brook_smith",
    items: 22,
    collections: 9,
    eth: "2.99 ETH",
    avatar: "https://i.pravatar.cc/100?img=1",
    position: "top-[80%] left-[5%]",
    delay: 1.2,
  },
];

const FloatingUsers = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden ">
      {users.map((user, index) => (
        <motion.div
          key={index}
          className={`absolute ${user.position}  bg-white shadow-xl rounded-2xl p-1 sm:p-4 md:p-4 lg:p-4 xl:p-2 2xl:p-4 3xl:p-2 4xl:p-4 flex items-center gap-4`}
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            delay: user.delay,
            ease: "easeInOut",
          }}
        >
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-14 h-14 xs:w-14 xs:h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 3xl:w-12 3xl:h-12 4xl:w-14 4xl:h-14  rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-md sm:text-md md:text-md lg:text-md xl:text-sm 2xl:text-md 3xl:text-sm 4xl:text-md font-poppins font-semibold text-black">
              {user.username}
            </div>
            <div className="flex flex-col sm:flex-row  text-gray-500 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-xs 2xl:text-sm 3xl:text-xs 4xl:text-sm"  >
                <div className="pr-2 ">
                🗂 Items {user.items} 
                </div>
                <div className="pl-2">
                📁 Collection {user.collections}
                </div>
             
            </div>
          </div>
          <div className="text-purple-500 font-bold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-xs 2xl:text-xs 3xl:text-xs 4xl:text-sm">{user.eth}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingUsers;
