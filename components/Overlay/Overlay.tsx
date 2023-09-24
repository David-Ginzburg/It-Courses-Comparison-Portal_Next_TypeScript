import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Overlay.module.css";
import { OverlayProps } from "./Overlay.props";

export const Overlay = ({
  isLoading,
  children,
}: OverlayProps): null | createPortal => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalElement = document.createElement("div");
    portalElement.classList.add("overlay");
    overlayRef.current = portalElement;
    document.body.appendChild(portalElement);

    return () => {
      if (overlayRef.current) {
        document.body.removeChild(overlayRef.current);
      }
    };
  }, []);

  if (!isLoading || !overlayRef.current) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>{children}</div>,
    overlayRef.current
  );
};
