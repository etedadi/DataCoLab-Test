import {useState} from "react";
import Search from "./modules/Search";
import GoogleDrive from "./modules/GoogleDrive";
import Hotspot from "./modules/Hotspot";
import Pipedrive from "./modules/Pipedrive";
import Settings from "./modules/Settings";
import * as images from "../../assets/images";
import './style.scss';

function Content({selectedItem, setSelectedItem}) {

  const [selectedTab, setSelectedTab] = useState(0);
  const [value, setValue] = useState('');
  const Tabs = [<GoogleDrive/>, <Hotspot/>, <Pipedrive/>]
  const menu = [
    {img: images.googleDrive, title: "Google Drive"},
    {img: images.hubspot, title: "Hobspot"},
    {img: images.p, title: "Pipedrive"},
  ]
  const handleSearch = (e) => {
    setValue(e.target.value)
    if (selectedItem !== 0) {
      setSelectedItem(0)
    }
  }

  return (
    <div className="Content">
      <div className="head">
        <div className="left">
          {selectedItem === 1 && menu.map((item, index) =>
            <div
              className={`item ${selectedTab === index ? "active" : ""}`}
              onClick={() => (setSelectedTab(index))}
            >
              <img src={item.img} className="icon24"/>
              <span>{item.title}</span>
            </div>
          )}
        </div>
        <div className="search">
          <img src={images.search}/>
          <input
            value={value}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="main-content">
        {selectedItem === 1 ? Tabs[selectedTab]
          : selectedItem === 2 ? <Settings/>
            : <Search text={value}/>
        }
      </div>
    </div>
  );
}

export default Content;
