import { NavLink } from "react-router-dom";
//Outlet
export const DesignsGalleryPage = () => {
  const designs = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex justify-center gap-3 ">
      {designs.map((design) => (
        <NavLink
          key={design}
          to={`/designs/${design}`}
          className={({ isActive }) => {
            return isActive ? "text-primary-700" : "text-gray-500";
          }}
        >
          Design {design}
        </NavLink>
      ))}
      {/* <Outlet /> */}
    </div>
  );
};

export default DesignsGalleryPage;