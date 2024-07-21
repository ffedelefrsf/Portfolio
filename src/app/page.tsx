import Link from "next/link";
import { ChevronRight } from "./icons/ChevronRight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-black justify-center">
      <div className="text-center py-4 bg-gray-700">Menu</div>
      <div className="bg-[url('/picture.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-transparent to-gray-800 px-8 text-gray-300 h-[75vh]">
          <div className="flex w-full flex-col justify-center items-end">
            <p className="font-thin text-xl xl:text-2xl">I&apos;m</p>
            <p className="font-extrabold text-3xl xl:text-4xl my-2 text-white">
              Fausto Fedele
            </p>
            <div className="relative w-full text-end">
              <p className="font-thin text-xl xl:text-2xl">
                Thanks for visiting !
              </p>
              <Link
                href="#about-me"
                className="absolute flex right-0 font-extralight text-gray-400 italic text-sm xl:text-base mt-1 hover:underline hover:text-white group"
              >
                Let&apos;s find out more about myself
                <ChevronRight
                  className="stroke-white hidden group-hover:block h-[18px] w-[18px] xl:h-[23px] xl:w-[23px]"
                  height="20px"
                  width="20px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p4 text-white max-w-[1500px] self-center">
        <div className="flex items-center justify-between px-8 mt-6">
          <div>
            <p className="font-bold text-5xl">5+</p>
            <p className="text-sm font-thin">Years of experience</p>
          </div>
          <div>
            <p className="font-bold text-5xl">3</p>
            <p className="text-sm font-thin">Companies</p>
          </div>
          <div>
            <p className="font-bold text-5xl">16+</p>
            <p className="text-sm font-thin">Projects</p>
          </div>
        </div>
        <div
          className="h-[800px] w-full my-5"
          style={{
            background: "radial-gradient(farthest-side, #fff, transparent)",
          }}
        >
          <div className="flex flex-col justify-center items-center h-[650px] py-10">
            <div className="flex justify-center items-center flex-1 gap-3">
              <Image
                unoptimized
                alt="react-logo"
                width={125}
                height={125}
                src="react.svg"
              />
              <Image
                unoptimized
                alt="next-logo"
                width={125}
                height={125}
                src="next.svg"
              />
              <Image
                unoptimized
                alt="node-logo"
                width={125}
                height={125}
                src="node.svg"
              />
              <Image
                unoptimized
                alt="typescript-logo"
                width={115}
                height={115}
                src="typescript.svg"
              />
              <Image
                unoptimized
                alt="git-hub-logo"
                width={125}
                height={125}
                src="git-hub.svg"
              />
              <Image
                unoptimized
                alt="material-logo"
                width={125}
                height={125}
                src="material.svg"
              />
              <Image
                unoptimized
                alt="mysql-logo"
                width={160}
                height={160}
                src="mysql.svg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 gap-3">
              <Image
                unoptimized
                alt="aws-logo"
                width={100}
                height={100}
                src="aws.svg"
              />
              <Image
                unoptimized
                alt="graphql-logo"
                width={100}
                height={100}
                src="graphql.svg"
              />
              <Image
                unoptimized
                alt="docker-logo"
                width={100}
                height={100}
                src="docker.svg"
              />
              <Image
                unoptimized
                alt="jira-logo"
                width={100}
                height={100}
                src="jira.svg"
              />
              <Image
                unoptimized
                alt="confluence-logo"
                width={100}
                height={100}
                src="confluence.svg"
              />
              <Image
                unoptimized
                alt="datadog-logo"
                width={100}
                height={100}
                src="datadog.svg"
              />
              <Image
                unoptimized
                alt="jest-logo"
                width={90}
                height={90}
                src="jest.svg"
              />
              <Image
                unoptimized
                alt="snowflake-logo"
                width={100}
                height={100}
                src="snowflake.svg"
              />
              <Image
                unoptimized
                alt="figma-logo"
                width={100}
                height={100}
                src="figma.svg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 gap-3">
              <Image
                unoptimized
                alt="nest-logo"
                width={80}
                height={80}
                src="nest.svg"
              />
              <Image
                unoptimized
                alt="android-logo"
                width={80}
                height={80}
                src="android.svg"
              />
              <Image
                unoptimized
                alt="ios-logo"
                width={80}
                height={80}
                src="ios.svg"
              />
              <Image
                unoptimized
                alt="keycloak-logo"
                width={80}
                height={80}
                src="keycloak.svg"
              />
              <Image
                unoptimized
                alt="ant-d-logo"
                width={70}
                height={70}
                src="ant-d.svg"
              />
              <Image
                unoptimized
                alt="java-logo"
                width={80}
                height={80}
                src="java.svg"
              />
              <Image
                unoptimized
                alt="spring-logo"
                width={70}
                height={70}
                src="spring.svg"
              />
              <Image
                unoptimized
                alt="drive-logo"
                width={80}
                height={80}
                src="drive.svg"
              />
              <Image
                unoptimized
                alt="mssql-logo"
                width={80}
                height={80}
                src="mssql.svg"
              />
              <Image
                unoptimized
                alt="xd-logo"
                width={70}
                height={70}
                src="xd.svg"
              />
              <Image
                unoptimized
                alt="gitlab-logo"
                width={80}
                height={80}
                src="gitlab.svg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 gap-3">
              <Image
                unoptimized
                alt="google-cloud-logo"
                width={50}
                height={50}
                src="google-cloud.svg"
              />
              <Image
                unoptimized
                alt="firebase-logo"
                width={50}
                height={50}
                src="firebase.svg"
              />
              <Image
                unoptimized
                alt="linux-logo"
                width={50}
                height={50}
                src="linux.svg"
              />
              <Image
                unoptimized
                alt="php-logo"
                width={50}
                height={50}
                src="php.svg"
              />
              <Image
                unoptimized
                alt="redux-logo"
                width={50}
                height={50}
                src="redux.svg"
              />
              <Image
                unoptimized
                alt="wordpress-logo"
                width={50}
                height={50}
                src="wordpress.svg"
              />
              <Image
                unoptimized
                alt="dot-net-logo"
                width={50}
                height={50}
                src="dot-net.svg"
              />
              <Image
                unoptimized
                alt="asana-logo"
                width={50}
                height={50}
                src="asana.svg"
              />
              <Image
                unoptimized
                alt="angular-logo"
                width={50}
                height={50}
                src="angular.svg"
              />
              <Image
                unoptimized
                alt="jenkins-logo"
                width={50}
                height={50}
                src="jenkins.svg"
              />
              <Image
                unoptimized
                alt="redmine-logo"
                width={75}
                height={75}
                src="redmine.svg"
              />
              <Image
                unoptimized
                alt="talend-logo"
                width={50}
                height={50}
                src="talend.svg"
                className="ml-[-20px]"
              />
              <Image
                unoptimized
                alt="trello-logo"
                width={50}
                height={50}
                src="trello.svg"
              />
              <Image
                unoptimized
                alt="c-sharp-logo"
                width={50}
                height={50}
                src="c-sharp.svg"
              />
              <Image
                unoptimized
                alt="azure-logo"
                width={60}
                height={60}
                src="azure.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] text-white">
        <h2 id="about-me">About me</h2>
        <div>
          <p>About me, according to me</p>
          <span>
            Degree on Software Engineering. 27 years old. Family lover. Dog
            lover. Passionate. Problem-solving enthusiastic. Native contestant.
            Committed.
          </span>
          <p>About me, according to others:</p>
          <span>
            Good communicator. Hyper productive. Self dependent. Kind. Sensible.
            Friendly. Bossy. Fast learner. Business oriented employee.
          </span>
        </div>
      </div>
    </div>
  );
}
