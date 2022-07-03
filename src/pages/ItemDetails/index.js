import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import StarRating from 'react-svg-star-rating';
import { addToCart } from 'store/cartSlice';
import { useGetProductByIdQuery } from 'store/productsApi';
import IconFavorites from '../../assets/icons/IconFavorites';

const productColors = [
  {
    id: 1,
    name: 'Black',
    hex: '#000000',
    inStock: true,
  },
  {
    id: 2,
    name: 'White',
    hex: '#ffffff',
    inStock: true,
  },
  {
    id: 3,
    name: 'Red',
    hex: '#ff0000',
    inStock: true,
  },
  {
    id: 4,
    name: 'Midnight Blue',
    hex: '#0000ff',
    inStock: true,
  },
];

const ItemDetails = ({ match }) => {
  const { slug } = match.params;
  const [itemDetail, setItemDetail] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const { data, loading, error } = useGetProductByIdQuery(slug);
  const dispatch = useDispatch();

  useEffect(() => {
    setItemDetail(data);
  }, [slug, data]);

  const handleSelectColor = item => {
    setSelectedColor(item);
  };

  const handleAddToCart = item => {
    dispatch(addToCart({ ...item, color: selectedColor }));
  };

  console.log('deneme', selectedColor);

  return (
    <section className="details">
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}

      {itemDetail?.map(item => (
        <div className="container details__container" key={item?.id}>
          <div className="details__image">
            <img src={item?.image} alt={item?.name} width="80%" />
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

            <div className="details__colors">
              {productColors?.map(color => (
                <button
                  className="details__colors__item"
                  key={color.id}
                  onClick={() => handleSelectColor(color)}
                  style={{
                    backgroundColor: color.hex,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    border: '1px solid black',
                    marginInline: 5,
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <div className="details__btn">
              <button
                className="details__btn--add-to-cart"
                disabled={!selectedColor}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
              <button className="details__btn--add-favorites">
                <IconFavorites color="#0071dc" strokeWidth="3.5" width="32" height="32" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ItemDetails;
