import Link from "next/link";
import { ChevronRight } from "../components/icons/ChevronRight";
import Image from "next/image";
import PhotoSphere from "@/components/sphere";

export default function Home() {
  const allTechIconsPaths = [
    "react.svg",
    "next.svg",
    "node.svg",
    "typescript.svg",
    "git-hub.svg",
    "material.svg",
    "mysql.svg",
    "aws.svg",
    "graphql.svg",
    "docker.svg",
    "jira.svg",
    "confluence.svg",
    "datadog.svg",
    "jest.svg",
    "snowflake.svg",
    "figma.svg",
    "nest.svg",
    "android.svg",
    "ios.svg",
    "keycloak.svg",
    "ant-d.svg",
    "java.svg",
    "spring.svg",
    "drive.svg",
    "mssql.svg",
    "xd.svg",
    "gitlab.svg",
    "google-cloud.svg",
    "firebase.svg",
    "linux.svg",
    "php.svg",
    "redux.svg",
    // "wordpress.svg",
    // "dot-net.svg",
    // "asana.svg",
    // "angular.svg",
    // "jenkins.svg",
    // "redmine.svg",
    // "talend.svg",
    // "trello.svg",
    // "c-sharp.svg",
    // "azure.svg",
  ];
  return (
    <div className="flex flex-col bg-black justify-center">
      <div className="text-center py-4 bg-gray-700">Menu</div>
      <div className="bg-[url('/picture.jpg')] bg-cover bg-center bg-no-repeat grayscale hover:filter-none ease-in-out duration-1000">
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
      </div>
      <div className="w-[50%]">
        <PhotoSphere imageData={allTechIconsPaths} />
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
