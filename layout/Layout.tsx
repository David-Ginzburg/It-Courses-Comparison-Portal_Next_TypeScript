import { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import cn from 'classnames';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};