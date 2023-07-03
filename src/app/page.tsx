import Button from '@/components/button'
import Card from '@/components/client/card'
import Carousel, { CarouselSlide } from '@/components/client/carousel'
import ExpCard from '@/components/exp-card'
import Navbar from '@/components/client/navbar'
import SkillCard from '@/components/skill-card'
import { Download, Dribbble, Github, Heart, Linkedin } from 'lucide-react'
import Image from 'next/image'
import type { ResponseCMS } from '@/types'
import { hygraphClient } from '@/lib/hygraph'
import { queryHome } from '@/utils/queries'

export default async function Home() {
  const response = await hygraphClient().fetch<ResponseCMS>(queryHome)
  const data = response.home_[0]

  if (!data) {
    return <div>Loading...</div>
  }

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
                  <a
                    href="https://www.linkedin.com/in/yaser-qui%C3%B1onez-471a84193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="https://github.com/yandre13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                  >
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
              <Image
                src={data.hero.image.url}
                width={320}
                height={320}
                alt="Profile"
                className="max-h-[320px] rounded-full object-cover object-top"
              />
            </div>
            <div
              className="col-span-2 mt-8 md:col-auto
          lg:pl-8
          xl:pl-24"
            >
              <h1
                className="text-4xl font-semibold text-textTitle
            lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: data.hero.title }}
              />
              <h3
                className="mt-1.5 text-lg font-semibold text-textBody
            lg:mt-4"
              >
                {data.hero.role}
              </h3>
              <p
                className="mt-3 text-textBody
            lg:mt-5 lg:text-lg"
              >
                {data.hero.description}
              </p>
              <div className="mt-8">
                <Button
                  text={data.hero.callToAction.text}
                  to={data.hero.callToAction.url}
                  download={data.hero.callToAction.download}
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
              {data.about.title}
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
                  src={data.about.image.url}
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
                  {data.about.description}
                </p>
                <div
                  className="mx-auto mt-8 grid max-w-xs grid-cols-3
              md:ml-0"
                >
                  {data.about.experiences.map((experience) => (
                    <div
                      className="col-span-1 flex flex-col justify-center gap-1 p-2"
                      key={experience.id}
                    >
                      <span className="text-center text-xl font-bold">
                        {experience.number}
                      </span>
                      <span className="text-center text-sm">
                        {experience.label}
                      </span>
                    </div>
                  ))}
                  <div
                    className="col-span-3 mt-8 flex justify-center
                md:justify-start"
                  >
                    <Button
                      text={data.about.callToAction.text}
                      to={data.about.callToAction.url}
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
              {data.skills.title}
            </h2>
            <p
              className="mt-4 text-sm text-textBody
          md:text-center md:text-base"
            >
              {data.skills.description}
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
                {data.skills.skills.map((skill) => (
                  <div className="col-span-1" key={skill.id}>
                    <SkillCard
                      svg={skill.svg}
                      title={skill.title}
                      color="orange"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Button
                text={data.skills.callToAction.text}
                to={data.skills.callToAction.url}
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
              {data.experience.title}
            </h2>
            <div
              className="mt-10 grid
          md:mt-12 md:grid-cols-2 md:gap-6 lg:mt-20"
            >
              <div
                className="flex flex-col gap-6
            lg:gap-8"
              >
                {data.experience.items
                  .filter((item) => !item.education)
                  .map((item, index, arr) => (
                    <div key={item.id}>
                      <ExpCard
                        date={item.date}
                        title={item.title}
                        at={item.at}
                        content={item.description}
                        hideLine={index === arr.length - 1}
                      />
                    </div>
                  ))}
              </div>
              <div
                className="flex flex-col gap-6
            lg:gap-8"
              >
                {data.experience.items
                  .filter((item) => item.education)
                  .map((item, index, arr) => (
                    <div key={item.id}>
                      <ExpCard
                        date={item.date}
                        title={item.title}
                        at={item.at}
                        content={item.description}
                        // only for first item
                        spacer={index === 0}
                        // only for last item
                        hideLine={index === arr.length - 1}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO */}
        <section id="Portfolio" className="relative">
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
                {data.portfolio.projects.map((project) => (
                  <CarouselSlide key={project.id}>
                    <Card {...project} />
                  </CarouselSlide>
                ))}
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
