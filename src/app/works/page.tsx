import React from "react";

// scss
import styles from "./Works.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";

const Works = () => {
  return (
    <SubPageTemp
      id="works"
      enTitle="WORKS"
      jaTitle="制作実績"
      desc="これまでの制作実績をご紹介します。"
    >
      <p className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        consequatur id officia asperiores obcaecati, nulla nobis ut dicta magnam
        a dolorum, repellendus tempore ad iste nam distinctio ullam! Quam
        molestias dolorem quasi minus odit libero, laudantium, autem enim quis
        modi facere sapiente optio ea ullam nesciunt dicta alias dolore nihil.
        Laudantium esse ex ducimus est! Ad voluptas neque sint iste corrupti
        cupiditate eligendi nam adipisci, dolorem ut voluptates exercitationem
        suscipit quia perferendis incidunt commodi sit inventore magnam
        voluptate dolores amet natus totam distinctio? Fugit labore earum, quo
        consequuntur voluptate illum. Odio cumque ullam ipsum ipsam, officiis
        quas rem unde totam.
      </p>
    </SubPageTemp>
  );
};

export default Works;
