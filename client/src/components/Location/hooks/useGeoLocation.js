import { useEffect, useState } from "react";

function useGeoLocation() {
    const [location, setLocation] = useState({
        loaded: false,
        cordinates: { lat: "", lng: "" }, turnOn: false
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            cordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error
        });
    }

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Gelocation not supported"
            });
        }
        // console.dir(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }, []);

    return location;
}

export default useGeoLocation