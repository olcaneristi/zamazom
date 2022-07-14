import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from 'react-svg-star-rating';
import { addToCart } from 'store/cartSlice';
import { useGetProductByIdQuery } from 'store/productsApi';
import IconFavorites from 'assets/icons/IconFavorites';
import AnimatedPage from 'components/AnimatedPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { motion } from 'framer-motion';
import { motionContainer, motionItem } from 'helper';
import { addToFavorites, removeFromFavorites } from 'store/favoriteSlice';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import Loader from 'components/Loader';
import ReviewChart from 'components/ReviewChart';
import IconVerified from 'assets/icons/IconVerified';
import IconArrowRight from 'assets/icons/IconArrowRight';

const ItemDetails = ({ match }) => {
  const [itemDetail, setItemDetail] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const { slug } = match.params;
  const { favorites } = useSelector(state => state.favorites);
  const { data, isLoading, error } = useGetProductByIdQuery(slug);

  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    setItemDetail(data);
    window.scrollTo({ top: 0 });
  }, [data]);

  useEffect(() => {
    selectedProduct === undefined
      ? setSelectedProduct(itemDetail && itemDetail[0]?.variantList[0])
      : setSelectedProduct(selectedProduct);
  }, [itemDetail, selectedProduct]);

  useEffect(() => {
    if (favorites.length > 0) {
      const isFavorite = favorites.find(item => item?.id === selectedProduct?.id);
      setIsFavorite(isFavorite);
    }
  }, [favorites, selectedProduct, isFavorite]);

  const handleSelectProduct = item => {
    setSelectedProduct(item);
  };

  const handleFavoritesCheck = selectedProduct => {
    const checkProductId = favorites.map(item => item.id);
    const isAlreadyFavorited = checkProductId.includes(selectedProduct.id);

    setIsFavorite(isAlreadyFavorited);

    if (isFavorite) {
      setIsSubmitLoading(true);
      setTimeout(() => {
        dispatch(removeFromFavorites(selectedProduct));
        setIsSubmitLoading(false);
      }, 500);
    } else {
      setIsSubmitLoading(true);
      setTimeout(() => {
        dispatch(addToFavorites(selectedProduct));
        setIsSubmitLoading(false);
      }, 500);
    }
  };

  const handleScrollRef = () => {
    ref.current.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  const handleAddToCart = selectedProduct => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      dispatch(addToCart(selectedProduct));
      setIsSubmitLoading(false);
    }, 500);
  };

  const sortedReviews =
    itemDetail &&
    itemDetail[0]?.properties?.customerReviews?.reviews?.slice().sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <div>
        <h1>{error.error}</h1>
      </div>
    );
  }

  return (
    <AnimatedPage className="details container">
      {isSubmitLoading && <Loader haveBackground width={50} />}

      {itemDetail?.map(item => (
        <div className="details__container" key={item?.id}>
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

              <button className="details__rating" onClick={handleScrollRef}>
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
              </button>
            </div>

            <div className="details__description">Color: {selectedProduct?.color.name}</div>

            <motion.ul
              style={{ display: 'flex', flexWrap: 'wrap' }}
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
              {(!isFavorite && (
                <button
                  className="details__btn--add-favorites"
                  onClick={() => handleFavoritesCheck(selectedProduct)}
                >
                  <IconFavorites color="#0071dc" strokeWidth="3.5" width="32" height="32" />
                </button>
              )) || (
                <button
                  className="details__btn--add-favorites"
                  onClick={() => handleFavoritesCheck(selectedProduct)}
                >
                  <IconFavorites
                    fill="#0071dc"
                    color="#0071dc"
                    strokeWidth="3.5"
                    width="32"
                    height="32"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <section className="details__info">
        <div className="details__specification">
          <h3 className="details__info__heading details__specification__heading">
            Product Specifications
          </h3>
          <ul className="details__specification__list">
            <Fade bottom>
              {itemDetail &&
                itemDetail[0]?.properties.productDetails.specifications.map((item, index) => (
                  <li key={index} className="details__specification__list__item">
                    <p className="details__specification__list__item--title">{item.name}</p>
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="details__specification__list__item--img"
                    />
                    <p className="details__specification__list__item--desc">{item.value}</p>
                  </li>
                ))}
            </Fade>
          </ul>
        </div>

        <div className="details__reviews" ref={ref}>
          <h3 className="details__info__heading details__reviews__heading">Customer Reviews</h3>
          <div className="details__reviews__rating">
            <div className="details__reviews__rating__wrapper">
              <div className="details__reviews__rating__total">
                <span className="details__reviews__rating__total--text">
                  {itemDetail && itemDetail[0]?.properties?.customerReviews?.totalCustomerRating}
                </span>
                <StarRating
                  unit="float"
                  initialRating={
                    itemDetail && itemDetail[0]?.properties?.customerReviews?.totalCustomerRating
                  }
                  isReadOnly
                  starClassName="details__reviews__rating__total--star"
                  containerClassName="details__rating__star--stars"
                />
                <span className="details__reviews__rating__total--count">
                  {`${
                    itemDetail &&
                    itemDetail[0]?.properties?.customerReviews?.totalCustomerRatingCount
                  } reviews`}
                </span>
              </div>

              <div className="details__reviews__rating__all">
                <button type="button" className="details__reviews__rating__all--btn">
                  View all reviews (
                  {itemDetail &&
                    itemDetail[0]?.properties?.customerReviews?.totalCustomerRatingCount}
                  )
                  <span>
                    <IconArrowRight width="18" height="18" color="#0071dc" />
                  </span>
                </button>
              </div>
            </div>

            <div className="details__reviews__rating__chart">
              {itemDetail &&
                itemDetail[0]?.properties?.customerReviews?.ratingDetails?.map((item, index) => (
                  <ReviewChart ratings={item} key={index} />
                ))}
            </div>
          </div>

          <div className="details__reviews__review">
            <ul className="details__reviews__review__list">
              {sortedReviews?.map((item, index) => (
                <li
                  key={index}
                  className="details__reviews__review__item"
                  style={{
                    borderBottom:
                      index === sortedReviews.length - 1 ? 'none' : '1px solid rgb(238 231 231)',
                  }}
                >
                  <div className="details__reviews__review__content">
                    <div className="details__reviews__review__user">
                      <img
                        src={`https://i.pravatar.cc/300?img${index}`}
                        alt="user"
                        className="details__reviews__review__user__img"
                      />
                      <div className="details__reviews__review__user--wrapper">
                        <div className="details__reviews__review__user__name">
                          <p className="details__reviews__review__user__name--text">
                            {item.name}
                            <span className="details__reviews__review__user__name--icon">
                              <IconVerified width="16" height="16" />
                            </span>
                          </p>
                          <StarRating
                            unit="float"
                            initialRating={item.rating}
                            isReadOnly
                            starClassName="home__product__rating--star"
                            containerClassName="details__rating__star--stars"
                          />
                        </div>

                        <div className="details__reviews__review__user__date">
                          <span>{moment(item.createdAt).format('DD/MM/YYYY')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="details__reviews__review__comment">
                      <p className="details__reviews__review__comment--text">{item.comment}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default ItemDetails;
