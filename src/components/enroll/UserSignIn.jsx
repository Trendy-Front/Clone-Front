import InputNormal from "@/components/ui/input/InputNormal";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function UserSignIn() {
    const navigate = useNavigate();
    return (
        <>
            <div className="self-center p-10">
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
            <div className="h-[48px] border-b"></div>

            <div className="mb-10 w-full pt-[48px]">
                <Button
                    type="default"
                    size="large"
                    className=" !h-[54px] w-full rounded-[5px] border bg-white "
                    onClick={() => navigate("/signup")}
                >
                    <span className="text-base font-semibold tracking-[-0.05em] text-[#0066ff]">
                        이메일로 회원가입
                    </span>
                </Button>
                <Button
                    type="default"
                    size="large"
                    className=" !h-[54px] w-full  border-transparent bg-white shadow-none "
                >
                    <span className="text-base font-semibold tracking-[-0.05em] text-[#9f9fa2]">
                        비밀번호 재설정
                    </span>
                </Button>
            </div>
        </>
    );
}
