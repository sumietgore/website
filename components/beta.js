"use client"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react";
import { Button } from "./ui/button";

export default function Beta() {
    const { toast } = useToast()
    useEffect(() => {
        toast({
            title: "Ummm! Something you should know!",
            description: "This site is still in beta version. I will keep updating it as I get time.",
        })
    }, []);
    return <></>

}