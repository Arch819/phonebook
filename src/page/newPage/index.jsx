import React from 'react';

import { Grid, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Image, SwiperBox, SwiperItem, TextContainer } from './Swiper.styled';
import imageTest from '../../images/picture.png';

const NewPage = () => {
  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };

  const data = {
    idFilter: 12,
    filter: 'body',
    name: 'test',
    imgURL: imageTest,
  };

  return (
    <div style={{ height: '444px' }}>
      <SwiperBox
        slidesPerView={1}
        grid={{
          rows: 10,
        }}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 3,
            },
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            grid: {
              rows: 2,
            },
            spaceBetween: 16,
          },
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
        <SwiperItem key={data.idFilter}>
          <Link
            to={`/exercises/${data.category}/${encodeURIComponent(data.name)}`}
          >
            <Image src={data.imgURL} alt="name"></Image>
            <TextContainer>
              <h3>{capitalizedWord(data.name)}</h3>
              <p>{data.filter}</p>
            </TextContainer>
          </Link>
        </SwiperItem>
      </SwiperBox>
    </div>
  );
};

export default NewPage;