import { Table } from "antd";
import { Link } from "react-router-dom";

const Status = {
    Ing: "진행 중",
    NotStarted: "진행 전",
    Complete: "완료",
};
const columns = [
    {
        title: "화면명",
        dataIndex: "screen",
        key: "screen",
        render: (_, record) => (
            <>
                {record.status === Status.NotStarted ? (
                    <p className="cursor-not-allowed">{record.screen}</p>
                ) : (
                    <Link to={record.key}>{record.screen}</Link>
                )}
            </>
        ),
    },
    {
        title: "담당자",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "상태",
        dataIndex: "status",
        key: "status",
    },
];
const data = [
    {
        key: "/signup",
        name: "정현우",
        status: Status.Ing,
        screen: "회원가입",
    },
    {
        key: "/signin",
        name: "정현우",
        status: Status.Ing,
        screen: "로그인",
    },
];

const Home = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="m-10"
        />
    );
};

export default Home;
