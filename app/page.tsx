import Image from "next/image";
import Link from "next/link";
import HRPpro from "./components/newHR";

export default function Home() {
  return (
    <div className="">
      <Image src={'/cover/home.png'} className="w-full" alt="" width={1320} height={845}></Image>
      <div className="max-w-[1055px] mx-auto flex flex-col gap-24">
        {/* name */}
        <div className="italic font-bold text-[96px] text-center">
          An Phuong Nguyen
        </div>
        {/* introduction */}
        <div className="w-3/4 mx-auto text-center italic text-lg">
          <div className=" ">
            I’m An Phuong, a senior based in Hanoi, Vietnam. My poetry is a result of my constant and ever-ongoing introspection and evolution. It is under Hanoi skies and in Hanoi’s dust-ridden air that these works have been tenderly cultivated. I believe that poetry is, above all, a deeply felt question, one that I extend to myself and to you, the reader.
          </div>
          <br />
          <div>
            Thank you for being here.
          </div>
        </div>
        <HRPpro />
        {/* some different intro? */}
        <div className=" mx-auto text-center italic text-lg">
          <div className="italic font-bold text-[96px] text-center">
            In Vere Vitae
          </div>
          <div className="flex flex-col gap-6">
            <div>
              A poet is, in their essence, a cicada. It lays in darkness for years, its patient becoming slow, tender. Then it emerges, clumsy and new, singing its brief, urgent life into the heat. Many find its incessant cries annoying, incorrigible, a nebulous thing only constant in its cacophony. The poet-cicada knows its season is brief. It sings not because it must, but because it can, because the earth has finally released it from its dark patience. It will die, as it must. The next season, then the next, cicadas after cicadas will come and die as their predecessors have. I am just one in these millions of bugs. I am only lucky enough to have my husk land on the petal of a flower. For a cicada, there are no seasons but spring and summer.
            </div>
            <div>
              This portfolio hopes to bring to you the most brilliant flowers blooming in the golden spring of my life.
            </div>
            <div>
              Carmina sunt flores in vere vitae meae.
            </div>
          </div>
        </div>
        <HRPpro />
        {/* button to other pages */}

        <div className="flex justify-around text-[#6D6842] text-[36px] font-bold italic">
          <Link href={'/poetry'} className="border rounded-full px-6 py-2 hover:scale-110 ">(Poetry)</Link>
          <Link href={'/story'} className="border rounded-full px-6 py-2 hover:scale-110 ">(Short Stories)</Link>
        </div>

        <HRPpro />
      </div>
    </div>
  );
}
