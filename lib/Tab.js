import React, { memo } from "react";

function Tab(props) {
  const {children} = props;
  return (
    <>{children}</>
  )
}
  
export default memo(Tab);