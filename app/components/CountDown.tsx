import { useEffect, useState } from "react";


const CountDown = () => {
    const [value, setValue] = useState<number>(50);
    useEffect(() => {
        setTimeout(() => {
            setValue(value-1)
        }, 1000)
    }, []);
    return(
        <div className="mt-20 self-center">
            <div>
                <span>Profiter de nos offres avant la fin de la promotion</span>
            </div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span >{value}</span>
                    </span>
                    jours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span >{value}</span>
                    </span>
                    heures
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span >{value}</span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                    <span >{value}</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    )
}

export default CountDown;