import House_Invest from "../../../common/images/house_invest_big.jpeg";
import House_I from "../../../common/images/house_invest_1.jpeg";

export const Information = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 text-textSecondaryColor sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <p className="mb-1 text-3xl tracking-wide font-bold uppercase md:mb-2">
          join us to Distrupt the industry
        </p>
        <p className="text-base pt-3 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={House_Invest}
            alt=""
          />
          <h5 className="mb-2 text-xl text-textSecondaryColor font-bold leading-none sm:text-2xl">
            Easy Entry for Anyone
          </h5>
          <p className="text-textSecondaryColor">
            O for awesome, this chocka full cuzzie is as rip-off as a cracker.
            Meanwhile, in behind the bicycle shed, Hercules Morse.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src={House_I}
            alt=""
          />
          <h5 className="mb-2 text-xl text-textSecondaryColor font-bold leading-none sm:text-2xl">
            Faster Returns
          </h5>
          <p className="text-textSecondaryColor">
            I'll be sure to note that in my log. Smooth as an android's bottom,
            eh, Data? When has justice ever been as simple as a rule book?
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <h5 className="mb-2 text-xl text-textSecondaryColor font-bold leading-none sm:text-2xl">
            Expert knowledge not needed
          </h5>
          <p className="text-textSecondaryColor">
            Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            suscipit leo. Carpe diem vulputate est nec commodo rutrum.
          </p>
        </div>
      </div>
    </div>
  );
};
