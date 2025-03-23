import Flex from "../Flex"
import LatestBlogCard from "./LatestBlogCard"

const LatestBlogContainer = () => {
  return (
    <Flex className="gap-x-[20px]">
    <LatestBlogCard/>
    <LatestBlogCard/>
    <LatestBlogCard/>
    <LatestBlogCard/>
    </Flex>
  )
}
export default LatestBlogContainer