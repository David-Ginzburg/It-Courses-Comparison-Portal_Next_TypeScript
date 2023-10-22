import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../Logo.svg";
import { Search } from "../../components";
import Link from "next/link";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>

      <Search />
      <Menu />
    </div>
  );
};
