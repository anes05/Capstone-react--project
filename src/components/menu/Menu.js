import './Menu.scss';

import { menuData } from './menuData';

export default function Menu({ menuItemNumber }) {
    const finalMenuData = menuItemNumber ? menuData.slice(0, menuItemNumber) : menuData;

    return (
        <div className="menuComponent">
            <h1 className="heading">Menu</h1>

            <div className="menuItemsContainer">
                {finalMenuData.map((data, index) => (
                    <div key={index} className="menuItem">
                        <img src={data.image} className="image" alt={data.title} />
                        <h3 className="title">{data.title}</h3>
                        <p className="details">{data.details}</p>
                        <p className="price">{data.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
