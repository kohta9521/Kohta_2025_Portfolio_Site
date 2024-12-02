import React from "react";

// scss
import styles from "../styles/page.module.scss";

// data
import {
  aboutSubItems,
  profileSubItems,
  worksSubItems,
  blogSubItems,
} from "@/data/subItems";

// components
import Header from "@/components/organism/Header";
import ListItem from "@/components/molecules/ListItem";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header id="home">
        <ListItem
          id="about"
          mainLink="/about"
          mainTitle="About"
          subItems={aboutSubItems}
        />
        <ListItem
          id="profile"
          mainLink="/profile"
          mainTitle="Profile"
          subItems={profileSubItems}
        />
        <ListItem
          id="work"
          mainLink="/works"
          mainTitle="Works"
          subItems={worksSubItems}
        />
        <ListItem
          id="blog"
          mainLink="/blog"
          mainTitle="Blog"
          subItems={blogSubItems}
        />
      </Header>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias
        aspernatur vitae, distinctio officia in. Repellendus totam ab
        repudiandae cumque mollitia quam dolore voluptates reprehenderit nisi
        maiores, voluptatibus illo quos fugit magnam consequuntur alias eos
        minus exercitationem sequi? Cum cupiditate aliquid et amet iusto illum
        suscipit voluptatem commodi alias modi enim quis officiis facilis sed
        rerum expedita officia, temporibus cumque? Magni iure placeat tenetur
        voluptatibus facere dolore necessitatibus nam distinctio sint voluptatum
        dolores repellendus porro veritatis repudiandae molestiae, iste
        voluptate modi numquam a. Voluptatibus impedit possimus quaerat, saepe
        deleniti quo earum nam! Eum veritatis quam dolor nemo libero assumenda
        cum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias
        aspernatur vitae, distinctio officia in. Repellendus totam ab
        repudiandae cumque mollitia quam dolore voluptates reprehenderit nisi
        maiores, voluptatibus illo quos fugit magnam consequuntur alias eos
        minus exercitationem sequi? Cum cupiditate aliquid et amet iusto illum
        suscipit voluptatem commodi alias modi enim quis officiis facilis sed
        rerum expedita officia, temporibus cumque? Magni iure placeat tenetur
        voluptatibus facere dolore necessitatibus nam distinctio sint voluptatum
        dolores repellendus porro veritatis repudiandae molestiae, iste
        voluptate modi numquam a. Voluptatibus impedit possimus quaerat, saepe
        deleniti quo earum nam! Eum veritatis quam dolor nemo libero assumenda
        cum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestias
        aspernatur vitae, distinctio officia in. Repellendus totam ab
        repudiandae cumque mollitia quam dolore voluptates reprehenderit nisi
        maiores, voluptatibus illo quos fugit magnam consequuntur alias eos
        minus exercitationem sequi? Cum cupiditate aliquid et amet iusto illum
        suscipit voluptatem commodi alias modi enim quis officiis facilis sed
        rerum expedita officia, temporibus cumque? Magni iure placeat tenetur
        voluptatibus facere dolore necessitatibus nam distinctio sint voluptatum
        dolores repellendus porro veritatis repudiandae molestiae, iste
        voluptate modi numquam a. Voluptatibus impedit possimus quaerat, saepe
        deleniti quo earum nam! Eum veritatis quam dolor nemo libero assumenda
        cum!
      </p>
    </div>
  );
}
