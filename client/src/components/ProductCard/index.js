import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from 'react-svg-star-rating';
import { useDispatch } from 'react-redux';
import { addToCart } from 'services/slices/cartSlice';
import CustomModal from '../Modal';
import { motion } from 'framer-motion';
import { motionContainer, motionItem } from 'utils';
import { Oval } from 'react-loader-spinner';
import useWindowSize from 'hooks/useWindowSize';
import Button from '../Button';

const ProductCard = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const { width } = useWindowSize();

  const handleSelectProduct = item => {
    setSelectedProduct(item);
  };

  useEffect(() => {
    width < 768 ? setIsShown(true) : setIsShown(false);
  }, [width]);

  const handleAddToCartAndCloseModal = item => {
    setIsSubmitLoading(true);
    setTimeout(() => {
      dispatch(addToCart(item));
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
      setIsSubmitLoading(false);
    }, 500);
    setSelectedProduct([]);
  };

  const handleEnterMouse = () => {
    setIsShown(true);
  };

  const handleLeaveMouse = () => {
    width > 768 && setIsShown(false);
  };

  const openSelectProductModal = data => {
    return (
      <CustomModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="home__product__variant__container">
          <h3 className="home__product__variant__title">Color</h3>
          <motion.ul
            className="home__product__variant__list motionContainer"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            {data &&
              data.variantList.map((item, index) => (
                <motion.li
                  key={index}
                  className="home__product__variant__item motionItem"
                  variants={motionItem}
                >
                  <Button
                    className="home__product__variant__button"
                    onClick={() => handleSelectProduct(item)}
                    style={{
                      border:
                        selectedProduct.id === item.id
                          ? '1.5px solid black'
                          : '1.5px solid rgb(216, 208, 208)',
                    }}
                  >
                    <picture>
                      <source srcSet={data?.coverImage} type="image/webp" />
                      <img src={data?.coverImage} alt={data.name} width="80px" height="80px" />
                    </picture>
                  </Button>
                  <p className="home__product__variant__color">{item.color.name}</p>
                </motion.li>
              ))}
          </motion.ul>
        </div>

        <div className="home__product__variant__summary">
          <span className="home__product__variant__summary--price">
            {data.isPriceRange.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>

          <Button
            buttonType="secondary"
            disabled={!selectedProduct.id || isSubmitLoading}
            className="home__product__variant__summary--btn"
            onClick={() => handleAddToCartAndCloseModal(selectedProduct)}
          >
            {isSubmitLoading ? <Oval width={16} height={16} color="#FFF" /> : 'Add to Cart'}
          </Button>
        </div>
      </CustomModal>
    );
  };

  return (
    <li className="home__product" onMouseEnter={handleEnterMouse} onMouseLeave={handleLeaveMouse}>
      <Link className="home__product__element" to={`/products/${data?.slug}`}>
        <div className="home__product__img">
          <picture>
            <source srcSet={data?.coverImage} type="image/webp" />
            <img src={data?.coverImage} alt={data?.name} />
          </picture>
        </div>
        <div className="home__product__content">
          <div className="home__product__text">
            <span className="home__product__title">{data.title}</span>
            <span className="home__product__name">{data.name}</span>
          </div>

          <div className="home__product__price">
            <div className="home__product__price--regular">
              {data.wasPriceRange !== data.isPriceRange && (
                <span className="home__product__price--regular-text">
                  {data.wasPriceRange.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              )}
            </div>
            <div className="home__product__price--sale">
              <span
                className={
                  data.wasPriceRange === data.isPriceRange
                    ? 'home__product__price--sale-text-normal'
                    : 'home__product__price--sale-text-discount'
                }
              >
                {data.isPriceRange.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
            </div>
          </div>

          <div className="home__product__rating">
            <StarRating
              unit="half"
              initialRating={data.rating}
              isReadOnly
              starClassName="home__product__rating--star"
            />
            <span className="home__product__rating--count">{`(${data.ratingCount})`}</span>
          </div>
        </div>
      </Link>

      {isShown && (
        <div className="home__product__add-to-cart">
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="home__product__add-to-cart-btn"
          >
            Add to Cart
          </Button>
        </div>
      )}

      {openSelectProductModal(data)}
    </li>
  );
};

export default ProductCard;
