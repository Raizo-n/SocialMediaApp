import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //Temporary
  const posts = [
    {
      id: 1,
      name: "Rachel",
      profilePic:
        "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userId: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, perspiciatis? Molestias qui rem veritatis sed quas voluptatibus officiis quam quos tempore illo explicabo, alias voluptas impedit. Nobis, minima obcaecati! Itaque.",
      img: "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Rachel",
      profilePic:
        "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userId: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, perspiciatis? Molestias qui rem veritatis sed quas voluptatibus officiis quam quos tempore illo explicabo, alias voluptas impedit. Nobis, minima obcaecati! Itaque.",
    },
    {
      id: 3,
      name: "Rachel",
      profilePic:
        "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userId: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, perspiciatis? Molestias qui rem veritatis sed quas voluptatibus officiis quam quos tempore illo explicabo, alias voluptas impedit. Nobis, minima obcaecati! Itaque.",
      img: "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Rachel",
      profilePic:
        "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userId: 4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, perspiciatis? Molestias qui rem veritatis sed quas voluptatibus officiis quam quos tempore illo explicabo, alias voluptas impedit. Nobis, minima obcaecati! Itaque.",
      img: "https://images.pexels.com/photos/15254469/pexels-photo-15254469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
