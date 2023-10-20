import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import Logo from "../Logo.svg";
import { ButtonIcon } from "../../components";
import { Variants, motion, useReducedMotion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app.context";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { isServerComponentStartLoading } = useContext(AppContext);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsOpened(false);
  }, [isServerComponentStartLoading]);

  const variants: Variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
