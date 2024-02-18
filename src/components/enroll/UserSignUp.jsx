import InputNormal from "@/components/ui/input/InputNormal";
import { Button } from "antd";
import { updateUserInfo } from "@/reducer/sign";
import { useState } from "react";
import { Map } from "immutable";
import { useDispatch } from "react-redux";

export default function UserSignUp() {
    const dispatch = useDispatch(); // useDispatch 훅을 사용하여 dispatch 함수 가져오기

    const [inputs, setInputs] = useState(
        Map({
            email: "",
            name: "",
            phone: "",
            password: "",
        })
    );
    // console.log(inputs.get("email"));

    const onChange = (e) => {
        const { name, value } = e.target;
        let inputValue = value.trim();
        switch (name) {
            case "email":
                //email로 format하는 로직 추가
                break;
            case "name":
                //name format하는 로직 추가
                break;
            case "phone":
                //phone format하는 로직 추가
                break;
            case "password":
                //password format하는 로직 추가
                break;
        }
        setInputs((prev) => prev.set(name, inputValue));
    };

    const handleSignUp = () => {
        dispatch(updateUserInfo(inputs.toJS())); // updateUserInfo 액션을 dispatch하여 사용자 정보 업데이트
    };

    return (
        <>
            <div className="self-center p-10">
                <p className="text-[28px] font-bold leading-6 tracking-[-0.1em]">
                    회원가입
                </p>
            </div>
            <div className="flex flex-col gap-y-[30px]">
                <div>
                    <div className="mb-2 text-left text-sm  font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        이메일
                    </div>
                    <div>
                        <InputNormal
                            placeholder="이메일을 입력해주세요."
                            value={inputs.get("email")}
                            onChange={onChange}
                            name="email"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-left !text-sm font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        이름
                    </div>
                    <div>
                        <InputNormal
                            placeholder="이름을 입력해주세요."
                            value={inputs.get("name")}
                            onChange={onChange}
                            name="name"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-left !text-sm font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        휴대폰번호
                    </div>
                    <div>
                        <InputNormal
                            placeholder="(예시) 01012345678"
                            value={inputs.get("phone")}
                            onChange={onChange}
                            name="phone"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-left !text-sm font-semibold tracking-[-0.05em] text-[#9a9a9d]">
                        비밀번호
                    </div>
                    <div>
                        <InputNormal
                            placeholder="비밀번호를 입력해주세요"
                            value={inputs.get("password")}
                            onChange={onChange}
                            name="password"
                        />
                    </div>
                    <div className="mt-2">
                        <InputNormal placeholder="비밀번호를 다시 한번 입력해주세요" />
                    </div>
                    <div className="mt-2">
                        <span className="text-[13px] leading-[18px]  tracking-[-0.05em]">
                            영문 대소문자, 숫자, 특수문자를 3가지 이상으로
                            조합해 8자 이상 16자 이하로 입력해주세요.
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <Button
                        type="primary"
                        size="large"
                        className="!h-[54px] w-full rounded-[5px] border"
                        onClick={handleSignUp}
                    >
                        가입하기
                    </Button>
                </div>
            </div>
            <div className="h-[48px] border-b"></div>
        </>
    );
}
