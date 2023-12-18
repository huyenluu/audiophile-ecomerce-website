import React from 'react';

interface BestGearSectionProps {
    className: string;
}

const BestGearSection: React.FC<BestGearSectionProps> = ({ className }) => {
    return (
        <section
            className={`${className} mb-32 flex flex-col items-center gap-y-8 lg:flex-row-reverse lg:gap-16`}
        >
            <div
                className="h-[18.75rem] w-full rounded-lg
                                        bg-[url(/assets/shared/mobile/image-best-gear.jpg)] bg-cover bg-no-repeat
                                        sm:bg-[url(/assets/shared/tablet/image-best-gear.jpg)]
                                        lg:h-[36.75rem]
                                        lg:w-[33.75rem] lg:bg-[url(/assets/shared/desktop/image-best-gear.jpg)]"
            ></div>
            <div className="max-w-[35.8rem] text-center lg:w-1/2 lg:max-w-[27.8rem] lg:text-left">
                <h3 className="mb-8 text-heading-4 uppercase lg:text-heading-2">
                    Bringing you the <span className="text-orange">best</span>{' '}
                    audio gear
                </h3>
                <p className="text-p">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    );
}

export default BestGearSection;
