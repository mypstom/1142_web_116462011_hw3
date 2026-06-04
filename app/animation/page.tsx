"use client"

export default function Animation() {

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">


        <div className="relative">
          <div className="w-[80px] h-[80px] bg-red-400 hover:bg-red-600 rounded-2xl hover:translate-y-[3px] cursor-pointer
          text-white flex items-center justify-center transition-all duration-600
          shadow-2xl hover:shadow-md
          ">
            <p>Touch Me!</p>
          </div>

          <div className="absolute top-[-40px] right-[-40px] right-0 animate-[rotate_1s_linear_infinite] scale-[0.3]">
            {/* 向日葵 */}
            <div className="z-10 relative">
              <div className="h-[80px] w-[80px] bg-orange-950 rounded-full"></div>
            </div>

            <div className="absolute top-[-42px] right-[20px] rotate-0 z-0">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[-28px] right-[-20px] rotate-45">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[10px] right-[-36px] rotate-90">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[46px] right-[-14px] rotate-135">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[60px] right-[20px] rotate-180">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[46px] right-[56px] rotate-225">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[10px] right-[78px] rotate-270">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

            <div className="absolute top-[-28px] right-[62px] rotate-315">
              <div className="h-[60px] w-[40px] bg-yellow-400 rounded-full"></div>
            </div>

          </div>
        
        </div>

        


      </div>
    </>
  );
}

