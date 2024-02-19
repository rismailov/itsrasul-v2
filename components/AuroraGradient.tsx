export const AuroraGradient = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
                <div
                    className="absolute -top-8 left-0 right-0 -mt-28 flex -rotate-[60deg] justify-center"
                    style={{
                        filter: 'blur(30px) saturate(7) hue-rotate(0deg)',
                        opacity: 0.5,
                    }}
                >
                    <div className="h-60 w-8 bg-indigo-500"></div>
                    <div className="h-80 w-10 bg-blue-500"></div>
                    <div className="h-96 w-12 bg-emerald-500"></div>
                </div>
            </div>
        </div>
    )
}
