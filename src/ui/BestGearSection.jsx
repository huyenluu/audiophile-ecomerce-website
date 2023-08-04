function BestGearSection({className}) {
    return (
        <section className={`${className} flex flex-col items-center gap-y-8 mb-32 lg:flex-row-reverse lg:gap-16`}>
            <div className="w-full h-[18.75rem] rounded-lg
                                    bg-[url(/assets/shared/mobile/image-best-gear.jpg)] bg-no-repeat bg-cover
                                    sm:bg-[url(/assets/shared/tablet/image-best-gear.jpg)]
                                    lg:bg-[url(/assets/shared/desktop/image-best-gear.jpg)]
                                    lg:w-[33.75rem] lg:h-[36.75rem]"></div>
            <div className="max-w-[35.8rem] text-center lg:w-1/2 lg:max-w-[27.8rem] lg:text-left">
                <h3 className="text-heading-4 uppercase mb-8 lg:text-heading-2">Bringing you the <span className="text-orange">best</span> audio gear</h3>
                <p className="text-p">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    )
}

export default BestGearSection
