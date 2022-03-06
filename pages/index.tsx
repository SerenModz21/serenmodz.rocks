import NextImage from "next/image";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="min-h-80 h-fit w-full p-4">
      <NextSeo title="Home" />

      <main className="mx-auto inline-flex flex-col justify-center space-y-8">
        {/* logo n small intro */}
        <div className="inline-flex items-center space-x-6 px-8">
          {/* logo */}
          <div className="relative h-40 w-40">
            <NextImage
              src="/logo.png"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt="Seren_Modz 21"
            />
          </div>
          {/* text */}
          <div>
            <h1 className="text-5xl">Seren_Modz 21</h1>
            <p className="mt-1 text-xl">Welcome to my personal website.</p>
          </div>
        </div>

        {/* more content */}
        <div className="inline-flex flex-col items-center justify-center space-y-6">
          {/*<p className="px-8">*/}
          {/*  My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
          {/*  journey started in high-school. I was born in the United Kingdom*/}
          {/*  and have been there all my life. I am proficient in JavaScript*/}
          {/*  and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
          {/*</p>*/}

          {/*<p className="px-8">*/}
          {/*  Hello! My name is Seren_Modz 21, an inpired back-end developer.*/}
          {/*  I'm from the United Kingdom and I'm a full-time college student.*/}
          {/*  Currently, I mainly work on private projects but I plan to grow*/}
          {/*  and achieve my goal of working on more open source projects.*/}
          {/*</p>*/}

          <p className="px-8">
            Hello, my name is Seren_Modz 21. I'm a full-time college student
            from the United Kingdom. I'm also a young tech-savvy guy who likes
            to be around technology; more specifically, programming.
          </p>

          <p className="px-8">
            I am learning to become a full-stack developer so I can program
            websites, mobile applications, etc… This consists of front-end and
            back-end development. I am great at programming with JavaScript and
            TypeScript and I’m also learning how to program with Java and
            Kotlin. For front-end development, I am learning how to code a
            website using a JavaScript library called React.
          </p>

          {/*<p className="px-8">*/}
          {/*  My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
          {/*  journey started in high-school. I was born in the United Kingdom*/}
          {/*  and have been there all my life. I am proficient in JavaScript*/}
          {/*  and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
          {/*</p>*/}

          {/*<p className="px-8">*/}
          {/*  My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
          {/*  journey started in high-school. I was born in the United Kingdom*/}
          {/*  and have been there all my life. I am proficient in JavaScript*/}
          {/*  and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
          {/*</p>*/}

          {/*<p className="px-8">*/}
          {/*  My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
          {/*  journey started in high-school. I was born in the United Kingdom*/}
          {/*  and have been there all my life. I am proficient in JavaScript*/}
          {/*  and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
          {/*</p>*/}
        </div>

        {/*<div className="inline-flex items-center justify-center">*/}
        {/*  <p className="px-8">*/}
        {/*    My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
        {/*    journey started in high-school. I was born in the United Kingdom*/}
        {/*    and have been there all my life. I am proficient in JavaScript*/}
        {/*    and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className="inline-flex items-center justify-center">*/}
        {/*  <p className="px-8">*/}
        {/*    My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
        {/*    journey started in high-school. I was born in the United Kingdom*/}
        {/*    and have been there all my life. I am proficient in JavaScript*/}
        {/*    and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className="inline-flex items-center justify-center">*/}
        {/*  <p className="px-8">*/}
        {/*    My name is Seren_Modz 21 and I'm a self-taught programmer. My*/}
        {/*    journey started in high-school. I was born in the United Kingdom*/}
        {/*    and have been there all my life. I am proficient in JavaScript*/}
        {/*    and TypeScript. I'm currently learning React, Kotlin and Golang.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </main>
    </div>
  );
}
