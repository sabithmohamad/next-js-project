import { Wrapper } from "../layout";
import HomeFive from '../components/homes/home-5';
import SEO from "../components/seo";

export default function index() {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeFive />
    </Wrapper>
  )
}
