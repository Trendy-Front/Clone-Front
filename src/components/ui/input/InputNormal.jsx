import { Input } from "antd";

export default function InputNormal(props) {
    return (
        <>
            <Input
                size="large"
                disabled={props.disabled}
                value={props.value}
                onChange={props.onChange}
                type={props.type}
                className=""
            />
        </>
    );
}
