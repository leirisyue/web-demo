import Image from 'next/image'
import React from 'react'

const FriendRequestList = () => {
  return (
    <>
      {/* {optimisticRequests.map((request) => ( */}
        <div className="flex items-center justify-between" key="">
          <div className="flex items-center gap-4">
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* <span className="font-semibold">
              {request.sender.name && request.sender.surname
                ? request.sender.name + " " + request.sender.surname
                : request.sender.username}
            </span> */}
          </div>
          <div className="flex gap-3 justify-end">
            <form action="">
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action="">
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      {/* ))} */}
    </>
  )
}

export default FriendRequestList