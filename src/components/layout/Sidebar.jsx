import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

export default function Sidebar(props) {
    const items = [
        "home",
        "search",
        "alarm",
        "message",
        "bookmark",
        "community",
        "myPage",
        "more",
    ].map((element, index) => ({
        key: String(index + 1),
        label: `${element}`,
    }));

    return (
        <>
            <Sider>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["0"]}
                    items={props.navigation}
                />
            </Sider>
        </>
    );
}
