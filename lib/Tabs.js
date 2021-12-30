import React, { memo, useState } from "react";
import "./Tab.css";

function Tabs(props) {
  const { children, backgroundColor, borderColor } = props;
  const [ tabs, setTabs ] = useState(children);

  let activeIndex = tabs.findIndex(tab => tab.props.active) || 0;
  activeIndex = (activeIndex < 0) ? 0 : activeIndex;

  const [ currentTab, setCurrentTab ] = useState(activeIndex);

  return (
    <>
    <div className="header">
      <h1>React Tab UI</h1>
      <p>Minimal Tab Design</p>
      <button className="github-btn"><a href="https://github.com/Amishakumari544/react-tab-ui">View on Github</a></button>
      </div>
    <div className="tab">
     {tabs && tabs.map((tab, tabIndex) => 
        <span
          className="tabs"
          style={
            {
              backgroundColor: currentTab===tabIndex && backgroundColor,
              borderBottom: currentTab===tabIndex && `2px solid ${borderColor}`
            }
          }
          onClick={() => setCurrentTab(tabIndex)}
          key={tabIndex}
          >
            {tab.props.title}
        </span>
      )}
      <p>{tabs[currentTab].props.children}</p>
    </div>
    <div class="footer">
  <p class="footer-text-left">
    <p class="menu">Thank you for visiting here 🙂 stay tune for more designing Tabs!</p>
  </p>
</div>
    </>
  )
}
export default memo(Tabs);