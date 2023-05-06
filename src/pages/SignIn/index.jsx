import React from "react";
import { Link } from "react-router-dom";
import { Text, Img, Input } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull");
    },
  });

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-black_900 flex flex-col items-center justify-start p-[171px] md:px-5 w-auto md:w-full">
          <Text
            className="mb-[301px] mt-[292px] text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Board.
          </Text>
        </div>
        <div className="bg-gray_100 flex flex-col items-center justify-end p-[223px] md:px-5 w-3/5 md:w-full">
          <div className="flex flex-col items-start justify-start mb-[33px] mt-[39px] w-[95%] md:w-full">
            <Text
              className="font-montserrat text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Sign In
            </Text>
            <Text
              className="font-lato mt-1 not-italic text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Sign in to your account
            </Text>
            <div className="flex flex-row font-montserrat gap-[25px] items-center justify-between mt-[23px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div
                  className="common-pointer flex flex-row gap-2.5 items-start justify-start mt-0.5 w-[84%] md:w-full"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    src="images/img_googleicon1.svg"
                    className="h-3.5 w-3.5"
                    alt="googleiconOne"
                  />
                  <Text
                    className="not-italic text-center text-gray_600 w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-row gap-[11px] items-start justify-center w-[78%] md:w-full">
                  <Img
                    src="images/img_volume.svg"
                    className="h-3.5 w-auto"
                    alt="volume"
                  />
                  <Text
                    className="mt-0.5 not-italic text-center text-gray_600 w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Sign in with Apple
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-[21px] items-center justify-start mt-[25px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[317px] items-center justify-end p-[30px] sm:px-5 w-full"
                style={{
                  backgroundImage: "url('images/img_googlesignin.svg')",
                }}
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="not-italic text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Email address
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-end mt-2 p-2 w-full"
                    style={{ backgroundImage: "url('images/img_group5.svg')" }}
                  >
                    <Input placeholder="johndoe@gmail.com"
                      className="ml-1.5 md:ml-[0] mt-[3px] not-italic text-black_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    />
                      

                   
                  </div>
                  <Text
                    className="mt-5 not-italic text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Password
                  </Text>
                  <Input type="password"
                    wrapClassName="mt-2 w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-base text-black_900 text-left w-full"
                    name="groupThree"
                    placeholder="••••••••"
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillGray200"
                  ></Input>
                  <a
                    href="javascript:"
                    className="font-normal mt-[21px] not-italic text-base text-blue_700 text-left w-auto"
                  >
                    <Text className="">Forgot password?</Text>
                  </a>
                  <Link to="/dashboard">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-montserrat h-10 items-center justify-end mt-[17px] p-[9px] w-full"
                    style={{
                      backgroundImage: "url('images/img_buttonsignin.svg')",width:"700%"
                    }}
                  >
                    <a
                      href="javascript:"
                      className="font-bold text-base text-center text-white_A700 w-auto"
                    >
                      <div>SIGN IN</div>
      
                    </a>

                  </div>
                  </Link>
                </div>
              </div>
              <Text
                className="not-italic text-center text-gray_600 w-auto"
                as="h4"
                variant="h4"
              ></Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
