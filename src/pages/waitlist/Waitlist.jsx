import { Header } from "./components/Header";
import { Information } from "./components/Information";

export const Waitlist = () => {
  return (
    <div className="relative py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div>
        <Header />
      </div>
      <div className="pt-14">
        <Information />
      </div>
    </div>
  );
};
