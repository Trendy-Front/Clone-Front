import Sidebar from "@/components/layout/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;
export default function Index(props) {
    return (
        <>
            <Layout>
                <Sidebar navigation={props.navigation} />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}
