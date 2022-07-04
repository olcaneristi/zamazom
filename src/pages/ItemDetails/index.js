import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StarRating from 'react-svg-star-rating';
import { addToCart } from 'store/cartSlice';
import { useGetProductByIdQuery } from 'store/productsApi';
import IconFavorites from '../../assets/icons/IconFavorites';
import AnimatedPage from 'components/AnimatedPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { motion } from 'framer-motion';
import { motionContainer, motionItem } from 'helper';
import { addToFavorites } from 'store/favoriteSlice';

const ItemDetails = ({ match }) => {
  const { slug } = match.params;
  const [itemDetail, setItemDetail] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, loading, error } = useGetProductByIdQuery(slug);
  const dispatch = useDispatch();

  useEffect(() => {
    setItemDetail(data);
  }, [slug, data]);

  useEffect(() => {
    selectedProduct === []
      ? setSelectedProduct(selectedProduct)
      : setSelectedProduct(itemDetail && itemDetail[0]?.variantList[0]);
  }, [itemDetail]);

  const handleSelectProduct = item => {
    setSelectedProduct(item);
  };

  const handleAddToCart = selectedProduct => {
    dispatch(addToCart(selectedProduct));
  };

  const handleAddFavorites = selectedProduct => {
    dispatch(addToFavorites(selectedProduct));
  };

  return (
    <section className="details">
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}

      {itemDetail?.map(item => (
        <AnimatedPage className="container details__container" key={item?.id}>
          <div className="details__image">
            <Swiper
              style={{
                '--swiper-navigation-color': '#000',
                '--swiper-pagination-color': '#000',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="my__swiper__top"
            >
              {item?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={item?.name} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={6}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="my__swiper__bottom"
            >
              {item?.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={item?.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="details__content">
            <h1 className="details__content__title">{item?.name}</h1>
            <p className="details__content__brand">{item?.title}</p>

            <div className="details__price__and__rating">
              <div className="details__price">
                {item?.wasPriceRange !== item?.isPriceRange && (
                  <div className="details__price--regular">
                    <span className="details__price--regular-text">
                      {item?.wasPriceRange.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  </div>
                )}

                <div className="details__price--sale">
                  <span
                    className={
                      item?.wasPriceRange === item?.isPriceRange
                        ? 'details__price--sale-text-normal'
                        : 'details__price--sale-text-discount'
                    }
                  >
                    {item?.isPriceRange.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                </div>
              </div>

              <div className="details__rating">
                <div className="details__rating__star">
                  <span className="details__rating__star--count">{item?.rating}</span>
                  <StarRating
                    unit="float"
                    initialRating={item?.rating}
                    isReadOnly
                    starClassName="home__product__rating--star"
                    containerClassName="details__rating__star--stars"
                  />
                </div>
                <div className="details__rating__count">
                  <span> {`${item?.ratingCount} Reviews`}</span>
                </div>
              </div>
            </div>

            <div className="details__description">
              <p>{item?.description}</p>
            </div>
            <motion.ul
              style={{ display: 'flex' }}
              className="motionContainer"
              variants={motionContainer}
              initial="hidden"
              animate="visible"
            >
              {item.variantList.map((variant, index) => (
                <motion.li
                  key={index}
                  className="home__product__variant__item motionItem"
                  variants={motionItem}
                >
                  <button
                    className="home__product__variant__button"
                    onClick={() => handleSelectProduct(variant)}
                    style={{
                      border:
                        selectedProduct?.id === variant?.id
                          ? '1.5px solid black'
                          : '1.5px solid rgb(216, 208, 208)',
                    }}
                  >
                    <img src={variant.coverImage} alt={variant.name} width="80px" />
                  </button>
                  <p className="home__product__variant__color">{variant.color.name}</p>
                </motion.li>
              ))}
            </motion.ul>
            <div className="details__btn">
              <button
                className="details__btn--add-to-cart"
                onClick={() => handleAddToCart(selectedProduct)}
              >
                Add to Cart
              </button>
              <button
                className="details__btn--add-favorites"
                onClick={() => handleAddFavorites(selectedProduct)}
              >
                <IconFavorites color="#0071dc" strokeWidth="3.5" width="32" height="32" />
              </button>
            </div>
          </div>
        </AnimatedPage>
      ))}
    </section>
  );
};

export default ItemDetails;
