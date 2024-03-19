import React from 'react';

export default function Cards({content , name , school}) {
  return (
    <>
      <center
          className="h-[150px] border-2 border-black sm:p-3 rounded-xl text-wrap"
          // Set max-width for card
        >
          <div className="text-black text-sm sm:text-balance font-semibold italic text-wrap sm:mx-4">
            "{content}"
          </div>
          <div className="text-bold justify-end  text-gradient italic">By {name}</div>
          <div className="text-bold text-black italic">From {school}</div>
      </center>
    </>
  );
}
