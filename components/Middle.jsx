import React from "react";
import Image from "next/image";
import article1 from '@/assets/images/article1.jpg';
import article2 from '@/assets/images/article2.jpg';
import article3 from '@/assets/images/article3.jpg';
import article4 from '@/assets/images/article4.jpg';

const Middle = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-black md:w-[60%] font-inter">
  <div className="grid grid-cols-1 gap-4">
    {/* Article 1 */}
    <div className="border border-darkblue rounded-lg p-4 flex flex-col items-start">
      <h2 className="text-lg font-bold mb-2">Canada government launches consultation on textile plastic pollution</h2>
      <div className="flex">
        <Image
          src={article1}
          alt="Article 1 Image"
          className="w-[20%] rounded-lg mr-4"
        />
        <p className="text-sm">
        Canadian government is seeking feedback on a proposed roadmap for addressing plastic waste and pollution from the textile and apparel sector.
        </p>
      </div>
    </div>
    {/* Article 2 */}
    <div className="border border-darkblue rounded-lg p-4 flex flex-col items-start">
      <h2 className="text-lg font-bold mb-2">Pakistan's textile exports rise nominally in FY24</h2>
      <div className="flex">
        <Image
          src={article2}
          alt="Article 2 Image"
          className="w-[20%] rounded-lg mr-4"
        />
        <p className="text-sm">
        Pakistan’s textile exports increased by 0.93 per cent in the fiscal year 2023-24 to $16.65 billion from $16.50 billion recorded in the previous year.
        </p>
      </div>
    </div>
    {/* Article 3 */}
    <div className="border border-darkblue rounded-lg p-4 flex flex-col items-start">
      <h2 className="text-lg font-bold mb-2">Pakistani textile firms have productive interactions in New York</h2>
      <div className="flex">
        <Image
          src={article3}
          alt="Article 3 Image"
          className="w-[20%] rounded-lg mr-4"
        />
        <p className="text-sm">
        Seven Pakistani companies were among over 600 exhibitors from around the world showcasing their textile products at TEXWORLD-2024 in New York.
        </p>
      </div>
    </div>
    {/* Article 4 */}
    <div className="border border-darkblue rounded-lg p-4 flex flex-col items-start">
      <h2 className="text-lg font-bold mb-2">Punjab govt to prohibit substandard boiler oil</h2>
      <div className="flex">
        <Image
          src={article4}
          alt="Article 4 Image"
          className="w-[20%] rounded-lg mr-4"
        />
        <p className="text-sm">
        Punjab has approved an amendment to the Boilers and Pressure Vessels Ordinance of 2002 to prohibit the use of substandard oil in the heating equipment.
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Middle;
