import MyLayout from "./component/layout"
import Link from "next/link";
import Header from "./component/header"

export default function Home() {
  const categories = [{
    name: 'Bestsellers',
    linkUrl: '/books/bestsellers'
  },
  {
    name: 'New Releases',
    linkUrl: '/books/new-releases'
  },
  {
    name: 'Classics',
    linkUrl: '/books/classics'
  },
  {
    name: "Children's Books",
    linkUrl: '/books/childrens-books'
  },
  {
    name: 'Cookbooks',
    linkUrl: '/books/cookbooks'
  }
  ];
  return (
    <>

      <MyLayout title="Home" />

      <h1>Welcome to the Online Bookstore</h1>

      <p>Discover the latest and greatest books from around the world.</p>
      <div>
        <h2> Categories </h2>

        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={category.linkUrl}>

                <img src={category.imageUrl} />
                <span>{category.name}</span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}