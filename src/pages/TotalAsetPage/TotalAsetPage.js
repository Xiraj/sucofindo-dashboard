import React, { useState } from "react";
import CardAset from "../../components/CardAset/CardAset";
import CardPengguna from "../../components/CardPengguna/CardPengguna";

export default function TotalAsetPage () {
    const [open] = useState(true);
    return(
        <div className="bg-[#f3f3f3] w-full h-full">
            <div className={`${ open ? 'pt-[2.5rem] ' : 'justify-center items-center' }`}>
                <CardAset />
                <CardPengguna/>
            </div>
        </div>
    );
}