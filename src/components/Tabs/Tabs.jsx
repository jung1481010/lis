import React, { useState } from 'react';
import './Tabs.css';
const Tabs = ({ tabs = [], width }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div className="tabs" style={{ width: width }}>
      <div className="tabs__nav">
        {tabs.length === 0 ? (
          <div className="tabs">
            <div>No Tabs</div>
          </div>
        ) : (
          tabs.map((tab, index) => (
            <label
              key={index}
              className={
                index === activeTabIndex
                  ? 'tabs__tab tabs__tab--active'
                  : 'tabs__tab'
              }
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </label>
          ))
        )}
      </div>
      <div className="tabs__content">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
