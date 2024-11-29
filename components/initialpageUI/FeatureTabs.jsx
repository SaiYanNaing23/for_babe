"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/Tabs";
import style from '@/components/initialpageUI/featuretabs.module.css'

export default function TabsDemo() {
  const tabs = [
    {
      title: "Dashboard",
      value: "Dashboard",
      content: (
        <div className={style.tabcontent}>
          <p>Dashboard</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Explore",
      value: "Explore",
      content: (
        <div className={style.tabcontent}>
          <p>Explore</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Matches",
      value: "My Matches",
      content: (
        <div className={style.tabcontent}>
          <p>My Matches</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Messages",
      value: "Messages",
      content: (
        <div className={style.tabcontent}>
          <p>Messages</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Profile",
      value: "Profile",
      content: (
        <div className={style.tabcontent}>
          <p>Profile</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className={style.tabcontainer}>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className={style.image}
    />
  );
};
