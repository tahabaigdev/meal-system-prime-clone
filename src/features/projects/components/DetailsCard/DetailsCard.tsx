import { NavLink } from "react-router-dom";
import { detailsCardData } from "../../constant";

const DetailsCard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-[1.6rem] gap-y-[3.2rem]">
      {detailsCardData.map((item, idx) => (
        <NavLink key={idx} to={item.link}>
          <div className="shadow-01 h-[18rem] overflow-hidden rounded-[.4rem]">
            <div
              className={`flex items-center justify-between p-[1rem] text-white ${item.bgColor}`}
            >
              <h4 className="text-[1.6rem] font-bold">{item.title}</h4>
              <item.icon className="size-[1.8rem]" />
            </div>
            <div className="p-[1rem]">
              <p className="max-w-[21rem] text-[1.2rem] leading-[1.6rem]">
                Latest modified on {item.lastModified} by {item.author}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default DetailsCard;
