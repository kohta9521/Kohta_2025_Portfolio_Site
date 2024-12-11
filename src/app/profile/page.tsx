import React from "react";

// scss
import styles from "./Profile.module.scss";

// components
import SubPageTemp from "@/components/template/SubPageTemp";

const Profile = () => {
  return (
    <SubPageTemp
      id="profile"
      enTitle="PROFILE"
      jaTitle="プロフィール"
      sectionArray={[
        { id: "profile", title: "Profile", link: "/" },
        { id: "career", title: "Career", link: "/profile/#career" },
        { id: "skills", title: "Skills", link: "/profile/#skills" },
        { id: "future", title: "Future Career", link: "/profile/#future" },
        { id: "hobby", title: "Hobby", link: "/profile/#hobby" },
      ]}
    >
      <p className={styles.title}>main content</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eaque,
        blanditiis eius dicta explicabo possimus nobis iste ullam nulla fugiat
        impedit neque, sequi maiores. Vero animi sequi ut eveniet veniam.
        Necessitatibus rerum voluptates eum quidem optio officia a magni libero
        porro, ab voluptatum, consequuntur harum laudantium quo. Perferendis
        impedit nemo dolores expedita veniam tenetur fugit alias ipsa recusandae
        ipsam optio cum suscipit repellendus nihil, vero molestias quidem
        perspiciatis? Reiciendis consectetur neque eum delectus quibusdam at,
        nulla inventore fugiat officiis expedita suscipit unde dolorum enim
        quam. Magnam, voluptatum quibusdam asperiores, dignissimos numquam
        molestias fugit fuga voluptatem nobis debitis tenetur autem rem.
      </p>
    </SubPageTemp>
  );
};

export default Profile;
