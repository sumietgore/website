"use client"
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Beta() {
    const { toast } = useToast()
    const [loaded, setLoaded] = useState(false)

    if (typeof window !== 'undefined') {
        if (sessionStorage.getItem("warningShowed") !== null) {
            // console.log(true)
        } else {
            if (!loaded) {
                setLoaded(true)
                toast({
                    title: "Ummmm, Explore with caution!",
                    description: "My site is in beta, but I am cooking up something awesome.",
                    variant: "destructive"
                })
            }
            sessionStorage.setItem("warningShowed", true)
        }

    }

    // useEffect(() => {
    //     console.log("Loaded")


    //     setLoaded(true)
    // }, [loaded]);

    return <div></div>

}