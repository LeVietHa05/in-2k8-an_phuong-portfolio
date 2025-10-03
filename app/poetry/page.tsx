'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import HRPpro from "../components/newHR";
import poems from "../../public/poetry.json"
import Link from "next/link";

interface Poems {
    year: number,
    data: {
        "title": string,
        "content": string,
    }[],
    cover: string
}


export default function Poetry() {
    const [activeSetPoem, setActiveSetPoem] = useState<Poems>(poems[0]);
    useEffect(() => {
        setActiveSetPoem(poems[0])
    }, [])
    const handleSelectYear = function (year: number) {
        const poem = poems.filter(e => e.year === year)[0]
        setActiveSetPoem(poem)
    }
    return (
        <div>
            <Image src={activeSetPoem.cover} className="w-full" alt="" width={1320} height={845}></Image>
            <div className="max-w-[1055px] mx-auto flex flex-col gap-12 mt-18">
                <div className="relative italic font-bold text-[96px] text-center">
                    <Link href={'/'} className="text-base absolute top-1/2 -translate-y-1/2 left-0 flex items-center hover:scale-110 ">
                        <Image src={'/arrow-circle-left.svg'} alt="" width={40} height={40} className=""></Image>
                        Go back
                    </Link>
                    <div>
                        (Poetry)
                    </div>
                </div>
                <HRPpro />
                {/* list of year here */}
                <div className="flex gap-4 items-center justify-between text-[36px]">
                    <div >
                        <button className={`text-[96px] cursor-pointer hover:scale-110`} onClick={() => handleSelectYear(activeSetPoem.year)}>{activeSetPoem.year}</button>
                    </div>
                    <div className="flex gap-6 text-[#6D6842]">
                        {poems.map((each, i) => {
                            if (activeSetPoem.year === each.year) return <button key={i}></button>;
                            return (
                                <button key={i} className={`cursor-pointer hover:scale-110 border rounded-full p-2 px-6`} onClick={() => handleSelectYear(each.year)}>{each.year}</button>
                            )
                        })}
                    </div>
                </div>
                <HRPpro />
                <div className="flex flex-wrap justify-between italic">
                    {activeSetPoem.data.map((each, a) => {
                        return (
                            <div key={a} className="w-1/2 pl-4 mt-4 h-fit">
                                <div className="text-[32px] font-bold ">{each.title}</div>
                                <div className={`text-base tracking-tighter`}>{each.content.split("<abc>").map((line, iex) => (
                                    <span key={iex}>
                                        {line}
                                        <br />
                                    </span>
                                ))}</div>
                            </div>
                        )
                    })}
                </div>
                <HRPpro />
                <div className="flex justify-center gap-6 text-[#6D6842] text-[36px]">
                    {poems.map((each, i) => {
                        if (activeSetPoem.year === each.year) return <button key={i}></button>;
                        return (
                            <button key={i} className={`cursor-pointer hover:scale-110 border rounded-full p-2 px-6`} onClick={() => handleSelectYear(each.year)}>{each.year}</button>
                        )
                    })}
                </div>
                <HRPpro />
            </div>
        </div>
    )
}