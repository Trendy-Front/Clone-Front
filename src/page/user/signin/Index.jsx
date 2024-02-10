import UserSignIn from "@/components/enroll/UserSignIn";

export default function SignIn() {
    return (
        <>
            <div className=" flex justify-center">
                <div className="flex h-[600px] w-[400px] flex-col">
                    <UserSignIn />
                </div>
            </div>
        </>
    );
}
