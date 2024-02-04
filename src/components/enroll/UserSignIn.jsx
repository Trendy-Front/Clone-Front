import InputNormal from "@/components/ui/input/InputNormal";
import { Button } from "antd";

export default function UserSignIn() {
    const d = () => {};

    const a = () => {};
    return (
        <>
            <div className="self-center pb-10">
                <p className="text-[28px] font-bold leading-6 tracking-[-0.1em]">
                    이메일로 로그인
                </p>
            </div>
            <div className="flex flex-col gap-y-[30px]">
                <div>
                    <div className="mb-2 text-left text-sm  font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        이메일
                    </div>
                    <div>
                        <InputNormal />
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-left !text-sm font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        비밀번호
                    </div>
                    <div>
                        <InputNormal />
                    </div>
                </div>
                <div className="w-full">
                    <Button
                        type="primary"
                        size="large"
                        className="!h-[54px] w-full rounded-[5px] border "
                    >
                        로그인
                    </Button>
                </div>
            </div>
        </>
    );
}
