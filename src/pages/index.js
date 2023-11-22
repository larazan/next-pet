import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import GoTop from "../components/GoTop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsFeed from "../components/NewsFeed";
import Notice from "@/components/Notice";
import Hero from "@/components/Hero";
import Reason from "@/components/Reason";
import ArticleHome from "@/components/ArticleHome";
import CategoryHome from "@/components/CategoryHome";
import Testimoni from "@/components/Testimoni";
import CookieConsent from "@/components/CookieConsent";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />
      <NewsFeed />
      <Notice />
      <Hero />
      <Reason />
      <CategoryHome />
      <ArticleHome />
      <Testimoni />
      <SubscribeForm />
      <CookieConsent />
      <Footer />
    </>
  );
}
