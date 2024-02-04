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
                placeholder={props.placeholder}
                className="h-12 w-[400px] text-base"
            />
            {props.validationText && (
                <div className="w-full text-left">
                    <p className="ml-[1px] mt-[5px] h-4 text-xs leading-[15.6px] text-[#FF0000]">
                        {props.validationText}
                    </p>
                </div>
            )}
        </>
    );
}
