import Button from '@/components/button'
import Card from '@/components/client/card'
import Carousel, { CarouselSlide } from '@/components/client/carousel'
import ExpCard from '@/components/exp-card'
import Navbar from '@/components/client/navbar'
import SkillCard from '@/components/skill-card'
import { Download, Dribbble, Github, Heart, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="container flex min-h-screen flex-col items-center justify-center"
          id="Home"
        >
          <div
            className="grid grid-cols-[.5fr_3fr] gap-x-8
        md:grid-cols-[max-content_1fr_1fr]
        lg:gap-x-14"
          >
            <nav className="col-span-1 self-center">
              <ul className="flex flex-col gap-2 text-primary">
                <li className="flex">
                  <a href="#" className="p-2">
                    <Linkedin />
                  </a>
                </li>
                <li className="flex">
                  <a href="#" className="p-2">
                    <Dribbble />
                  </a>
                </li>
                <li className="flex">
                  <a href="#" className="p-2">
                    <Github />
                  </a>
                </li>
              </ul>
            </nav>
            <div
              className="col-span-1 w-full max-w-[180px]
          md:order-1 md:max-w-[280px] md:self-center md:justify-self-center
          lg:max-w-[320px]"
            >
              <svg
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="fill-primary"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                  <image href="/assets/img/profile.png" className="w-full" />
                </g>
              </svg>
            </div>
            <div
              className="col-span-2 mt-8 md:col-auto
          lg:pl-8
          xl:pl-24"
            >
              <h1
                className="text-4xl font-semibold text-textTitle
            lg:text-6xl"
              >
                Hi, Im <span className="text-primary">Yaser</span>
              </h1>
              <h3
                className="mt-1.5 text-lg font-semibold text-textBody
            lg:mt-4"
              >
                Frontend Engineer
              </h3>
              <p
                className="mt-3 text-textBody
            lg:mt-5 lg:text-lg"
              >
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
              <div className="mt-8">
                <Button
                  text="Download CV"
                  icon={<Download className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="container" id="About">
          <div className="py-10 lg:py-20">
            <h2
              className="text-center text-3xl font-semibold text-textTitle
          lg:text-5xl"
            >
              About Me
            </h2>
            <div
              className="mt-10
            md:grid md:grid-cols-[max-content_1fr] md:gap-x-12
            lg:mt-16"
            >
              <div
                className="p-4 md:col-span-1 md:self-center md:px-0
            lg:px-8
            xl:px-[90px]"
              >
                <Image
                  src="/assets/img/about.jpg"
                  width={340}
                  height={340}
                  alt="About me"
                  className="mx-auto w-full max-w-[200px] rounded-md object-cover
                md:max-w-[240px]
                lg:max-w-[340px]"
                />
              </div>
              <div
                className="mt-8
            md:col-span-1"
              >
                <p
                  className="text-textBody
              lg:text-lg"
                >
                  I am a Frontend Developer with 2 years of experience. I have
                  serious passion for UI effects, animations and creating
                  intuitive, dynamic user experiences. Lets make something
                  special.
                </p>
                <div
                  className="mx-auto mt-8 grid max-w-xs grid-cols-3
              md:ml-0"
                >
                  <div className="col-span-1 flex flex-col justify-center gap-1 p-2">
                    <span className="text-center text-xl font-bold">03+</span>
                    <span className="text-center text-sm">
                      Years <br /> experience
                    </span>
                  </div>
                  <div className="col-span-1 flex flex-col justify-center gap-1 p-2">
                    <span className="text-center text-xl font-bold">+10</span>
                    <span className="text-center text-sm">
                      Completed <br /> projects
                    </span>
                  </div>
                  <div className="col-span-1 flex flex-col justify-center gap-1 p-2">
                    <span className="text-center text-xl font-bold">03</span>
                    <span className="text-center text-sm">
                      Companies <br /> worked
                    </span>
                  </div>
                  <div
                    className="col-span-3 mt-8 flex justify-center
                md:justify-start"
                  >
                    <Button
                      text="Download CV"
                      icon={<Download className="h-5 w-5" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <section className="container" id="Skills">
          <div className="py-10 lg:py-20">
            <h2
              className="text-center text-3xl font-semibold text-textTitle
          lg:text-5xl"
            >
              Skills
            </h2>
            <p
              className="mt-4 text-sm text-textBody
          md:text-center md:text-base"
            >
              These are the technologies I have been working with recently:
            </p>
            <div
              className="mt-8 px-4
          md:mt-10
          lg:mt-16"
            >
              <div
                className="grid grid-cols-2 gap-5
            md:grid-cols-3
            lg:grid-cols-6"
              >
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/html.svg"
                    title="HTML 5"
                    color="orange"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/css.svg"
                    title="CSS"
                    color="blue"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/js.svg"
                    title="Javascript"
                    color="yellow"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/ts.svg"
                    title="Typescript"
                    color="darkblue"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/react.svg"
                    title="React"
                    color="sky"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/next.svg"
                    title="Next.js"
                    color="black"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/css.svg"
                    title="CSS"
                    color="blue"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/js.svg"
                    title="Javascript"
                    color="yellow"
                  />
                </div>
                <div className="col-span-1">
                  <SkillCard
                    path="/assets/svg/ts.svg"
                    title="Typescript"
                    color="darkblue"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                text="Download CV"
                icon={<Download className="h-5 w-5" />}
              />
            </div>
          </div>
        </section>
        {/* Experience */}
        <section className="container" id="Exp">
          <div className="py-10 lg:py-20">
            <h2
              className="text-center text-3xl font-semibold text-textTitle
          lg:text-5xl"
            >
              Experience & Education
            </h2>
            <div
              className="mt-10 grid
          md:mt-12 md:grid-cols-2 md:gap-6 lg:mt-20"
            >
              <div
                className="flex flex-col gap-6
            lg:gap-8"
              >
                <div>
                  <ExpCard
                    date="2021 - 2022"
                    title="Frontend Engineer"
                    at="Zoluxiones"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </div>
                <div>
                  <ExpCard
                    date="2021 - 2022"
                    title="Frontend Engineer"
                    at="Zoluxiones"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </div>
                <div>
                  <ExpCard
                    date="2021 - 2022"
                    title="Frontend Engineer"
                    at="Zoluxiones"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    hideLine
                  />
                </div>
              </div>
              <div
                className="flex flex-col gap-6
            lg:gap-8"
              >
                <div>
                  <ExpCard
                    date="2017 - 2022"
                    title="Software development"
                    at="Idat"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    spacer
                  />
                </div>
                <div>
                  <ExpCard
                    date="Present"
                    title="Fullstack Developement"
                    at="Online"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    hideLine
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO */}
        <section id="Portfolio">
          <div className="mb-8 py-10 lg:mb-20 lg:py-20">
            <h2
              className="text-center text-3xl font-semibold text-textTitle
          lg:text-5xl"
            >
              Portfolio
            </h2>
            <div
              className="mt-10
          lg:mt-16"
            >
              <Carousel>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
                <CarouselSlide>
                  <Card />
                </CarouselSlide>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary">
        <div className="container py-4 md:py-6">
          <small className="text-sm text-white">
            &copy; {new Date().getFullYear()} Made with{' '}
            <Heart className="inline-block h-4 w-4 fill-red-500 text-red-500" />{' '}
            by Yaser.
          </small>
        </div>
      </footer>
    </>
  )
}
