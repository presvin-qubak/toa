
import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./PageTransition.css";

function PageTransition() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={400}
        classNames="page"
        unmountOnExit
      >
        <div className="page-wrapper">
          {currentOutlet}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default PageTransition;
