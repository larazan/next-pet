import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GoTop from "@/components/GoTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import img from "@/assets/img/promo.jpeg";
import RelatedArticle from "@/components/RelatedArticle";
import Help from "@/components/Help";
import Tags from "@/components/Tags";

export default function Detail() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <div className="flex flex-col bg-[#f8f3e7] min-h-screen ">
        <div className="flex mt-6 flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-0 md:mt-2 px-5">
                {/* breadcrumb */}
                <nav className="text-sm my-1" aria-label="Breadcrumb">
                  <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                      <a
                        href="#"
                        className="uppercase text-gray-900 font-bold hover:underline"
                      >
                        CATS & KITTENS
                      </a>
                      <svg
                        className="fill-current text-gray-900 w-3 h-3 mx-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                      </svg>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-900 uppercase font-bold hover:underline"
                        aria-current="page"
                      >
                        CAT HEALTH CARE
                      </a>
                    </li>
                  </ol>
                </nav>
                <div className="flex flex-col space-y-1 pt-3 pb-5 ">
                  <h1 className="text-3xl md:text-4xl font-semibold md:font-bold">
                    10 Ways to Keep Your Cat Healthy, According to a Vet
                  </h1>
                  <div className="flex space-x-3">
                    <div>
                      <span className="text-sm font-semibold">
                        By <span className="underline">Roderick Scott</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">
                        Updated October 2, 2023
                      </span>
                    </div>
                  </div>
                  <div className="font-mabry">
                    <div className=" flex justify-between items-center text-base md:text-sm text-green-500 font-bold">
                      <div className="flex justify-end space-x-2">
                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-[#1877f2] hover:bg-[#1877f2]  fill-[#1877f2] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-blue-500/50 ">
                            <svg
                              className="w-5 h-5 md:w-4 md:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-[#1d9bf0] hover:bg-[#1d9bf0] fill-[#1d9bf0] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-sky-500/50">
                            <svg
                              className="w-5 h-5 md:w-4 md:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </div>
                        </button>

                        <button>
                          <div className="flex rounded-full border py-1.5 px-1.5 shadow-menu border-gray-800 bg-transparent text-black hover:fill-white  items-center justify-between space-x-1 hover:shadow-sky-500/50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 md:w-4 md:h-4 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={img} alt="" />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-2 md:mt-4 px-5 markdown-blog">
                <article>
                  <p>
                    Keeping your feline friend healthy and happy starts with a
                    few simple steps—some of which can be integrated into your
                    cat&apos;s environment right away.
                  </p>
                  <p>
                    To help your cat live their best feline life, Los Angeles
                    veterinarian Jeff Werber (who has eight cats himself) offers
                    helpful advice to pet parents. &quot;It&apos;s crucial to get off on
                    the right foot with cat care, &quot; he says. &quot;Good daily habits
                    are where it starts.&quot; These tips can help you provide the
                    love and care your cat deserves.
                  </p>
                  <h2>Brush Your Cat Every Day</h2>
                  <p>
                    Daily brushing or combing can help reduce the number of
                    hairballs that develop in the digestive tract and help
                    prevent mats and tangles, especially in long-haired cats.
                    Cats spend a lot of time grooming themselves, and pet
                    parents may not know that they can actually help their cats
                    by removing loose hair through regular brushing. Werber says
                    that the key to getting a cat to cooperate with brushing is
                    to teach your cat to associate it with happy events. &quot;Maybe
                    you always brush before a meal,&quot; he says. &quot;Then your cat
                    will associate it with something delicious.&quot;
                  </p>
                  <h2>2. Don’t Feed Your Cat Too Much Dry Food</h2>
                  <p>
                    Unlike dogs, cats are obligate carnivores, meaning they rely
                    on meat as the foundation of their diets. The main meal of
                    the day should always be meat, says Werber. He cautions that
                    exclusively feeding dry food diets to cats may cause them to
                    consume too many carbohydrates, which can be unhealthy in
                    large amounts. &quot;We see cats developing type 2 diabetes and
                    growing obese from too much dry food,&quot; Werber explains.
                  </p>
                  <p>
                    If you have both dogs and cats, you can&apos;t feed them the
                    same. Dog food is not good for cats, nor can a cat
                    metabolize carbs the way a dog can. Consider feeding wet
                    food as a part, if not all, of your cat&apos;s diet.
                  </p>
                  <h2>3. Pay Attention to Your Cat&apos;s Thirst</h2>
                  <p>
                    Domestic cats evolved from desert-dwelling felines, so cats
                    don&apos;t naturally drink as much water as dogs. Ideally, cats
                    should get most of their water from food. A meal that a cat
                    might eat in the wild—such as a mouse—is about 70% water.
                    Canned food contains about 78% water, but dry food only has
                    5% to 10% water on average.
                  </p>
                  <p>
                    It&apos;s important to give your cat access to fresh water at all
                    times no matter their diet, but you may notice your cat
                    drinking more when they primarily eat dry food. Seniors,
                    nursing cats, and cats with chronic health conditions are
                    more prone to dehydration than others, so watch them
                    carefully for signs such as sunken eyes, lethargy, and
                    panting.
                  </p>

                  <h2>4. Provide a Sufficient Number of Litter Boxes</h2>
                  <p>
                    As far as potty places go, Werber says a good rule of thumb
                    is to have one litter box per kitty, plus an additional one.
                    So if you have three cats, you should set up four boxes, and
                    you&apos;ll want to think carefully about where those boxes go.
                    Humans tend to want the boxes tucked away in a hidden spot
                    like a basement or dark corner, but some cats are
                    uncomfortable in these areas. Werber says to think about a
                    cat&apos;s natural instincts. &quot;The animal is in a vulnerable
                    position when performing those functions,&quot; he says. &quot;They
                    want to be able to see around them.&quot; For the same reason,
                    your pet may not be willing to use a box with a cover or one
                    that&apos;s been cleverly hidden in furniture.
                  </p>
                  <h2>
                    5. Don’t Assume You Know Why a Cat Is Peeing Outside the Box
                  </h2>
                  <p>
                    Little frustrates a cat parent more than when kitty skips
                    the box and pees somewhere else in the house—especially when
                    it&apos;s your couch or bed. Why would a cat do this? &quot;There can
                    be a lot of reasons,&quot; says Werber, &quot;and you want to rule out
                    illness first.&quot; Bring your cat to the vet to check for a
                    urinary tract infection or other illness that could explain
                    this new behavior. Once health concerns are ruled out, make
                    sure that litter boxes meet your cat&apos;s preferences.
                    Experiment with different types of litter to find out if
                    there is one type your pet prefers. Be scrupulous about
                    keeping the box clean: scoop once or twice a day (more for
                    multiple cats). Try changing the location of the litter box
                    to somewhere quieter (away from noisy appliances) or easier
                    for your cat to access.
                  </p>
                  <h2>6. Train Your Cat to Use a Scratching Post</h2>
                  <p>
                    Don&apos;t want your new sofa ripped to shreds? Teach your cat to
                    use a scratching post so they won&apos;t end up clawing your
                    furniture. The mistake many owners make, says Werber, is not
                    knowing that they have to give the scratching post some
                    appeal. &quot;Put it in the center of the room to start,&quot; he
                    explains. If you place it in a corner far from the social
                    action in the household, it&apos;s easy for your cat to ignore
                    it. Sprinkle the scratcher with catnip when you first bring
                    it home, the vet advises. Once you have gotten your pet into
                    the habit of using it, you can gradually move it to a
                    less-trafficked spot and skip the catnip if desired.
                  </p>
                  <h2>7. Spay or Neuter Your Cat</h2>
                  <p>
                    There&apos;s nothing more beneficial to your cat&apos;s long-term
                    wellness than getting them spayed or neutered, Werber says.
                    &quot;Female cats are very uncomfortable when they go into heat,&quot;
                    he adds. Spaying and neutering can help keep your cat safe,
                    too. Because unaltered male cats often fight, they risk
                    transmitting diseases through bites and scratches. The
                    situation is not much better for female cats, either. Female
                    cats can become pregnant as early as four months old, and
                    mating and queening multiple litters of kittens can be very
                    stressful. And because there are so many unwanted cats in
                    shelters waiting for their forever homes, it&apos;s better to not
                    add to the population.
                  </p>
                  <h2>8. Travel Safely With Your Pet</h2>
                  <p>
                    Even if your cat wants to, don&apos;t let them travel
                    unrestrained in a car. It&apos;s distracting to the driver and,
                    in the case of an accident, a cat can become a dangerous
                    projectile. Get a comfortable travel carrier for car rides,
                    and teach your cat to use it without fear.
                  </p>
                  <p>
                    Werber also warns to &quot;never, ever leave your cat alone in a
                    parked car.&quot; Even in cooler temperatures, and even with the
                    windows cracked, a car quickly becomes uncomfortable for an
                    animal (or human, for that matter). It takes mere minutes
                    for a cat to perish in a warm car. Leave your cat at home if
                    you do not plan to bring them inside with you.
                  </p>
                  <h2>9. Choose a Cat-Friendly Vet</h2>
                  <p>
                    Many veterinary practices see multiple species, including
                    canines. This can be scary for a cat who has to sit in a
                    waiting room surrounded by dogs. &quot;Look for a vet who has
                    separate waiting areas for cats and dogs,&quot; says Werber.
                    While that&apos;s ideal, not all practices have the space for
                    this. If your favorite vet doesn&apos;t have two waiting rooms,
                    ask to be called into the exam room quickly, Werber advises.
                    You can also look for cat-only veterinarians in your area
                    (yes, they exist!) so your kitty won&apos;t get bombarded with
                    the sights, sounds, and smells of dogs, birds, and other
                    critters.
                  </p>
                  <h2>10. Let Them Show Off!</h2>
                  <p>
                    When a cat loves you, they like to prove it, sometimes by
                    offering you the results of a successful hunt. Werber
                    suggests accepting the gifts with grace (even when it&apos;s
                    gross—say, a decapitated mouse). Your cat may also show you
                    love by head bunting, purring, or kneading you with their
                    paws. Sit back and soak up the affection.
                  </p>

                 
                </article>

               
              </section>

              <Help />

              {/* SOURCE */}
              <div className="px-6 md:px-4 pt-4">
                <span className=" text-sm italic">
                  A version of this article was originally written by Clare
                  McHugh and first appeared on Health.com.
                </span>
              </div>
              <div className="md:text-sm text-gray-500 px-6 md:px-4 pb-3 font-mabry">
                Source:{" "}
                <a
                  href="https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah"
                  className="italic underline font-mabryitalic"
                >
                  https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah
                </a>
              </div>

              {/* <Tags /> */}

              
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
        <div className="flex flex-1 w-full items-center justify-center relative">
        <div className="flex flex-1 pb-18  max-w-sm md:max-w-2xl ">
        <RelatedArticle />
        </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
