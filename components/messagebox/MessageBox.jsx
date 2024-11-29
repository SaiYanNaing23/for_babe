"use client"
import React, { useState } from 'react';

const MessageBox = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const loadTawkTo = () => {
        if (!isLoaded) {
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6682bfe9eaf3bd8d4d16d8d8/1i1nbrab5'; // your script URL
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin', '*');
              s0.parentNode.insertBefore(s1, s0);
            })();
            setIsLoaded(true);
        }
    };
    return (
        <div>
        <button onClick={loadTawkTo}>
          {isLoaded ? 'Messages' : 'Messages'}
        </button>
      </div>
    )
}

export default MessageBox
