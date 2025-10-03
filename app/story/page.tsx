'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import HRPpro from "../components/newHR";
import stories from "../../public/story.json"
import Link from "next/link";

interface Stoties {
    title: string,
    content: string,
    cover: string
}


export default function Story() {
    const [activeStory, setactiveStory] = useState<Stoties | null>();

    const handleSelectStory = function (index: number) {
        setactiveStory(stories[index])
    }
    return (
        <div>
            <Image src={activeStory ? activeStory.cover : '/cover/story.png'} className="w-full" alt="" width={1320} height={845}></Image>
            <div className="max-w-[1055px] mx-auto flex flex-col gap-12 mt-18">
                <div className="relative italic font-bold text-[96px] text-center">
                    <Link href={'/'} className="text-base absolute top-1/2 -translate-y-1/2 left-0 flex items-center hover:scale-110 ">
                        <Image src={'/arrow-circle-left.svg'} alt="" width={40} height={40} className=""></Image>
                        Go back
                    </Link>
                    <div>
                        (Short Stories)
                    </div>
                </div>
                <HRPpro />
                {/* list of story */}
                {!activeStory && <div>
                    {
                        stories.map((each, i) => (
                            <div key={i}>
                                <HRPpro />
                                <div className="flex items-center justify-between text-[64px] italic py-2">
                                    <div>
                                        {each.title}
                                    </div>
                                    <div onClick={() => handleSelectStory(i)} className="shrink-0 cursor-pointer hover:scale-110">
                                        <Image src={'/arrow-circle-right.svg'} alt="" width={60} height={60}></Image>
                                    </div>
                                </div>
                                <HRPpro />
                            </div>
                        ))
                    }
                </div>
                }

                {/* story  */}
                {activeStory && (
                    <div>
                        <HRPpro />
                        <div className="flex items-center justify-between text-[64px] italic py-2">
                            <div>
                                {activeStory.title}
                            </div>
                            <div onClick={() => setactiveStory(null)} className="shrink-0 cursor-pointer hover:scale-110">
                                <Image src={'/arrow-circle-left.svg'} alt="" width={60} height={60}></Image>
                            </div>
                        </div>
                        <HRPpro />
                        {/* content */}
                        <div className="mt-10 italic">
                            {activeStory.content.split("-abc-").map((each, i) => (
                                <div key={i}>
                                    {each}
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}