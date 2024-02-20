import React, { useRef, useEffect } from 'react';

function MyComponentWithRef() {
    const myElementRef = useRef(null);

    useEffect(() => {
        const myElement = myElementRef.current;
        myElement.addEventListener('custom-event', handleCustomEvent);

        return () => {
            myElement.removeEventListener('custom-event', handleCustomEvent);
        };
    }, []);

    const handleCustomEvent = (event) => {
        console.log('Custom event received:', event.detail);
    };

    return <div ref={myElementRef}>My Element</div>;
}

export default MyComponentWithRef;
