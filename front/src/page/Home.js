import { React, useEffect, useState } from 'react';
import { BiMap } from 'react-icons/bi';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';
import CategoryButton from '../component/CategoryButton';
import axios from 'axios';

const Home = () => {
  let address = 'DB에 저장된 유저 위치정보';
  let history = useHistory();

  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await axios('http://localhost:5000/image/read/13');
    console.log(result.data);
    setData(result.data);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {/* <Link to="/post"> */}
        <Button
          variant="light"
          className="border border-dark mt-3"
          block
          onClick={() => history.push('/post')}
        >
          <BiMap className="mr-3" />
          {address}
        </Button>
        {/* </Link> */}
        <Slider />
        {/* <CategoryButton className="col-1"/> */}
        <div className="mt-3">
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="좋아요"
              className="mr-3"
            />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="가전제품"
            />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="도시락"
            />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="디저트"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="마트"
              className="mr-3"
            />
            <CategoryButton image={'uploads/' + data.image_name} name="분식" />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="스포츠"
            />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="아시안"
            />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="양식"
              className="mr-3"
            />
            <CategoryButton image={'uploads/' + data.image_name} name="의류" />
            <CategoryButton image={'uploads/' + data.image_name} name="일식" />
            <CategoryButton image={'uploads/' + data.image_name} name="주류" />
          </div>
          <div className="d-flex mt-2">
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="치킨"
              className="mr-3"
            />
            <CategoryButton image={'uploads/' + data.image_name} name="피자" />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="휴대폰"
            />
            <CategoryButton
              image={'uploads/' + data.image_name}
              name="햄버거"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
