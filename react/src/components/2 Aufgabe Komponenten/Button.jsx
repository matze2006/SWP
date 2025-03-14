import React from 'react'

export default function Button({Text}) {
  return (
    <div class="border w-50 h-25 content-center justify-center">
          <div className="bg-green-400 hover:bg-green-600 justify-self-center content-self-center pl-5 pr-5">{Text}</div>
    </div>
  );
}
