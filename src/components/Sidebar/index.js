import * as images from "../../assets/images"
import './style.scss';

function Sidebar({selectedItem, setSelectedItem}) {

  const menu = [
    {img: images.campaigns, title:"Campaigns"},
    {img: images.setting, title:"Settings"},

  ]
    return (
        <div className="Sidebar">
          {menu.map((item, index) =>
            <div className={`item ${selectedItem === index + 1 ? "active" : ""}`} onClick={()=> setSelectedItem(index + 1)}>
              <img src={item.img} className="icon24"/>
              <span>{item.title}</span>
            </div>
          )}
        </div>
    );
}

export default Sidebar;
