import { Non_AuthRoutes } from "../../../route/RouteOptions";
import { useNavigate } from "react-router-dom";
import Hand_holding_phone from "../../../common/images/phone_hand.png";

export const Header = () => {
  const navigate = useNavigate();
  const gotoThankYou = () => {
    navigate(Non_AuthRoutes.thankyou);
  };
  return (
    <div className="relative flex flex-col py-16 lg:pt-14 lg:flex-col lg:pb-0 h-screen">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="lg:pr-5 lg:pt-10">
          <div className="max-w-xl">
            <div>
              <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-primaryOne uppercase rounded-full"></p>
            </div>
            <h2 className="max-w-lg mb-3 font-sans text-2xl font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
              Invest in Pre-construction
            </h2>
            <h2 className="max-w-lg mb-3 font-sans text-2xl font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
              Single/Detached Family Homes
            </h2>
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-textSecondaryColor sm:text-4xl sm:leading-none">
              and TownHouses starting at{" "}
              <span className="tex-primaryOne">$1</span>
            </h2>
            {/* <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p> */}
            <div className="flex">
              <input />
              <input />
            </div>
          </div>
          {/* <button
            onClick={gotoThankYou}
            className="flex flex-col items-center md:flex-row bg-orangeCustom p-4 text-white font-semibold text-1xl rounded"
          >
            Join Waitlist Now
          </button> */}
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={Hand_holding_phone}
          alt=""
        />
      </div>
    </div>
  );
};
