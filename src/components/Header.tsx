import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-3 justify-center">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "text-primary-700" : "text-gray-500";
        }}
      >
        Главная
      </NavLink>
      <NavLink
        to="/designs"
        className={({ isActive }) => {
          return isActive ? "text-primary-700" : "text-gray-500";
        }}
      >
        Каталог дизайнов
      </NavLink>
      <NavLink
        to="/constructor"
        className={({ isActive }) => {
          return isActive ? "text-primary-700" : "text-gray-500";
        }}
      >
        Конструктор дизайна ногтей
      </NavLink>
      <NavLink
        to="/fitting"
        className={({ isActive }) => {
          return isActive ? "text-primary-700" : "text-gray-500";
        }}
      >
        Виртуальная примерка
      </NavLink>
    </div>
  );
};

export default Header;
