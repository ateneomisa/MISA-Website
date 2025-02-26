import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShoppingCart,
  faArrowLeftLong,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import Layout from '../../Layout/index'
import Button from '../../Elements/Button'

import { MerchContext } from '../MerchContext'

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0)
  const { cart, deleteFromCart, updateItemQuantity } = useContext(MerchContext)

  useEffect(() => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      total += cart[i]?.totalPrice
    }

    if (total !== cartTotal) {
      setCartTotal(total)
    }
  }, [cart, cartTotal])

  return (
    <Layout>
      <div className="m-16">
        <div className="flex">
          <FontAwesomeIcon
            className="w-[50px] h-[50px] mr-5 text-[#2097A2]"
            icon={faShoppingCart}
          />
          <p className="text-4xl font-extrabold">Your Shopping Cart</p>
        </div>

        <table className="mt-5 w-full hidden lg:table">
          <thead>
            <tr>
              <th className="border-b-2 border-[#D9E8EC] pb-5 text-[#2097A2] font-normal text-base w-1/2 text-left">
                PRODUCT
              </th>
              <th className="border-b-2 border-[#D9E8EC] pb-5 text-[#2097A2] font-normal text-base text-left w-[16%]">
                PRICE
              </th>
              <th className="border-b-2 border-[#D9E8EC] pb-5 text-[#2097A2] font-normal text-base text-left w-[16%]">
                QUANTITY
              </th>
              <th className="border-b-2 border-[#D9E8EC] pb-5 text-[#2097A2] font-normal text-base text-right w-[16%]">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart?.map((item, index) => {
                return (
                  <tr>
                    <td className="p-5 border-b-2 border-[#D9E8EC] flex">
                      <img
                        alt="merchPhoto"
                        className="h-[200px] w-[200px]"
                        src={item?.photoURL}
                      />
                      <div className="flex justify-center ml-6 flex-col">
                        <p className="text-2xl font-extrabold">{item?.name}</p>
                        {item?.selectedCategory ? (
                          <p>
                            {item?.categoryName}: {item?.selectedCategory}
                          </p>
                        ) : null}
                        {item?.bundleItems
                          ? item?.bundleItems.map((bundleItem) => {
                              return (
                                <div>
                                  {bundleItem?.name}{' '}
                                  {bundleItem?.categoryName
                                    ? `(${bundleItem?.categoryName}: ${bundleItem?.selectedCategory})`
                                    : null}
                                </div>
                              )
                            })
                          : null}
                      </div>
                    </td>
                    <td className="py-5 border-b-2 border-[#D9E8EC]">
                      <p className="text-xl">
                        ₱{parseFloat(item?.price).toFixed(2)}
                      </p>
                    </td>
                    <td className="py-5 border-b-2 border-[#D9E8EC]">
                      <div className="flex">
                        <div className="text-xl font-medium py-2 text-[#31ADAF] border-2 rounded-md border-[#31ADAF] w-[200px] flex justify-around">
                          <button
                            className="cursor-pointer"
                            onClick={() =>
                              item?.quantity > 1
                                ? updateItemQuantity(index, 'subtract')
                                : null
                            }
                          >
                            -
                          </button>
                          <p>{item?.quantity}</p>
                          <button
                            className="cursor-pointer"
                            onClick={() => updateItemQuantity(index, 'add')}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cursor-pointer text-[#2097A2] hover:text-[#31ADAF] ease-in duration-150"
                          onClick={() => deleteFromCart(index)}
                        >
                          <FontAwesomeIcon
                            className="w-[30px] h-[30px] ml-2 mt-2"
                            icon={faTrash}
                          />
                        </button>
                      </div>
                    </td>
                    <td className="py-5 border-b-2 border-[#D9E8EC] text-right">
                      <p className="text-xl">
                        ₱{parseFloat(item?.quantity * item?.price).toFixed(2)}
                      </p>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr className="text-[#31ADAF] text-center">
                <td colSpan={4}>
                  <p className="mt-16">No merch yet!</p>
                  <p>Start browsing by going back to our merch list.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="mt-5 w-full table lg:hidden">
          {cart.length > 0 ? (
            <div>
              {cart.map((item, index) => {
                return (
                  <div className="mt-6">
                    <div className="flex">
                      <img
                        alt="merchPhoto"
                        src={item?.photoURL}
                        className="w-[100px] h-[100px]"
                      />
                      <div className="flex justify-center ml-6 flex-col">
                        <p className="text-2xl font-extrabold">{item?.name}</p>
                        {item?.categoryName ? (
                          <p>
                            {item?.categoryName}: {item?.selectedCategory}
                          </p>
                        ) : null}

                        {item?.bundleItems
                          ? item?.bundleItems.map((bundleItem) => {
                              return (
                                <div>
                                  {bundleItem?.name}{' '}
                                  {bundleItem?.categoryName
                                    ? `(${bundleItem?.categoryName}: ${bundleItem?.selectedCategory})`
                                    : null}
                                </div>
                              )
                            })
                          : null}
                      </div>
                    </div>

                    <table className="w-full mt-6">
                      <thead>
                        <tr>
                          <th className="w-1/3 text-[#2097A2] font-normal text-base text-left">
                            PRICE
                          </th>
                          <th className="w-1/3 text-[#2097A2] font-normal text-base text-center">
                            QUANTITY
                          </th>
                          <th className="w-1/3 text-[#2097A2] font-normal text-base text-right">
                            TOTAL
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-b-2 border-[#D9E8EC] pb-6">
                            <p className="text-left">
                              ₱{parseFloat(item?.price).toFixed(2)}
                            </p>
                          </td>
                          <td className="border-b-2 border-[#D9E8EC] pb-6">
                            <div className="flex justify-center">
                              <div className="text-xl font-medium py-2 text-[#31ADAF] border-2 rounded-md border-[#31ADAF] w-[100px] flex justify-around">
                                <button
                                  className="cursor-pointer text-[#2097A2] hover:text-[#31ADAF] ease-in duration-150"
                                  onClick={() =>
                                    item?.quantity > 1
                                      ? updateItemQuantity(index, 'subtract')
                                      : null
                                  }
                                >
                                  -
                                </button>
                                <p>{item?.quantity}</p>
                                <button
                                  className="cursor-pointer text-[#2097A2] hover:text-[#31ADAF] ease-in duration-150"
                                  onClick={() =>
                                    updateItemQuantity(index, 'add')
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <button
                                className="cursor-pointer text-[#2097A2] hover:text-[#31ADAF] ease-in duration-150"
                                onClick={() => deleteFromCart(index)}
                              >
                                <FontAwesomeIcon
                                  className="w-[30px] h-[30px] ml-2 mt-2"
                                  icon={faTrash}
                                />
                              </button>
                            </div>
                          </td>
                          <td className="border-b-2 border-[#D9E8EC] pb-6">
                            <p className="text-right">
                              ₱{parseFloat(item?.totalPrice).toFixed(2)}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-[#31ADAF] text-center">
              <p className="mt-16">No merch yet!</p>
              <p>Start browsing by going back to our merch list.</p>
            </div>
          )}
        </div>

        <div className="mt-5 text-right">
          <p className="text-2xl font-extrabold">
            SUBTOTAL{' '}
            <span className="text-4xl ml-2">
              ₱{parseFloat(cartTotal).toFixed(2)}
            </span>
          </p>
          <p className="mt-2">Final payment calculated at checkout</p>
        </div>

        <div className="flex justify-between mt-5">
          <Link
            to="/merch"
            className="group text-[#2097A2] hover:text-[#31ADAF] ease-in duration-150"
          >
            <div className="flex">
              <FontAwesomeIcon
                className="w-[30px] h-[30px] mr-4"
                icon={faArrowLeftLong}
              />
              <p className="text-lg">Back to merch</p>
            </div>
          </Link>

          {cart.length > 0 ? (
            <Link to="/merch/checkout">
              <Button variant="primary">Check out</Button>
            </Link>
          ) : (
            <Button variant="primary" disabled="true">
              Check out
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Cart
